
<template>
  <div id="apppage">
    <div class="container">  
      <!--Jumbotron-->
      <div class="jumbotron bg-img">
        <p class="display-4 rgb-link unselectable">Welcome</p>
        <p id="pos" class="lead unselectable">to my website</p>
      </div>
      <!--Hexagon layouten med bildene-->
      <HexGrid :images="images"></HexGrid>
      <Userreview></Userreview>
    </div>
    <!--<div id="particles-js"></div>-->
  </div>
</template>



<script lang="text/javascript">
const axios = require('axios');
import bcrypt from 'bcryptjs';
import Userreview from '../components/userreview.vue';

export default {
  name: "App",
  transition: "slide-bottom",
  data() {
    return {
      images: null,
    };
  },
  mounted() {
    this.importImg();
  },
  methods: {
    async importImg() {
      this.images = [];
      let img = [];
      let r = require.context("~/static/images/Photoshop/", true, /\.(jpg|png|PNG)\b/);
      let r2 = require.context("~/static/images/Unity/", true, /\.(jpg)\b/);
      await r.keys().forEach(key => (img.push({ pathLong: r(key), pathShort: key })));
      await r2.keys().forEach(key => (img.push({ pathLong: r2(key), pathShort: key })));
      for (let i = 0; i < 14; i++) {
        const random = Math.floor(Math.random() * img.length);
        this.images.push(img[random]);
        img.splice(random, 1);
      }
    },
  },
  components: { Userreview }
}

</script>

<style lang="scss">
$colorpalette: (
  "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "meridian": linear-gradient(45deg, #283c86, #45a247)
);
@function gradientscheme($color) {
  @return map-get($colorpalette, $color);
}
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

.orange-fade {
  font-family: Helvetica,Arial,sans-serif;
  font-weight: 100; 
  background: -webkit-linear-gradient(#ff9000,#F5CE95);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>