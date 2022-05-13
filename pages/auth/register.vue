<template>
  <div id="signup" class="container-fluid">
    <div class="jumbotron hm">
      <h1 class="display-4">Sign up</h1>
      <form @submit.prevent="register" action="verify.php" method="POST">
        <div class="form-floating custom">
          <input type="text" class="form-control shadow-none" id="floatingName" name="floatingName" placeholder="Name" v-model="registerData.name" required="required">
          <label for="floatingName">Name</label>
        </div>
        <div class="form-floating custom">
          <input type="email" class="form-control shadow-none" id="floatingEmail" name="floatingEmail" placeholder="Email" v-model="registerData.email" autocomplete="email" required="required" :class="{'is-valid': registerData.email.match(this.emailRegex), 'is-invalid': !registerData.email.match(this.emailRegex)}">
          <label for="floatingEmail">Email</label>
        </div>
        <div class="form-floating custom">
          <input type="password" class="form-control shadow-none" id="floatingPassword" @change="generatecode()" placeholder="Password" v-model="registerData.password" required="required" name="password">
          <label for="floatingPassword">Password</label>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Invalid</div>
        </div>
        <input style="display: none;" name="message" id="message" :value="verificationcode">
        <small class="form-text">
          Password must contain 
          <ul class="requirements">
            <li class="text-danger" v-if="!registerDataCheck.has_lowercase">One lowercase letter</li>
            <li class="text-danger" v-if="!registerDataCheck.has_uppercase">One uppercase letter</li>
            <li class="text-danger" v-if="!registerDataCheck.has_number">One number</li>
            <li class="text-danger" v-if="!registerDataCheck.has_special">One special character.</li>
          </ul>
        </small>
        <br>
        <NuxtLink to="login"><small class="text-muted">Already have an account? Login here</small></NuxtLink>
        <div class="inputBox">
          <input class="btn btn-main" type="submit" value="Signup" id="submit">
        </div>
      </form>
      <!--Verification modal-->
      <Modal>
        <div slot="header">
          <h5 class="modal-title" id="modalLabel">Verification Code</h5>
        </div>
        <div slot="body">
          <form @submit.prevent="verifyuser">
            <div class="inputBox">
              <input v-model="usercode" required="required" id="verificationcode" type="number" name="verificationcode"/>
              <span class="spantxt" for="verificationcode">Verification Code</span>
            </div>
            <div class="inputBox">
              <input type="submit" value="Register">
            </div>
          </form>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
export default {
  name: "register",
  head: {
    script: [
      {
        src: "https://www.google.com/recaptcha/api.js",
        defer: true
      }
    ]
  },
  data() {
    return {
      usercode: "",
      verificationcode: "",
      adBlock: false,
      registerData: {
        name: "",
        email: "",
        password: "",
        has_minimum_length: false,
        has_number: false,
        has_lowercsae: false,
        has_uppercase: false,
        has_special: false
      },
      emailRegex: /^\S+@\S+\.\S+$/,
      stringRegex: /[a-zA-Z0-9&_\.-]/
    };
  },
  computed: {
    registerDataCheck() {
      let has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.registerData.password);
      let has_uppercase = /[A-Z]/.test(this.registerData.password);
      let has_lowercase = /[a-z]/.test(this.registerData.password);
      let has_number = /\d/.test(this.registerData.password);
      return {
        has_special,
        has_uppercase,
        has_lowercase,
        has_number
      }
    }
  },
  methods: {
    showSnackbar(message) {
			this.$notifier.showMessage({ content: message, color: 'success' })
		},
    generatecode() {
      const verificationgenerator = Math.floor(100000 + Math.random() * 900000)
      this.verificationcode = Math.floor(100000 + Math.random() * 900000)
      //console.log(this.verificationcode)
    },
    async register(e) {
      let has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.registerData.password);
      let has_uppercase = /[A-Z]/.test(this.registerData.password);
      let has_lowercase = /[a-z]/.test(this.registerData.password);
      let has_number = /\d/.test(this.registerData.password);
      if (!has_special || !has_lowercase || !has_number || !has_uppercase) {
        return this.showSnackbar("Invalid password")
      }
      if (!this.registerData.email.match(this.emailRegex)) {
        return this.showSnackbar("Invalid email")
      }
      try {
        $('#modal').modal('toggle');
        emailjs.send("service_5s4j6tk","template_2v29ddt", {
          email: this.registerData.email,
          name: this.registerData.name,
          message: this.verificationcode
        }).then((res) => {
          this.showSnackbar("An email has been send to you with a verification code")
          document.getElementById("submit").toggleAttribute("modal");
        });
        /*emailjs.sendForm('service_5s4j6tk', 'template_2v29ddt', e.target, 'user_iJj06RAflifrwnzoXxkoy',{
          email: this.registerData.email,
          name: this.registerData.name,
          code: this.verificationcode
        }).then((res) => {
          this.showSnackbar("An email has been send to you with a verification code")
          document.getElementById("submit").toggleAttribute("modal");
        })*/
        /*const user = await this.$axios.$post("/api/auth/signin", {
          name: this.registerData.name,
          email: this.registerData.email,
          password: this.registerData.password
        }).then((response) => {
          alert(response)
        });*/

        /*const recaptcha = await this.$axios.$post("https://www.google.com/recaptcha/api/siteverify", {
          secret: 'ånei du. ingen api key her'
        }).then((response) => {
          console.alert(response)
        })
        console.log(user);*/
      } catch (err) {
        console.log(err);
      }
    },
    async verifyuser() {
      //console.log(this.usercode, this.verificationcode)
      if (this.usercode === this.verificationcode.toString()) {
        this.showSnackbar('verificationcode ok')
        console.log('verificationcode ok')
        try {
          const hashedPassword = this.hashPassword(this.registerData.password)
          const user = await this.$axios.$post("/api/auth/signin", {
            name: this.registerData.name,
            email: this.registerData.email,
            password: hashedPassword.hash
          }).then(async (response) => {
            alert(response.message)
            await this.$auth.loginWith('local', {
              data: this.registerData
            })
            // this.$router.push("/");
            useRouter.push("/");
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Verification code does not match. Please check your email")
      }
    },
    async checkAdBlock() {
      const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      try {
        await fetch(new Request(googleAdUrl)).catch(_ => this.adBlock = true)
      } catch (e) {
        this.adBlock = true
      } finally {
        if (!this.adBlock != !false) {
          alert("Please disable ADblocker");
          //console.log(`AdBlock Enabled: ${this.adBlock}`)
        }
      }
    },
    hashPassword(password) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);
      return {
          hash
      };
    }
  },
  mounted() {
    //this.checkAdBlock()
    
    init("user_iJj06RAflifrwnzoXxkoy");
  }
};
</script>

<style lang="scss">
#signup {
    position: relative;
    margin-top: 3rem;
    .my-4 {
        &.valid {
            background: #00ff00;
            box-shadow: 0 0 0.25rem #00ff00, 0 0 0.50rem #00ff00, 0 0 1rem #00ff00;
        }
        &.invalid {
            background: #ff0000;
            box-shadow: 0 0 0.25rem #ff0000, 0 0 0.50rem #ff0000, 0 0 1rem #ff0000;
        }
    }
}
ul {
  &.requirements {
    list-style-type: none;
  }
}
</style>