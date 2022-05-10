
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
            <button class="profileimage">
              <object class="img-fluid" id="profile" data="/images/profilePicture.png"></object>
              <svg id="gradring" xmlns="http://www.w3.org/2000/svg">
                <filter id="filter">
                  <feTurbulence baseFrequency="0.30"></feTurbulence>
                  <feColorMatrix values="0 0 0 1 -.5
                                        0 0 0 1 -.5
                                        0 0 0 1 -.5
                                        0 0 0 0 1" />
                </filter>
                <rect width="100%" height="100%" filter="url(#filter)"></rect>
              </svg>
            </button>
            <audio ref="audioElm" src="/lefishe.mp3"></audio>
          </div>
        </div>
        <div class="col-xl-12 m-3 about">
          <button v-if="userPerm('MODIFY_PROJECTS')" class="btn btn-main" data-bs-toggle="modal" data-bs-target="#modal">Create New Timeline Event</button>
          <Timeline :timeline="this.$store.state.timeline.timeline || this.timeline"/>
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
    calculateAge() {
      let birthday = "2004-10-04"
      let today = new Date();
      let birthDate = new Date(birthday);
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
  padding: 0rem;
  background: transparent;
  // background: url('/images/UI/PlayerAvatarUI.png');
  // background-size: cover;
  // background-position: center;
  outline: none;
  border: none;
  border-radius: 100%;

  box-shadow: 0 0 55px 1px hsl(200, 100%, 50%, 0.5); // Special shadow
  #profile {
    border-radius: 100%;
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
.reviews {
  position: relative;
  bottom: 0;
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .text .aboutMe {
    font-size: 20px;
    text-align: center;
    padding: 0;
  }
  .about {
    &:first-child {
      clip-path: none;
    }
  }
}


#gradring {
  position: fixed;
  z-index: -10;
  width: 100%;
  height: 100%;
  inset: 0;
  opacity: 0.6;
}

// The circle around my profilepicture
.aboutMe {
  width: 400px;
  aspect-ratio: 1;
  background-color:black;
  border-radius: 100%;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 55px 1px hsl(200, 100%, 50%, 0.5);
  margin: 0 8rem;
  &::before,
  &::after {
    content:"";
    position:absolute;
    inset:0;
    border-radius:inherit;
    z-index:-1;
    filter:blur(60px);
    opacity:0.9;
    mix-blend-mode:multiply;
  }
  &::before {
    background-color:hsl(290, 100%, 50%);
    animation: rotate 13s linear infinite;
  }
  &::after {
    background-color:hsl(195, 100%, 50%);
    animation:rotateReverse 13s linear infinite;
  }
}
@keyframes rotate { 
  0% {
    transform:translate(0, 0);
    filter:blur(60px);
  }
   25% {
    transform:translate(15%, 15%);
    filter:blur(80px);
  }
   50% {
    transform:translate(15%, 0);
    filter:blur(100px);
  }
  75% {
    transform:translate(15%, -15%);
    filter:blur(80px);
  }
  100% {
    transform:translate(0, 0);
     filter:blur(60px);
  }
}
@keyframes rotateReverse {
  0% {
    transform:translate(0, 0);
    filter:blur(60px);
  }
  25% {
    transform:translate(-15%, -15%);
    filter:blur(80px);
  }
  50% {
    transform:translate(-15%, 0);
    filter:blur(100px);
  }
  75% {
    transform:translate(-15%, 15%);
    filter:blur(80px);
  }
   100% {
    transform:translate(0, 0);
    filter:blur(60px);
  }
}


@keyframes rotate-reverse {
  0% {
    transform:translate(0, 0);
  }
  20% {
    transform:translate(-15%, -15%);
  }
  40% {
    transform:translate(-15%, -5%);
  }
  60% {
    transform:translate(-15%, 10%);
  }
  80% {
    transform:translate(-15%, 5%);
  }
  100% {
    transform:translate(0, 0);
  }
}

</style>