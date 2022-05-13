<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col" v-for="(head, i) in head" :key="i">{{ head }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="(body, x) in body" :key="x">{{ body }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'tablegrid',
  template: '<tablegrid/>',
  transition: 'slide-bottom',
  props: {
    head: [],
    body: []
  },
  async useAsyncData({ $auth, $config }) {
    const config = useRuntimeConfig().public;
    let baseURL = config.baseURL;
    return {
      baseURL
    }
  },
  methods: {
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
    }
  }
}
</script>
<style lang="scss">
.table {
  color: colorscheme('white');
  thead {
    th {
      border-block-color: #777 !important;
      color: #888;
    }
  }
  td, th {
    border-block-color: #444 !important;
  }
}

</style>