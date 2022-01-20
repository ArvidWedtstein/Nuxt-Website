<template>
  <form id="container" @submit.prevent="changePassword">
    <div class="form-floating custom mt-3">
      <input type="password" class="form-control shadow-none" v-model="password.old" required="required" :class="{'is-valid': password.old.match(this.stringRegex), 'is-invalid': !password.old.match(this.stringRegex) || password.old.length == 0}">
      <label for="floatingPassword">Old Password</label>
    </div>
    <div class="form-floating custom mt-3">
      <input type="password" class="form-control shadow-none" v-model="password.new" required="required" :class="{'is-valid': password.new.match(this.stringRegex), 'is-invalid': !password.new.match(this.stringRegex) || password.new.length == 0}">
      <label for="floatingPassword">New Password</label>
    </div>
    <div class="form-floating custom mt-3">
      <input type="password" class="form-control shadow-none" v-model="password.repNew" required="required" :class="{'is-valid': password.repNew.match(this.stringRegex), 'is-invalid': !password.repNew.match(this.stringRegex) || password.new !== password.repNew || password.new.length == 0}">
      <label for="floatingPassword">Repeat Password</label>
    </div>
    <button type="submit" class="btn btn-main">Change Password</button>
  </form>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'ChangePassword',
  template: '<ChangePassword/>',
  transition: 'slide-bottom',
  props: {
    user: {},
    roles: []
  },
  data() {
    return {
      password: {
        old: "",
        new: '',
        repNew: '',
        email: ''
      }
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD/MM/YY");
    },
    async changePassword() {
      if (this.password.old != this.$store.getters.getUserInfo.password) {
        return this.showSnackbar("Old password is not correct", "danger")
      }
      if (this.password.new !== this.password.repNew) {
        return this.showSnackbar("Passwords are not the same", "danger")
      }
      let json = {
        
      }
      if (this.password.new !== "" && this.password.repNew !== "") {
        Object.assign(json, {password: this.hashPassword(this.password.new)})
      }
      if (this.password.email !== "") {
        Object.assign(json, {email: this.password.email})
      }
      try {
        const user = await this.$axios.$post("/api/auth/changePassword", json, {
          headers: {
            "authorization": `Basic ${this.$auth.strategy.token.get().split(" ")[1]}`
          }
        }).then(async (res) => {
            this.showSnackbar(res.message, "success")
        })
        return user;
      } catch (err) {
        this.showSnackbar(err, "danger");
      }
      this.$nuxt.refresh()
      this.password.new = "";
      this.password.repNew = "";
      this.password.email = "";
    },
    showSnackbar(message, type) {
      this.$notifier.showMessage({ content: message, color: type })
    },
  },
  mounted() {

  },
  computed: {
    getUserInfo() {
      if (this.isAuthenticated) {
        if (this.params == this.$store.getters.getUserInfo.id) {
          return this.$store.getters.getUserInfo;
        } else {
          return this.user.user;
        }
      } else {
        return this.user.user;
      }
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;  
    },
    profile() {
      if (this.isAuthenticated) {
        if (!this.params.profile) return false
        if (this.$store.getters.getUserInfo.id == this.params.profile) return true
      } else {
        return false
      }
    }
  },
}
</script>
<style lang="scss">


</style>