
<template>
  <div class="container">
    <div class="circle-diagram" style="--percent: 87.5">87.5%</div>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'circlediagram',
  template: '<CircleDiagram/>',
  transition: 'slide-bottom',
  props: {
    user: {},
    roles: []
  },
  async asyncData({ $auth }) {

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
    },
  }
}
</script>
<style lang="scss">
.circle-diagram {
  --degree: calc(360deg / 100 * var(--percent));
  --hue: calc(360 / 100 * var(--percent));
  --accent-color: hsl(var(--hue), 100%, 50%);

  font-size: 1rem;
  width: 100%;
  max-width: 15rem;
  aspect-ratio: 1;
  position: relative;
  border-radius: 50%;
  filter: drop-shadow(0 0.5rem .5rem rgb(0 0 0 / .5));
  
  display: grid;
  place-items: center;
  font-weight: 700;
  font-family: system-ui, sans-serif;
  color: var(--accent-color);
  text-shadow: 0 0 5px rgb(0 0 0);
  cursor: pointer;
}
.circle-diagram::before, .circle-diagram::after{
  content: "";
  position: absolute;
  border-radius: 50%;
  z-index: -1;
}
.circle-diagram::before{
  inset: 1em;
  background-color: var(--accent-color);
  background-image: 
    radial-gradient(
      circle at calc(50% - 0.25rem) calc(50% + 0.25rem),
      rgb(0 0 0 / .25) 25%,
      transparent calc(25% + 0.5rem)
    ),
    conic-gradient(
      rgb(255 255 255 / .25) 0deg,
      rgb(0 0 0 / .25) var(--degree)
    ),
    conic-gradient(
      at calc(50% - 0.4rem) calc(50% + 0.4rem),
      transparent var(--degree),
      rgb(0 0 0 / .25) calc(var(--degree) + 5deg)
    );
    
    
    
  
}
.circle-diagram::after{
  inset: 0;
  background-color: rgb(50 50 50);
  background-image: linear-gradient(transparent, rgb(0 0 0 / .5));
  --mask1: radial-gradient(black 25%, transparent calc(25% + 1px));
  --mask2: conic-gradient(transparent var(--degree), black calc(var(--degree) + .5deg));
  -webkit-mask-image: var(--mask1), var(--mask2);
  mask-image: var(--mask1), var(--mask2);
}
</style>