<template>
   <div id='userreview'>
     <div class='jumbotron'>
      <p class='lead'>Feedback</p>
      <hr class='my-4'>
      <h1 class='display-4'>Rate this website</h1>
      <div class="rating">
        <input v-model="rating" type="radio" v-bind:value="5" name="rating" id="rating-5" @change="rate">
        <label for="rating-5"></label>
        <input v-model="rating" type="radio" v-bind:value="4" name="rating" id="rating-4" @change="rate">
        <label for="rating-4"></label>
        <input v-model="rating" type="radio" v-bind:value="3" name="rating" id="rating-3" @change="rate">
        <label for="rating-3"></label>
        <input v-model="rating" type="radio" v-bind:value="2" name="rating" id="rating-2" @change="rate">
        <label for="rating-2"></label>
        <input v-model="rating" type="radio" v-bind:value="1" name="rating" id="rating-1" @change="rate">
        <label for="rating-1"></label>
        <div class="emoji-wrapper">
          <div class="emoji">
            <div class="rating-0"><i class="far fa-sad-cry"/></div>
            <div class="rating-1"><i class="far fa-sad-cry"/></div>
            <div class="rating-2"><i class="far fa-meh"/></div>
            <div class="rating-3"><i class="far fa-smile"/></div>
            <div class="rating-4"><i class="far fa-flushed"/></div>
            <div class="rating-5"><i class="far fa-grin-hearts"/></div>
          </div>
        </div>
      </div>
      <form v-if="feedback">
        <div class="form-floating custom">
          <textarea v-model="feedbacktxt" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
          <label for="floatingTextarea2">Feedback</label>
        </div>
        <button type="submit" class="btn btn-🤯" @click="sendFeedback()">Send Feedback</button>
      </form>
     </div>
   </div>
</template>

<script>
export default {
  name: 'userreview',
  transition: 'slide-bottom',
  asyncData({ $axios }) {

  },
  data() {
    return {
      rating: "",
      feedback: false,
      feedbacktxt: ""
    }
  },
  methods: {
    async rate() {
      //console.log(this.rating)
      this.feedback = true
      
    },
    async sendFeedback() {
      if (this.isAuthenticated) {
        const rating = await this.$axios.post('/api/project/newRating', {
          author: this.$store.getters.getUserInfo,
          rating: this.rating,
          review: this.feedbacktxt
        })
      } else {
        const rating = await this.$axios.post('/api/project/newRating', {
          author: "undefined",
          rating: this.rating,
          review: this.feedbacktxt
        })
      }
      
      this.feedback = false;
      this.rating = "";
      this.feedbacktxt = "";
    }
  },
  mounted() {

  },
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;  
    },
  },
} 
</script>
<style lang="scss">
$colorpalette: (
  "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "meridian": linear-gradient(45deg, #283c86, #45a247),
  "bluegreen": linear-gradient(45, #402565, #30BE96)
);

// Website colorscheme
$maincolors: (
  "darkblue": #192D40,
  "blue": #21303A,
  "cyan": #375D72,
  "lime": #7FCD8A,
  "white": #F4F0E7,
  "lightblue": #5DACB6
);
@function colorscheme($color) {
  @return map-get($maincolors, $color);
}
@function gradientscheme($color) {
  @return map-get($colorpalette, $color);
}
#userreview {
  //background: radial-gradient(colorscheme('cyan'), transparent 60%);
  background: colorscheme('blue');
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 4rem 0;
  .rating {
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    flex-direction: row-reverse;
    height: 150px;
    position: relative;
    margin-bottom: 4rem;
    & > label {
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin-top: auto;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 76%;
      transition: .3s;
    }
    & > input {
      display: none;
    }
    & > input:checked ~ label,
    & > input:checked ~ label ~ label {
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    }
    & > input:not(:checked) ~ label:hover,
    & > input:not(:checked) ~ label:hover ~ label {
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    }
  }
  .rating-0 {
    filter: grayscale(100%);
  }
  


  
  #rating-1:checked ~ .emoji-wrapper > .emoji { transform: translateY(-100px); }
  #rating-2:checked ~ .emoji-wrapper > .emoji { transform: translateY(-200px); }
  #rating-3:checked ~ .emoji-wrapper > .emoji { transform: translateY(-300px); }
  #rating-4:checked ~ .emoji-wrapper > .emoji { transform: translateY(-400px); }
  #rating-5:checked ~ .emoji-wrapper > .emoji { transform: translateY(-500px); }
  .emoji-wrapper {
    width: 100%;
    text-align: center;
    height: 100px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .emoji-wrapper:before,
  .emoji-wrapper:after {
    content: "";
    height: 15px;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 1;
  }
  .emoji {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .3s;
    i {
      font-size: 100px;
    }
  }

  .emoji > i {
    margin: 15px 0; 
    width: 70px;
    height: 70px;
    flex-shrink: 0;
  }
}

</style>