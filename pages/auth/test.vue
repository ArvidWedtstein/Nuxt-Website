<template>
  <div id="test" class="container-fluid">
    <div class="jumbotron hm">
      <h1 class="display-4">Sign up</h1>
      <form action="verify.php" method="POST" @submit.prevent="register">
        <div class="form-floating custom">
          <input type="text" class="form-control shadow-none" id="floatingName" name="floatingName" placeholder="Name" v-model="name" required="required">
          <label for="floatingName">Name</label>
        </div>
        <div class="form-floating custom">
          <input type="text" class="form-control shadow-none" id="message" name="message" placeholder="Name" v-model="message" required="required">
          <label for="floatingName">Message</label>
        </div>
        <div class="form-floating custom">
          <input type="email" class="form-control shadow-none" id="floatingEmail" name="floatingEmail" placeholder="Email" v-model="email" autocomplete="email" required="required">
          <label for="floatingEmail">Email</label>
        </div>
    
        <div class="inputBox">
          <input class="btn btn-main" type="submit" value="Signup" id="submit">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "test",
  data() {
    return {
      usercode: "",
      verificationcode: "",
      adBlock: false,
      email: "",
      name: "",  
      message: "",
      emailRegex: /^\S+@\S+\.\S+$/,
      stringRegex: /[a-zA-Z0-9&_\.-]/
    };
  },
  methods: {
    showSnackbar(message) {
			this.$notifier.showMessage({ content: message, color: 'success' })
	},
    async register(e) {
      try {
        fetch(`verify.php`, {
            method: "post",
            body: e.target
        })
        this.$axios.$post("/api/auth/verificationcode", {
            name: this.name,
            email: this.email
        })
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
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