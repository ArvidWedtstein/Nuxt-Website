<template>
  <div class="hexContainer">
    <ul class="hexGrid">
      <li v-for="(img, i) in images" :key="i" class="hex">
        <div class="hexIn">
          <div class="background"></div>
          <a class="hexLink" :href="img.pathLong">
            <div class="hexImg" :style="{ backgroundImage: 'url('+ img.pathLong +')' }"></div>
            <h1 class="hexTxtTitle orange-fade">{{i + 1}}</h1>
            <p class="hexTxtDesc">{{img.pathShort.replace('./', '').substring(0, img.pathShort.length - 6)}}</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'userview',
  template: '<Userview/>',
  transition: 'slide-bottom',
  props: {
    images: {}
  },
  methods: {
    
  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
$hex-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  /*Hex Layout*/
.hexContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .hexGrid {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 90%;
    
    margin: 0 auto;
    //overflow: hidden;
    list-style-type: none;
    height: 100%;
    /*Hexagon bildene*/
    .hex {
      position: relative;
      visibility:hidden;
      outline: 2px solid transparent;
      transition: all 0.5s;
      backface-visibility: hidden;
      color: #ffffff;
      will-change: transform;
      &::after {
        content:'';
        display:block;
        padding-bottom: 86.602%;
        
      }
      /*Formen av hexagonene*/
      .hexIn {
        position: absolute;
        width:96%;
        padding-bottom: 110.851%; 
        overflow: hidden;
        visibility: hidden;
        outline:1px solid transparent;
        transition: all 0.5s;
        margin: calc(-1*var(--hl)) 0;
        //transform: scale(.95);
        clip-path: $hex-clip-path;
        &:hover {
          .hexImg::before, .hexImg::after, .hexLink {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      }
      .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: gradientscheme("moonlit");
        background-size: 100% 150%;
      }
      .hexIn * {
        position: absolute;
        visibility: visible;
        outline:1px solid transparent; 
        transition: all 0.5s;
      }
      .hexLink {
        display:block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        overflow: hidden;
        &:hover, &:focus {
          h1, p {
            opacity:1;
            transition: 0.5s;
            font-weight: 50;
          }
        }
      }    
      h1, p {
        width: 100%;
        padding: 5%;
        box-sizing: border-box;
        font-weight: 300;
        font-size: 100%;
        opacity: 0;
      }
      h1 {
        &::before, &::after {
          display: inline-block;
          margin: 0 0.5em;
          width: 0.55em;
          height: 0.03em;
          background: #ffffff;
          content: '';
          vertical-align: middle;
          transition: all 0.3s;
          text-align:center;
        }
      }
      .hexTxtTitle {
        color: #F5CE95;
        text-transform: capitalize;
        text-align: center;
        bottom: 50%;
        padding-top:50%;
        font-size: 1.5em;
        z-index: 1;
      }
      .hexTxtDesc {
        top: 50%;
        text-align: center;
        text-transform: uppercase;
      }
      .hexImg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-position: center center;
        background-size: cover;
        overflow: hidden;
        --hl: 0;
        width: 100%; 
        height: 100%;
        filter: brightness(1);
        transition: 0.7s;
        &::before {
          background: rgba(2, 65, 92, 0.3);
        }
        &::after {
          background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5), transparent);
        }
        &::before, &::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          content: '';
          opacity: 0;
          transition: all 0.3s;
        }
      }
    }
  }
}

/*Media funksjonene til hex bilde layouten. Dette er funksjonene som gjør dem responsive når skjermstørrelsen blir mindre eller større*/
@media (min-width:1201px) { 
  .hexGrid{
    padding-bottom: 4.4%;
    .hex {
      width: 20%;
      &:nth-child(9n+6){ 
        margin-left:10%;
      }
    }
  } 
}

@media (max-width: 1200px) and (min-width:901px) {
  .hexGrid{
    padding-bottom: 5.5%;
    font-size: 13px;
    .hex {
      width: 25%;
      &:nth-child(7n+5){ 
        margin-left:12.5%; 
      }
    }
  }
}
@media (max-width: 900px) and (min-width:601px) { 
  .hexGrid{
    padding-bottom: 7.4%;
    font-size: 14px;
    .hex {
      width: 33.333%; 
      &:nth-child(5n+4){ 
        margin-left:16.666%; 
      }
    }
  }
}
@media (max-width: 600px) { 
  .hexGrid{
    padding-bottom: 11.2%;
    font-size: 12px;
    .hex {
      width: 50%;
      &:nth-child(3n+3){ 
        margin-left:25%; 
      }
    }
  }
}
@media (max-width: 400px) {
  .hexGrid {
    font-size: 8px;
  }
}

</style>