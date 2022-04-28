
<template>
  <div v-bind:class="{shake: ragemode2}" id="aboutpage">
    <div class="container-fluid">	
      <div class="row aboutbackground">
        <div class="col-xl-6 about">
          <div class="text">
            <div class="jumbotron">
              <h1 class="display-4">Well, Hello there</h1>
              <p class="lead">My name is Arvid Wedtstein</p>
              <hr class="my-4">
              <p>I am currently studying: Informationtechnology and Media<br>Age: {{ calculateAge() }}<br>I'm interested in: 3D-Printing, Webdevelopment<br><a href="mailto: arvidw0310@gmail.com">Email: arvidw0310@gmail.com</a><br>Progamming languages/Frameworks that i have learnt in the past:</p>
              <div class="icon-bar icons">
                <i class="php fab fa-php"/>
                <i class="js fab fa-js-square"/>
                <i class="html fab fa-html5"/>
                <i class="css fab fa-css3-alt"/>
                <i class="sass fab fa-sass"/>
                <i class="vue fab fa-vuejs"/>
              </div>
              <br>
              <div class="icon-bar social">
                <a href="https://github.com/ArvidWedtstein" title="My Github" target="_blank" class="bg-github"><i class="fab fa-github"/></a> 
                <a href="https://discord.gg/5hMtxNW" target="_blank" class="bg-discord"><i class="fab fa-discord"/></a> 
                <a href="https://www.linkedin.com/in/arvid-wedtstein-7498a21b7" target="_blank" class="bg-linkedin"><i class="fab fa-linkedin"/></a>
                <a href="/CV.pdf" class="bg-cv animate__bounceIn">CV</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 about">
          <div class="aboutMe col-md-10">
            <button class="profileimage" v-on:click="play"><object class="img-fluid" id="profile" v-bind:class="{shake: ragemode}" data="/images/profilePicture.png"></object></button>
            <audio ref="audioElm" src="/lefishe.mp3"></audio>
          </div>
        </div>
        <div class="col-xl-12 about">
          <button v-if="userPerm('MODIFY_PROJECTS')" class="btn btn-main" data-bs-toggle="modal" data-bs-target="#modal">Create New Timeline Event</button>
          <Timeline :timeline="this.timeline || this.$store.state.timeline.timeline"/>
          <Modal>
            <div slot="header">
              <h5 class="modal-title" id="modalLabel">New Timeline Event</h5>
            </div>
            <div slot="body">
              <div class="form-floating custom">
                <input type="text" class="form-control shadow-none" id="timelineeventname" v-model="timelineevent.name">
                <label for="timelineeventname">Event Name</label>
              </div>
              <div class="form-floating custom">
                <input type="text" class="form-control shadow-none" id="timelineeventdescription" v-model="timelineevent.description">
                <label for="timelineeventdescription">Event Description</label>
              </div>
              <div class="form-floating custom">
                <input type="datetime" class="form-control shadow-none" id="timelineeventstartdate" v-model="timelineevent.startdate">
                <label for="timelineeventstartdate">Event Start Date</label>
              </div>
              <div class="form-floating custom">
                <input type="datetime" class="form-control shadow-none" id="timelineeventenddate" v-model="timelineevent.enddate">
                <label for="timelineeventenddate">Event End Date</label>
              </div>
            </div>
            <div slot="footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" v-on:click="createtimelineevent" class="btn btn-main" data-bs-dismiss="modal">Create Timeline Event</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    <Review class="reviews" v-if="this.$store.state.ratings.ratings.length > 0" :reviewuser="this.$store.state.ratings.ratings"/>
  </div>
</template>


<script lang="text/javascript">
import Review from '../components/review.vue';
import Timeline from '../components/timeline.vue';
import Modal from '../components/Modal.vue';
const axios = require('axios');
const moment = require('moment');
export default {
  name: "about",
  transition: "slide-bottom",
  key(route) {
    return route.fullPath;
  },
  data() {
    return {
      //reviews: [],
      ragemode: false,
      ragemode2: false,
      timelineevent: {
        name: "",
        description: "",
        startdate: "",
        enddate: "",
      },
      timeline: [
        {
          name: "Lærlingsplass",
          description: "Fikk lærlingsplass hos Ohm-egg-a",
          date: "28/02/2022",
          enddate: "27/06/2024"
        },
        {
          name: "Praksis",
          description: "Begynte på Appex som praksiselev!",
          date: "01/09/2021",
          enddate: "today"
        },
        {
          name: "VG2",
          description: "Begynte på Informasjonsteknologi og Media VG2",
          startdate: "16/08/2021",
          enddate: "24/06/2022"
        },
        {
          name: "VG1",
          description: "Begynte på Informasjonsteknologi og Media VG1. Dette året lærte jeg om Photoshop, Illustrator osv",
          startdate: "16/08/2020",
          enddate: "24/06/2021"
        },
        {
          name: "Grunnskole",
          description: "Tja, de første 10 årene med grunnskole i guess",
          startdate: "16/08/2010",
          enddate: "24/06/2020"
        }
      ]
    };
  },
  methods: {
    userPerm(perm) {
      if (this.isAuthenticated) {
        if (this.$store.getters.getUserInfo.role.permissions.includes(perm)) {
          return true;  
        } else {
          return false;
        }
      }
    },
    play: function (event) {
      // this.$refs.audioElm.play();
      // this.ragemode = true;
      // setTimeout(() => {
      //   this.ragemode2 = true;
      // }, 9000);
    },
    async createtimelineevent() {
      const timelineevent = await this.$axios.$post("api/project/newTimelineEvent", this.timelineevent).then((res) => {
        this.showSnackbar(res.message, 'success');
        this.$store.commit('timeline/add', res.data.timeline.timeline)
        console.log(res.data)
      })
      console.log(timelineevent)
      // this.$nuxt.refresh()
      this.timelineevent.name = ""
      this.timelineevent.description = ""
      this.timelineevent.startdate = ""
      this.timelineevent.enddate = ""
    },
    async calculateAge() {
      let birthday = "2004-10-04"
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();

      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    }
  },
  mounted() {

  },
  components: { Review, Timeline, Modal }
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