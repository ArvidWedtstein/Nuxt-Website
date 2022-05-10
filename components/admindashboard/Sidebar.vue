<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white" style="width: 280px; border-right: 3px solid #ffffff; height: 100vh;">
    <a href="/" class="d-flex align-items-center text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Dashboard</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a data-bs-toggle="tab" href="#tab1" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Dashboard
        </a>
      </li>
      <li class="nav-item">
        <a data-bs-toggle="tab" href="#tab2" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Users
        </a>
      </li>
      <li class="nav-item">
        <a data-bs-toggle="tab" href="#tab3" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Ratings
        </a>
      </li>
      <li class="nav-item">
        <a data-bs-toggle="tab" href="#tab4" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Roles
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'Sidebar',
  template: '<Sidebar/>',
  transition: 'slide-bottom',
  data() {
    return {

    }
  },
  props: {
    reviews: []
  },
  async asyncData({ $auth }) {

  },
  methods: {
    async changeReview(review) {
      this.editReview.active = true
      this.editReview.id = review._id;
      this.editReview.user = review.author;
      this.editReview.review = review.review;
      this.editReview.rating = review.rating;
    },
    async saveReview() {
      try {
        let token = this.$auth.strategy.token.get().split(" ")[1];
        //console.log(token)
        const { id, user, review, rating } = this.editReview;
        await this.$axios.$post("/api/project/editRating/" + id, {
          user: user,
          review: review,
          rating: rating
        }, {
          "authorization": `Basic ${token}`
        });
        
      } catch (err) {
        console.log(err)
      }
      this.editReview.active = false;
      this.editReview.id = "";
      this.editReview.user = "";
      this.editReview.review = "";
      this.editReview.rating = "";
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YY");
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