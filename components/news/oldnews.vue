<template>
  <div class="container">
    <div class="head">
      <div class="headerobjectswrapper">
        <div class="weatherforcastbox">
          <span style="font-style: italic;">Været:</span>
          <br>
          <span>Wind: {{ weather.timeseries[0].data.instant.details.wind_speed }}{{weather.meta.units.wind_speed}}; Ther: {{weather.timeseries[0].data.instant.details.air_temperature}}°C; Hum: {{weather.timeseries[0].data.instant.details.relative_humidity}}{{weather.meta.units.relative_humidity}}</span>
        </div>
        <div class="header">Arvid News</div>
        <NuxtLink v-if="userPerm('CREATE_POST')" type="button" class="btn btn-notch" to="/blog/new-post">New Post</NuxtLink>​
      </div>
      <div class="subhead">Haugesund - {{days[new Date().getDay()]}} {{months[new Date().getMonth()]}} {{new Date().getDate()}}, {{new Date().getFullYear()}}</div>
    </div>
    <div class="content">
      <div class="masonry">
        <div class="item" v-for="(post, i) in articles" :key="i">
          <a class="column" :href="'/blog/' + post._id">
            <div class="head">
              <p><span class="headline hl1">{{ post.title }}</span></p>
              <p><span class="headline hl2">{{ `"${post.description}" by ${post.author.name}` }}</span></p>
            </div>
            <p></p>
            <figure v-if="post.image" class="figure">
              <img class="media" :src="baseURL + post.image" :alt="post.image">
              <figcaption v-if="post.imagecaption" class="figcaption">"{{ post.imagecaption }}"</figcaption>
            </figure>
            <div v-if="post.sectionBlocks">
              <p v-for="(blogg, dsl) in post.sectionBlocks" :key="dsl">{{ blogg.text }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
const moment = require('moment');

export default {
  name: 'oldnews',
  template: '<oldnews/>',
  transition: 'slide-bottom',
  props: {
    user: {},
    roles: []
  },
  async asyncData({ $auth }) {
    const yr = await $axios.$get("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.4136&lon=5.2680");
    console.log(yr.properties.timeseries[0].data.instant.details)
    const articles = this.$store.state.newspost.news
    return {
      articles: articles,
      weather: yr.properties
    }
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
    randomHeader() {
      const headers = ["hl1", "hl3", "hl5"]
      return headers[Math.floor(Math.random() * headers.length-1)]
    }
  }
}
</script>
<style lang="scss">
$bordercolor: #2f2f2f;
.oldnews {
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  color: #2f2f2f;
  background-color: #f5f2d5;
  .head {
    text-align: center;
    position: relative;
    .subhead {
      text-transform: uppercase;
      border-bottom: 2px solid $bordercolor;
      border-top: 2px solid $bordercolor;
      padding: 12px 0 12px 0;
    }
    .headerobjectswrapper {
      .weatherforcastbox {
        position: relative;
        width: 12%;
        left: 10px;
        border: 3px double $bordercolor;
        padding: 10px 15px 10px 15px;
        line-height: 20px;
        display: inline-block;
        margin: 19px 50px 10px -200px;
      }
      .header { 
        //font-family: 'Playfair Display', serif;
        font-family: 'Pokerkings' !important;
        font-weight: 900;
        font-size: 80px;
        //text-transform: uppercase;
        display: inline-block;
        line-height: 72px;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .content {
    font-size: 0;
    line-height: 0;
    word-spacing: -.31em;
    //display: inline-block;
    //margin: 30px 2% 0 2%;
    .masonry {
      -webkit-column-count: 4;
      -moz-column-count: 4;
      column-count: 4;
      -webkit-column-gap: 1em;
      -moz-column-gap: 1em;
      column-gap: 1em;
      margin: 1.5em;
      padding: 0;
      -moz-column-gap: 1.5em;
      -webkit-column-gap: 1.5em;
      column-gap: 1.5em;
      margin: 30px 2% 0 2%;
      .item {
        display: inline-block;
        padding: 30px 2% 0 2%;
        width: 100%;
        vertical-align: top;
        -webkit-transition: 1s ease all;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border-left: 1px solid $bordercolor;
        border-right: 1px solid $bordercolor;
        border-bottom: 3px double $bordercolor;
        img {max-width:100%; height: auto;}
        &:hover {
          cursor: pointer;
        }
      }
    }
    .column {
      font-size: 14px;
      line-height: 20px;
      //width: 20%;
      //display: inline-block;
      padding: 0 1% 0 1%;
      vertical-align: top;
      margin-bottom: 50px;
      transition: all .7s;
      &.column + .column {
        border-left: 1px solid $bordercolor;
      }
      .headline {
        text-align: center;
        line-height: normal;
        font-family: 'Playfair Display', serif;
        display: block;
        margin: 0 auto;
        &.hl1 {
          font-weight: 700;
          font-size: 30px;
          text-transform: uppercase;
          padding: 10px 0 10px 0;
        }
        &.hl2 {
          font-weight: 400;
          font-style: italic;
          font-size: 24px;
          box-sizing: border-box;
          padding: 10px 0 10px 0;
          &::before {
            border-top: 1px solid $bordercolor;
            content: '';
            width: 100px;
            height: 7px;
            display: block;
            margin: 0 auto;
          }
          &::after {
            border-bottom: 1px solid $bordercolor;
            content: '';
            width: 100px;
            height: 13px;
            display: block;
            margin: 0 auto;
          }
        }
        &.hl3 {
          font-weight: 400;
          font-style: italic;
          font-size: 36px;
          box-sizing: border-box;
          padding: 10px 0 10px 0;
        }
        &.hl4 {
          font-weight: 700;
          font-size: 12px;
          box-sizing: border-box;
          padding: 10px 0 10px 0;
          &::before {
            border-top: 1px solid $bordercolor;
            content: '';
            width: 100px;
            height: 7px;
            display: block;
            margin: 0 auto;
          }
          &::after {
            border-bottom: 1px solid $bordercolor;
            content: '';
            width: 100px;
            height: 10px;
            display: block;
            margin: 0 auto;
          }
        }
        &.hl5 {
          font-weight: 400;
          font-size: 42px;
          text-transform: uppercase;
          font-style: italic;
          box-sizing: border-box;
          padding: 10px 0 10px 0;
        }
        &.hl6 {
          font-weight: 400;
          font-size: 18px;
          box-sizing: border-box;
          padding: 10px 0 10px 0;
          &::before {
            border-top: 1px solid $bordercolor;
            content: '';
            width: 100px;
            height: 7px;
            display: block;
            margin: 0 auto;
          }
          &::after {
            border-bottom: 1px solid $bordercolor;
            content: '';
            width: 100px;
            height: 10px;
            display: block;
            margin: 0 auto;
          }
        }
      }
      .citation {
        font-family: 'Playfair Display', serif;
        font-size: 36px;
        line-height: 44px;
        font-style: italic;
        text-align: center;
        font-weight: 400;
        display: block;
        margin: 40px 0 40px 0;
        font-feature-settings: "liga", "dlig";
        &::before {
          border-top: 1px solid $bordercolor;
          content: '';
          width: 100px;
          height: 16px;
          display: block;
          margin: 0 auto;
        }
        &::after {
          border-bottom: 1px solid $bordercolor;
          content: '';
          width: 100px;
          height: 16px;
          display: block;
          margin: 0 auto;
        }
      }
      .figure {
        margin: 0 0 20px;
        .figcaption {
          font-style: italic;
          font-size: 12px;
        }
        .media {
          -webkit-filter: sepia(80%) contrast(1) opacity(0.8);
          filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
          mix-blend-mode: multiply;
          width: 100%;
        }
      }
    }
  }
} 
@media only screen and (max-width: 320px) {
  .masonry {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
@media only screen and (min-width: 321px) and (max-width: 768px){
  .masonry {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1200px){
  .masonry {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media only screen and (min-width: 1201px) {
  .masonry {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
/*________________________________________________________________________________________________________________________________*/
/*MEDIAQUERIES*/
@media only all and (max-width: 1300px) {
  .weatherforcastbox {
    display: none;
  }
}
@media only all and (max-width: 1200px) {
  .column {
    width: 31%;
  }
}
@media only all and (max-width: 900px) {
  .column {
    width: 47%;
  }

}
@media only all and (max-width: 600px) {
  .column {
    width: 100%;
    &.column + .column {
      border-left: none;
      border-bottom: 1px solid $bordercolor;
    }
  }
  .header {
    max-width: 320px;
    font-size: 60px;
    line-height: 54px;
    overflow: hidden;
  }
}
</style>