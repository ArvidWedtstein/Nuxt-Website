<template>
  <div class="container">
     <div class='jumbotron'>
      <h1 class='display-4'>{{ user.name }}'s Profile</h1>
      <hr class='my-4'>
      <p class='lead'>{{ user.email }}</p>
      <div class="btn-group">
        <button class="btn btn-🤯" type="button">{{ user.role.name }}</button>
        <button type="button" class="btn btn-🤯 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right" data-bs-auto-close="outside">
          <button v-for="(rank, j) in roles" :key="j" class="dropdown-item" type="button" @click="rolesname(rank.id, user.email)"><span class="icon"><i :class="rank.icon"/></span><span class="roletxt">{{ rank.name }}</span></button>
        </div>
      </div>
      <p class="lead">
        Creation Date: {{ formatDate(user.createdAt) }}
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          99+
          <span class="visually-hidden">New alerts</span>
        </span>
      </p>
      <button v-if="!user.banned" data-bs-toggle="tooltip" data-bs-placement="top" :title="'Ban ' + user.name" v-on:click="banUser(user)" class="btn btn-red"><i class="ban fas fa-gavel"/></button>
      <button v-else v-on:click="unbanUser(user)" data-bs-toggle="tooltip" data-bs-placement="top" :title="'Unban ' + user.name" class="btn btn-success"><i style="transform: rotate(135deg)" class="fas fa-gavel"/></button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'userview',
  template: '<Userview/>',
  transition: 'slide-bottom',
  props: {
    user: {},
    roles: []
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD/MM/YY");
    },
    async banUser(user) {
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1]
        
        await this.$axios.$post("/api/auth/banUser", user, {
          "authorization": `Basic ${token}`
        });
      } catch (err) {
        console.log(err)
      }
      this.$nuxt.refresh();
    },
    async rolesname(role, email) {
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1];
        let json = {
          email: email,
          role: role
        }
        //console.log(token)
        await this.$axios.$post("/api/auth/postUpdateuser", json, {
          headers: {
            "authorization": `Basic ${token}`
          }
        });
      } catch (err) {
        this.showSnackbar(err)
      }
    },
    showSnackbar(message) {
      this.$notifier.showMessage({ content: message, color: 'success' })
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
  }
}
</script>
<style lang="scss">


</style>