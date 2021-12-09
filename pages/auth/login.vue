<template>
  <div id="login" class="container-fluid">
    <!--<div class="alert alert-danger">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
    </div>-->
    <div class="jumbotron">
      <h1 class="display-4">Log In</h1>
      <form @submit.prevent="login">
          <div class="form-floating custom">
            <input type="email" v-model="loginData.email" class="form-control shadow-none" id="floatingEmail" placeholder="Email" name="email" :class="{'is-valid': loginData.email.match(this.emailRegex), 'is-invalid': !loginData.email.match(this.emailRegex)}">
            <label for="floatingEmail">Email</label>
          </div>
          <div class="form-floating custom">
            <input type="password" class="form-control shadow-none" id="floatingPassword" placeholder="Password" v-model="loginData.password" @change="generatecode()" required="required" name="code">
            <label for="floatingPassword">Password</label>
          </div>
          <input style="display: none" name="code" :value="verificationcode">
          <label style="display: none" name=""></label>
          <NuxtLink to="register"><small class="text-muted">Don't have an account yet? Create one here!</small></NuxtLink>
          <div class="inputBox">
              <!--<input type="submit" value="Login" id="submit" data-target="#modal" data-toggle="modal">-->
              <input class="btn btn-main" type="submit" value="Login" id="submit">
          </div>
      </form>
      <nuxt-link to="forgotPassword">Forgot your password? Click here!</nuxt-link>
      <!--<Modal>
        <div slot="header">
          <h5 class="modal-title" id="modalLabel">Verification Code</h5>
        </div>
        <div slot="body">
          <form @submit="verify">
            <div class="inputBox">
              <input v-model="usercode" required="required" id="verificationcode" type="number" name="verificationcode"/>
              <span class="spantxt" for="verificationcode">Verification Code</span>
            </div>
            <div class="inputBox">
              <button type="submit" class="btn btn-main">Log In</button>
            </div>
          </form>
        </div>
      </Modal>-->
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  data() {
    return {
      usercode: "",
      verificationcode: "",
      loginData: {
        email: "",
        password: ""
      },
      emailRegex: /^\S+@\S+\.\S+$/,
      stringRegex: /^[a-zA-Z0-9]*$/
    };
  },
  methods: {
    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
    generatecode() {
      const verificationgenerator = Math.floor(100000 + Math.random() * 900000)
      this.verificationcode = verificationgenerator
    },
    forgotPassword() {

    },
    async login(e) {
      try {
        
        let response = await this.$auth.loginWith("local", {
          data: this.loginData
        }).then((res) => {
          this.showSnackbar(res.data.message, "success")
        })
        this.$router.push("/");
        /*emailjs.sendForm('service_5s4j6tk', 'template_y8bo3vr', e.target, 'user_iJj06RAflifrwnzoXxkoy',{
          code: this.verificationcode,
          email: this.loginData.email,
          name: this.verificationcode
          
        }).then((res) => {
          this.showSnackbar("An email has been send to you with a verification code")
          document.getElementById("submit").toggleAttribute("modal");
        })*/
      } catch (err) {
        //console.log(err.message)
        if (err.message.includes('418')) {
          this.showSnackbar('User is banned!', "danger")
        } else {
          this.showSnackbar(err.message, "danger")
        }
      }
    },
    async verify() {
      if (this.usercode === this.verificationcode) {
        console.log('verificationcode ok')
        try {
          let response = await this.$auth.loginWith("local", {
            data: this.loginData
          }).then((res) => {
            this.showSnackbar(res.data.message, "success")
          });
          this.$router.push("/");
        } catch (err) {
          console.log("err", err);
        }
      } else {
        this.showSnackbar("Verification code does not match. Please check your email", "warning");
      }
    },
    showSnackbar(message, type) {
			this.$notifier.showMessage({ content: message, color: type })
		},
    /*onSignIn(googleUser) { // sign in with google
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }*/
  },
  mounted() {

  }
};
</script>


<style lang="scss">
$maincolors: (
    "grey": "#212529",
    "darkblue": #192D40,
    "blue": #21303A,
    "cyan": #375D72,
    "lime": #7FCD8A,
    "white": #F4F0E7,
    "lightblue": #5DACB6
);
#login {
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


</style>