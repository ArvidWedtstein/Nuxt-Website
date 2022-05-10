<template>
  <div class="body">
    <Navbar/>
    <Nuxt/>
    <slot/>
    <Snackbar></Snackbar>
    <!-- <ArvidFooter class="footer"></ArvidFooter> -->
  </div>
</template>

<script>
//import Editor from '@tinymce/tinymce-vue'
import Snackbar from '~/components/snackbar.vue'
import ArvidFooter from '../components/ArvidFooter.vue'
import axios from 'axios'

export default {
  template: "default",
  transition: "slide-bottom",
  components: {
    Snackbar,
    ArvidFooter
  },
  async asyncData({ $axios, $store }) {
    // const projects = await $axios.$get("/api/project/getProjects");
    // $store.commit('projects/init', projects.projects);

    // const articles = await $axios.$get("/api/news/getnewsposts");
    // $store.commit('newspost/init', articles.posts);

    // const users = await $axios.$get("/api/auth/allusers");
    // $store.commit('users/init', users.users);

    // const reviews = await $axios.$get("/api/project/getRatings");
    // $store.commit('ratings/init', reviews.reviews);

    // const roles = await $axios.$get("/api/auth/getRoles");
    // $store.commit('roles/init', roles.roles);
    
  },
  async fetch() {
    const projects = await this.$axios.$get("/api/project/getProjects");
    this.$store.commit('projects/init', projects.projects);

    const articles = await this.$axios.$get("/api/news/getnewsposts");
    this.$store.commit('newspost/init', articles.posts);

    const users = await this.$axios.$get("/api/auth/allusers");
    this.$store.commit('users/init', users.users);

    const reviews = await this.$axios.$get("/api/project/getRatings");
    this.$store.commit('ratings/init', reviews.reviews);

    const roles = await this.$axios.$get("/api/auth/getRoles");
    this.$store.commit('roles/init', roles.roles);

    const timeline = await this.$axios.$get("/api/project/getTimelineEvents");
    this.$store.commit('timeline/init', timeline);

    console.log('fetched')
  },
  methods: {
    enableTooltips() {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      })
    },
    async getNewspost() {
      const articles = await this.$axios.$get("/api/news/getnewsposts");
      this.$store.commit('newspost/init', articles.posts);
      console.log('FETCHED POSTS');
    },
    async getUsers() {
      const users = await this.$axios.$get("/api/auth/allusers");
      this.$store.commit('users/init', users.users);
      console.log('FETCHED users');
    },
    async getRatings() {
      const reviews = await this.$axios.$get("/api/project/getRatings");
      this.$store.commit('ratings/init', reviews.reviews);
    },
    async getProjects() {
      const projects = await this.$axios.$get("/api/project/getProjects");
      this.$store.commit('projects/init', projects.projects);
    },
    async getRoles() {
      const roles = await this.$axios.$get("/api/auth/getRoles");
      this.$store.commit('roles/init', roles.roles);
    }
  },
  async mounted() {
    
    //this.scroll()
    // this.enableTooltips()
    // this.getNewspost();
    // this.getUsers();
    // this.getRatings();
    // this.getProjects();
    // this.getRoles();
  },
  computed: {

  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=MedievalSharp');
@import url("https://use.typekit.net/gyz4ina.css");
@import url("https://use.typekit.net/gyz4ina.css");
$maincolors: (
  "grey": #212529,
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
html {
  -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  // height: 100%;
  /*& > * {
    //transform: rotate3d(0, 0, 0.5, 3.142rad) !important;
  }*/
  --titlefont: "Montserrat";
  --textfont: "Quicksand";
}
*,
*::after,
*::before {
    box-sizing: border-box;
}
body {
  // cursor: url('~/static/images/ArvidLogo.png'), auto;	
  // min-height: 100%;
  background: colorscheme('grey');
}
#__nuxt, #__layout {
  height: 100vh !important;
}

.rad-shadow {
  border: 1px solid hsl(200 10% 50% / 15%);
  box-shadow: 0 1rem .5rem -.5rem;
  box-shadow:
    0 2.8px 2.2px hsl(200 50% 3% / calc(.3 + .03)),
    0 6.7px 5.3px hsl(200 50% 3% / calc(.3 + .01)),
    0 12.5px 10px hsl(200 50% 3% / calc(.3 + .02)),
    0 22.3px 17.9px hsl(200 50% 3% / calc(.3 + .02)),
    0 41.8px 33.4px hsl(200 50% 3% / calc(.3 + .03)),
    0 100px 80px hsl(200 50% 3% / .3)
  ;
}

.footer {
  position: relative;
  border-top: 1px solid #fff;
  bottom: 0;
  width: 100%;
  background: colorscheme('blue');
}

$rainbow-grad0: linear-gradient(0deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
$rainbow-grad90: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
$titlefont: "Montserrat";
$textfont: "Quicksand";
$border-radius: 0.25rem;
.jumbotron {
  background: none;
  text-align: center;
  margin: 2rem;
  &.newspost {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    text-transform: uppercase;
  }
  .my-4 {
    background: #ffffff;
  }
}


// ----------------------------
// Nav Links & Links
// ----------------------------
.nav-link, .nav-tabs {
  color: colorscheme('white');
  &.show, &:hover, &:active, &:focus, &.nuxt-link-exact-active {
    color: colorscheme('lime');
  }
}
a {
  &.column {
    color: #2f2f2f;
  }
  transition: all 0.2s ease;
  &:hover {
    &:not(.link), &:not(.rgb-link) {
      text-decoration: underline;
    }
    color: colorscheme("lime");
    &.column {
      text-decoration: none;
      color: #2f2f2f;
    }
    
  }
  color: colorscheme("lime");
  text-decoration: none;
  &.link {
    &.active, &.nuxt-link-exact-active {
      background-size: 300% 2px;
    }
    background: linear-gradient(90deg, #7FCD8A, #7FCD8A, #7FCD8A, #7FCD8A);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: left bottom;
    text-decoration: none;
    //font-weight: 900;
    transition: background-size 600ms ease-in-out;
    &:hover {
      color: colorscheme("lime");
      background-size: 300% 2px;
      text-decoration: none;
    }
  }
  &.rgb-link {
    background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-repeat: no-repeat;
    background-size: 0% 3px;
    background-position: left bottom;
    text-decoration: none;
    font-weight: 900;
    transition: background-size 600ms ease;
    &:hover {
      background-size: 300% 3px;
      -webkit-animation: rgb-link 10s ease infinite;
      animation: rgb-link 3s linear infinite;
    }
  }
}


.list-group {
  &.custom {
    .list-group-item {
      color: colorscheme('white');
      border-color: colorscheme('white');
      background: none;
    }
  }
}


// ----------------------------
// Buttons
// ----------------------------
.btn {
  margin: 0.1rem;
  color: colorscheme('white');
  position: relative;
  &.btn-download {
    bottom: 0;
    width: 50%;
    font-size: 1rem;
    background: rgba(colorscheme('white'),0.3);
    text-decoration: none;
    padding: 1rem 1rem;
    transition: 0.5s;
    &:hover {
      background: colorscheme('lime') url("/images/pixel.png");
      background-size: 180px;
      text-decoration: none;
      transition-delay: 0.8s;
      animation: pixel 0.4s steps(8) forwards;
    }
  }
  &.btn-corner {
    background: rgba(0,0,0,.3);
    padding: 0.5rem 1rem;
    overflow: hidden;
    .corner-cover {
      position: absolute;
      width: 50%;
      height: 50%;
      right: -55px;
      bottom: -55px;
      background-color: #00edff;
      background-size: cover;
      -webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      -webkit-box-shadow: 0 0 7px 0 #00edff;
      box-shadow: 0 0 7px 0 #00edff;
      -webkit-transition-duration: 0.3s;
      -moz-transition-duration: 0.3s;
      -o-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    &:hover {
      .corner-cover {
        right: 0px;
        bottom: 0px;
      }
    }
  }
  $btncolors: (
    "red": #ff0000,
    "main": colorscheme('lightblue'),
    "success": colorscheme('lime'),
    "🤯": colorscheme("darkblue"),
    "github": #333333
  );
  @each $item, $color in $btncolors {
    &.btn-#{$item} {
      background: map-get($btncolors, $item);
      margin: 0.4rem;
      border-radius: 0.25rem;
      border: 2px solid transparent;
      box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px
        rgba(0,0,0,0.5), 0 5px 20px rgba(0,0,0,.5), inset 0 0 15px rgba(0,0,0,.2);
      &:hover {
        @if map-get($btncolors, $item) == #ff0000 {
          .ban {
            transform: rotate(45deg);
          }
        }
        box-shadow: 0 0 0 4px #353535, 
          0 0 0 5px #3e3e3e, 
          inset 0 0 0px rgba(0,0,0,1), 
          0 5px 20px rgba(0,0,0,.5), 
          inset 0 0 15px rgba(0,0,0,.2);
      }
    }
  }
}
// @keyframes rgbscroll {
// 	0%
// 	{
// 		background-position: 0%;
// 	}
// 	100%
// 	{
// 		background-position: 400%;
// 	}
// }
@keyframes pixel {
  0% {
      background-position-y: 0px;
  }
  100% {
      background-position-y: -480px;
  }
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: colorscheme('white');
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: colorscheme('white');
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: colorscheme('white');
}
.rgbline {
    background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    height: 3px;
    border: 0;
    background-size: 200% 200%;
    box-shadow: 0px 1px 10px #23d5ab;
}
@keyframes rgb-link {
    0% {
        background-position-x: left;
    }
    50% {
        background-position-x: right;
    }
    100% {
        background-position-x: left;
    }
}
// ----------------------------
// Input
// ----------------------------
.form-floating {
  &.custom {
    margin: 1rem;
    color: colorscheme('white');
    background: none;
    outline: none !important;
    .form-control, .form-select {
      &.form-select > * {
        background: none !important;
        color: lime;
        
      }
      border: 1px solid #ced4da !important;
      color: colorscheme('white');
      box-shadow: none;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-box-shadow: 0 0 0px 1000px #fff inset;
          box-shadow: 0 0 0px 1000px #fff inset;
          -webkit-text-fill-color: colorscheme('white');
      }
      background: none !important;
      &.is-valid {
        box-shadow: inset 0 0 1px #00ff00, inset 0 0 2px #00ff00, inset 0 0 3px #00ff00 !important;
      }
      &.is-invalid {
        border-color: initial;
        box-shadow: inset 0 0 1px #ff0000, inset 0 0 2px #ff0000, inset 0 0 3px #ff0000 !important;
      }
    }
  }
}
.dropdown-toggle { outline: 0; }

// ----------------------------
// Cards
// ----------------------------
.card {
  &.project {
    font-family: $titlefont;
    background-color: colorscheme('darkblue') !important;
    min-height: 250px;
    .card-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.225)
    }
    .langtags {
      margin: 0.5rem 0;
      font-size: 1.3ch;
    }
    img {
      mix-blend-mode: normal;
      object-fit: cover;
      height: 100%;
      filter: grayscale(100);
      border-radius: $border-radius;
      transition: all 0.2s ease-in-out !important;
      //object-position: 0% 0%;
      &.maskimage {
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
        mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0));
      }
    }
    &:hover {
      transition: all 0.2s ease-in-out !important;
      //filter: drop-shadow(4px 4px 10px black);
      img {
        filter: grayscale(0);
        /*transform: matrix3d(
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1.1
        );*/
      }
    }
  }
  &.newspost {
    font-family: $textfont;
    &:hover {
      .topleft {
        display: block;
      }
    }
    .topleft {
      position: absolute;
      top: 0;
      left: 16px;
      display: none;
    }
    .bottomleft {
      position: absolute;
      bottom: 0;
      left: 16px;
    }
    list-style-type: none;
    margin: 0rem 0rem;
    //background: gradientscheme("moonlit");
    transition: all 0.3s ease;
    background: colorscheme('blue');
    width: 100%;
    .card-img-top {
      object-fit: cover;
      object-position: top;
      //clip-path: polygon(0% 10%, 100% calc(20% - 1px), 100% 100%, 0% calc(90% - 1px));  
      &::before {
        border-style: solid;
        border-width: 0 401px 55px 0;
        border-color: transparent #1e1e1e transparent transparent;
      }
    }
    .card-title {
      border-bottom: 1px solid colorscheme('white');
      padding-bottom: 0.5rem;
    }
    .card-text {
      &.description {
        &::first-letter {
          position: relative;
          font-size: 3ch;
          color: #f05053;
          text-transform: uppercase;
        }
      }
    }
    .card-header {
      display: flex;
      flex-direction: row;
      width: 100%;
      background: colorscheme('darkblue');
      .profileImg {
        position: absolute;
        align-self: flex-end;
        background-repeat: no-repeat;
        float: right;
        object-fit: cover;
        right: 10px;
        border-radius: 50%;
        //mix-blend-mode: multiply;
        overflow:hidden
      }
    }
  }
}
 /* About Me link bar */
$iconcolors: (
  "facebook":#3B5998,
  "twitter":#55ACEE,
  "twitch": rgba(145, 71, 255, 0.9),
  "discord": #8697F6,
  "github": #333333,
  "steam": #173e58,
  "linkedin":#007bb5,
  "cv": #009bb5,
  "js": #EFD81D,
  "javascript": #EFD81D,
  "html": #D84B24,
  "css": #3492CB,
  "sass": #C45F92,
  "scss": #C45F92,
  "vue": #49B180,
  "ubuntu": #D24413,
  "python": #dddddd,
  "aspdotnet": #3460A6,
  "assembly": #E11F48,
  "makefile": #F27C26,
  "objective-c": #1876D8,
  "c": #5766B6,
  "php": #687AAD,
  "hack": #808080,
  "cplusplus": #f34b7d,
  "csharp": #178600,
  "go": #00ADD8,
  "procfile": #878787,
);
@each $item, $color in $iconcolors {
  .bg-#{$item} {
    background: map-get($iconcolors, $item) !important;
  }
}
.icon-bar {
  &.icons {
    font-size: 1.8rem;
    opacity: 1;
    & > * {
      @each $color, $value in $iconcolors {
        &.#{$color}  {
          color: $value;
          border: 1mm outset $value;
        }
      }
      &:hover {
          opacity: 1;
      }
    }
  }
  &.social {
    font-size: 1.3rem;
    & > * {
      border-radius: 30% 30%;
      opacity: 0.7;
      color: colorscheme('white');
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,5.2);
      &:hover {
        box-shadow: none;
        font-size: 1.3rem;
        transform: translateY(4px);
      }
    }
  }
  & > * {
    justify-content: center;
    align-items: center;
    display: inline-flex;
    align-items: center;
    align-content: center;
    vertical-align: middle;
    -webkit-transition: all 0.5s ease-in-out;
    text-align: center;
    border: 1px solid transparent;
    padding: 1rem;
    width: 4rem;
    height: 4rem;
    transition: all 0.3s ease;
    margin: 5px 2px;
    line-height: 4rem;
    position: relative;
  }
}

/* Roles colors */
$rolecolor: (
  "Peasant": #42210C,
  "Tradesman": #279e00,
  "Knight": #727272,
  "Nobles": #6d0821,
  "Preast": #87049b,
  "Admin": #dc3545
);
@each $item, $color in $rolecolor {
  .bg-#{$item} {
    background: map-get($rolecolor, $item) !important;
  }
}


</style>