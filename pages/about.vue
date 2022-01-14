
<template>
  <div v-bind:class="{shake: ragemode2}" id="about">
    <div class="container-fluid">	
      <div class="row aboutbackground">
        <div class="col-xl-6 about">
          <div class="text">
            <div class="jumbotron">
              <h1 class="display-4">Well, Hello there</h1>
              <p class="lead">My name is Arvid Wedtstein</p>
              <hr class="my-4">
              <p>I am currently studying: Informationteknology and Media<br>Age: 17<br>I'm interested in: 3D-Printing, Webdevelopment<br><br>Progamming languages/Frameworks that i have learnt in the past:</p>
              <div class="icon-bar icons">
                <i class="python fab fa-python"></i>
                <i class="js fab fa-js-square"></i>
                <i class="html fab fa-html5"></i>
                <i class="css fab fa-css3-alt"></i>
                <i class="sass fab fa-sass"></i>
                <i class="vue fab fa-vuejs"></i>
                <!--<i class="ubuntu fab fa-ubuntu"></i>-->
              </div>
              <br>
              <div class="icon-bar social">
                <!--<a href="https://www.facebook.com/profile.php?id=100022120962542" target="_blank animate__bounceIn" class="facebook"><i class="fa fa-facebook"></i></a>--> 
                <a href="https://github.com/ArvidWedtstein" title="My Github" target="_blank" class="bg-github"><i class="fab fa-github"/></a> 
                <!--<a href="https://twitter.com/ArvidWedtstein" target="_blank" class="twitter animate__bounceIn"><i class="fa fa-twitter"></i></a> 
                <a href="https://www.twitch.tv/bass_gamer03" target="_blank" class="twitch animate__bounceIn"><i class="fa fa-twitch"></i></a> 
                <a href="https://steamcommunity.com/id/arviwed/" target="_blank" class="steam animate__bounceIn"><i class="fa fa-steam"></i></a>-->
                <a href="https://discord.gg/5hMtxNW" target="_blank" class="bg-discord"><i class="fab fa-discord"/></a> 
                <a href="https://www.linkedin.com/in/arvid-wedtstein-7498a21b7" target="_blank" class="bg-linkedin"><i class="fab fa-linkedin"/></a>
                <a href="/CV.pdf" class="bg-cv animate__bounceIn">CV</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 about">
          <div class="aboutMe col-md-10">
            <!--Unsavable image-->
            <button class="profileimage" v-on:click="play"><object class="img-fluid" id="profile" v-bind:class="{shake: ragemode}" data="/images/profilePicture.png"></object></button>
            <audio ref="audioElm" src="/lefishe.mp3"></audio>
          </div>
        </div>
        <div class="col-xl-12 about">
          <Timeline :timeline="timeline"/>
        </div>
      </div>
    </div>
    <Review class="reviews" v-if="reviews" :reviewuser="reviews"></Review>
  </div>
</template>


<script lang="text/javascript">
import Review from '../components/review.vue';
const axios = require('axios');
const moment = require('moment');
export default {
  name: "about",
  transition: "slide-bottom",
  key(route) {
    return route.fullPath;
  },
  async asyncData({ $axios }) {
    const rev = await $axios.get("/api/project/getRatings").then(async (res) => {
      return res.data.reviews
    });
    let reviews = rev.slice(0, 5);
    return {
      reviews
    }
  },
  data() {
    return {
      //reviews: [],
      ragemode: false,
      ragemode2: false,
      timeline: [
        {
          message: "Praksis",
          description: "Begynte på Appex som praksiselev!",
          date: "01/09/2021",
          dateend: "today"
        },
        {
          message: "VG2",
          description: "Begynte på Informasjonsteknologi og Media VG2",
          date: "16/08/2021",
          dateend: "24/06/2022"
        },
        {
          message: "VG1",
          description: "Begynte på Informasjonsteknologi og Media VG1. Dette året lærte jeg om Photoshop, Illustrator osv",
          date: "16/08/2020",
          dateend: "24/06/2021"
        },
        {
          message: "Grunnskole",
          description: "Tja, de første 10 årene med grunnskole i guess",
          date: "16/08/2010",
          dateend: "24/06/2020"
        }
      ]
    };
  },
  methods: {
    play: function (event) {
      this.$refs.audioElm.play();
      this.ragemode = true;
      setTimeout(() => {
        this.ragemode2 = true;
      }, 9000);
    },
  },
  mounted() {

  },
  components: { Review }
}
</script>
<style lang="scss" scoped>
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
.profileimage {
  position: relative;
  transition: 0.5s;
  padding: 1.5rem;
  background: url('/images/UI/PlayerAvatarUI.png');
  background-size: cover;
  background-position: center;
  outline: none;
  border: none;
  border-radius: 50%;
  &:hover {
    background-size: 110%;
    transform: scale(1.1);
    box-shadow: inset -5px -5px 10px rgba(255,255,255,0.05),
      inset 5px 5px 15px rgba(0,0,0,0.5);
  }
  #profile {
    border-radius: 50%;
    //background: transparent;
    mask-image: -webkit-gradient(linear, top, bottom, 
    color-stop(0.00,  rgba(0,0,0,1)),
    color-stop(0.35,  rgba(0,0,0,1)),
    color-stop(0.50,  rgba(0,0,0,0)),
    color-stop(0.65,  rgba(0,0,0,0)),
    color-stop(1.00,  rgba(0,0,0,0)));
  }
}

/* About Me page */
.about { 
  &:first-child {
    padding-top: 2rem;
    background: colorscheme('darkblue');
    clip-path: polygon(0% 0%, 0% 100%, 90% 100%, 100% 0% );
  }
  &:nth-child(2) {
    padding: 6rem;
    background: none; 
    clip-path: polygon(10% 0%, 0% 100%, 100% 100%, 100% 0%);
  }
}
.text .aboutMe {
  background: none;
  text-align: left;
  display: -ms-flexbox;
    display: flex;
  position: relative;
  padding-left: 0rem;
  font-size: 5rem;
}
.reviews {
  position: relative;
  bottom: 0;
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .text .aboutMe {
    font-size: 20px;
    text-align: center;
    float: left;
    padding: 0;
  }
  .about {
    &:first-child {
      clip-path: none;
    }
  }
}



</style>