<template>
  <div class="container">
     <div class="jumbotron" v-for="(review, o) in review" :key="o">
      <h1 class="display-4"><i v-for="x in 5" :key="x" :class="{ 'text-warning': x <= review.rating }" class="fas fa-star" /></h1>
      <p class="lead">{{ review.author }}: "{{ review.review }}"</p>
      <button v-if="editReview.id == review._id && editReview.active" class="btn btn-success" @click="saveReview()">Save Review</button>
      <button v-else class="btn btn-main" @click="changeReview(review)">Edit Review</button>
      <div v-if="editReview.id == review._id && editReview.active">
        <div class="form-floating custom">
          <input type="text" class="form-control shadow-none" id="floatingReviewAuthor" placeholder="Author" v-model="editReview.user">
          <label for="floatingReviewAuthor">Edit Author</label>
        </div>
        <div class="form-floating custom">
          <input type="text" class="form-control shadow-none" id="floatingReview" placeholder="Review" v-model="editReview.review">
          <label for="floatingReview">Edit Review</label>
        </div>
        <div class="form-floating custom">
          <select class="form-select" id="floatingReviewStar" v-model="editReview.rating" aria-label="Star Rating">
            <option class="bg-dark" v-for="i in 5" :key="i" :value="i">{{ i }}</option>
          </select>
          <label for="floatingReviewStar">Edit Rating</label>
        </div>
      </div>
      <hr class="my-4">
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
  data() {
    return {
      review: [],
      editReview: {
        active: false,
        id: "",
        user: "",
        review: "",
        rating: ""
      },
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


        this.review = this.review.map(obj => {
          if (obj._id === id) {
            return { rating: this.editReview.rating, author: this.editReview.user, review: this.editReview.review };
          }

          return obj;
        });

        this.editReview = {
          active: false,
          id: "",
          user: "",
          review: "",
          rating: ""
        }
      } catch (err) {
        console.log(err)
      }
      
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YY");
    },
    showSnackbar(message) {
      this.$notifier.showMessage({ content: message, color: 'success' })
    },
  },
  created() {
    this.review = this.reviews
  },
  mounted() {
    this.review = this.$store.state.ratings.ratings;
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


</style>