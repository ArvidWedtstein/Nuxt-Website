<template>
    <div class='jumbotron'>
       <h1 class='display-4'>Enter email</h1>
        <form id="forgotPassword" @submit.prevent="sendEmail"> 
           <div class='inputBox'>
                
                <input type='text' v-model="email" @change="generatecode()" name='email'/>
                <span class='spantxt' for='email'>Email</span>
                
           </div>
           <input style="display: none" name="name" value="there">
           <input style="display: none;" name="message" :value="verificationcode">
           <button type="submit" class="btn btn-main" @click="sendEmail">Send Email</button>
       </form>
       <form v-if="newpass" id="forgotPassword" @submit.prevent="newPassword()"> 
           <div class='inputBox'>
              <input type='text' v-model="userverificationcode" name='userverificationcode'/>
              <span class='spantxt' for='userverificationcode'>Verificationcode</span>
           </div>
           <div class='inputBox'>
              <input type='text' v-model="password" name='password'/>
              <span class='spantxt' for='email'>New Password</span>
           </div>
           <div class='inputBox'>
              <input type='text' v-model="reppassword" name='repeatpassword'/>
              <span class='spantxt' for='email'>New Password</span>
              <input type="checkbox">
           </div>
           <button type="submit" class="btn btn-main">Reset Password</button>
       </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
   name: 'forgotPassword',
   transition: 'slide-bottom',
   data() {
       return {
           email: '',
           newpass: false,
           userverificationcode: '',
           verificationcode: '',
           name: "there",
           password: "",
           reppassword: ""
       }
   },
   methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_5s4j6tk', 'template_2v29ddt', e.target, 'user_iJj06RAflifrwnzoXxkoy', {
                    message: this.verificationcode,
                    name: this.name,
                    email: this.email
                }).then((res) => {
                    this.newpass = true
                    this.showSnackbar("An email has been send to you with a verification code", "success")
                })
            } catch (err) {
                if (err) {
                    
                }
                console.log(err)
            }
        },
        showSnackbar(message, color) {
			this.$notifier.showMessage({ content: message, color: color })
		},
        generatecode() {
            const verificationgenerator = Math.floor(100000 + Math.random() * 900000)
            this.verificationcode = Math.floor(100000 + Math.random() * 900000)
            //console.log(this.verificationcode)
        },
        async newPassword() {
            if (this.userverificationcode != this.verificationcode) {
                return this.showSnackbar('Verification code does not match', "danger");
            }
            if (this.password !== this.reppassword) {
                return this.showSnackbar('Passwords does not match', "danger");
            }
            try {
                const user = await this.$axios.$post("/api/auth/changePassword", {
                    email: this.email,
                    password: this.hashPassword(this.password)
                }).then((response) => {
                    this.showSnackbar(response.message, "success")
                });
            } catch (err) {
                console.log(err);
            }
            this.$router.push("/");
        },
        hashPassword(password) {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            return {
                hash
            };
        },
   },
   
}
</script>
<style lang="scss">
#forgotPassword {
    margin: 2rem 8rem;
    position: relative;
}
</style>