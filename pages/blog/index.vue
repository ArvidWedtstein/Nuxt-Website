<template>
  <div class="oldnews container-fluid">
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
          <NuxtLink class="column" :to="'/blog/'+ post._id">
            <div class="head">
              <p><span class="headline hl1">{{ post.title }}</span></p>
              <p><span class="headline hl2">{{ `"${post.description}" by ${post.author.name}` }}</span></p>
            </div>
            <p></p>
            <figure v-if="post.image" class="figure">
              <img class="media" :src="baseURL + post.image" alt="">
              <figcaption v-if="post.imagecaption" class="figcaption">"{{ post.imagecaption }}"</figcaption>
            </figure>
            <div v-if="post.sectionBlocks">
              <p v-for="(blogg, dsl) in post.sectionBlocks" :key="dsl">{{blogg.text}}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="head">
            <span class="headline hl5">Give people courage</span>
            <p><span class="headline hl6">The crowd seemed to grow</span></p>
          </div>
          <p>The sunset faded to twilight before anything further happened.  The crowd far away on the left, towards Woking, seemed to grow, and I heard now a faint murmur from it.  The little knot of people towards Chobham dispersed.  There was scarcely an intimation of movement from the pit.</p>
          <figure class="figure">
            <img class="media" src="http://i.giphy.com/PW7MoTD2d9pJK.gif" alt="">
            <figcaption class="figcaption">Hermine hoping for courage.</figcaption>
          </figure>
          <p>It was this, as much as anything, that gave people courage, and I suppose the new arrivals from Woking also helped to restore confidence.  At any rate, as the dusk came on a slow, intermittent movement upon the sand pits began, a movement that seemed to gather force as the stillness of the evening about the cylinder remained unbroken.  Vertical black figures in twos and threes would advance, stop, watch, and advance again, spreading out as they did so in a thin irregular crescent that promised to enclose the pit in its attenuated horns.  I, too, on my side began to move towards the pit.</p>
          <p>Then I saw some cabmen and others had walked boldly into the sand pits, and heard the clatter of hoofs and the gride of wheels.  I saw a lad trundling off the barrow of apples.  And then, within thirty yards of the pit, advancing from the direction of Horsell, I noted a little black knot of men, the foremost of whom was waving a white flag.</p>
        </div>
        <div class="column">
          <div class="head">
            <span class="headline hl1">May the Force be with you</span>
            <p><span class="headline hl2">Let go your conscious self and act on instinct</span></p>
          </div>
          <p>Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. I have traced the Rebel spies to her. Now she is my only link to finding their secret base;</p>
          <figure class="figure">
            <img class="media" src="http://i.giphy.com/4fDWVPMoSyhgc.gif" alt="">
            <figcaption class="figcaption">"This time, let go your conscious self and act on instinct."</figcaption>
          </figure>
          <p>Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. <span class="citation">"Don't under&shy;estimate the Force. I suggest you try it again, Luke."</span> This time, let go your conscious self and act on instinct. In my experience, there is no such thing as luck. You're all clear, kid. Let's blow this thing and go home!</p>
          <p>You don't believe in the Force, do you? Partially, but it also obeys your commands. The plans you refer to will soon be back in our hands. As you wish.</p>
        </div>
        <div class="column">
          <div class="head">
            <span class="headline hl3">The buzz of the little world </span>
            <p><span class="headline hl4">A thousand unknown plants</span></p>
          </div>
          <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
        </div>
        <div class="column">
          <div class="head">
            <span class="headline hl1">It wasn't a dream </span>
            <p><span class="headline hl4">by FRANZ KAFKA</span></p>
          </div>
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. </p>
          <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. </p>
        </div>
      </div>
    </div>
    <!--http://www.dollardreadful.com/ blog-->
    <!--https://codepen.io/alekspopovic/pen/gzOJbq-->
    <!--<div class="row">
      <div class="col-md-4 d-flex blog" v-for="(post, i) in articles" :key="i" data-match-height="news-items">
        <div class="card newspost">
          <img v-if="post.image" class="card-img-top" :src="baseURL + post.image" :alt="post.name" height="400">
          <div v-if="post.author" class="card-header" :id="'post' + i">
            <p v-if="post.author.name">{{ post.author.name }}</p>
            <img style="width: 50px" class="profileImg" v-if="post.author.profileimg" :src="baseURL + post.author.profileimg"/>
          </div>
          <div class="card-body" :id="'post' + i">
            <h5 v-if="post.title" class="card-title">{{ post.title }}</h5>
            <p v-if="post.description" class="card-text description">{{ post.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated {{timeSince(post.updatedAt)}} ago <i class="fab fa-accessible-icon"/></small>
            <small v-if="post.tags" class="badge bg-success m-1" style="text-align: right;"><i v-for="(tag, v) in post.tags" :key="v" :class="tag.icon"/></small>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a :href="'/blog/'+ post._id" class="btn btn-sm btn-outline-secondary">View</a>
                <a v-if="userPerm('MODIFY_POST')" href="/blog/new-post" class="btn btn-sm btn-outline-secondary">Edit</a>
              </div>
              <small class="text-muted">{{ timeSince(post.updatedAt) }} ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <ArvidFooter></ArvidFooter>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      currenteditpost: null,
      author: '',
      title: '',
      description: '',
      ownarticle: {
        title: '',
        description: '',
        tags: []
      },
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      tags: [
        {"name": "Pain","icon": "fas fa-tired"},
        {"name": "Programming","icon": "fas fa-code"},
        {"name": "Media","icon": "fas fa-photo-video"},
        {"name": "3D Print","icon": "fas fa-cubes"},
        {"name": "AD","icon": "fas fa-ad"},
        {"name": "Beer","icon": "fas fa-beer"}
      ]
    }
  },
  content: {
    nestedProperties: ['author.name']
  },
  async asyncData({ $content, params, $axios, $config }) {
    const yr = await $axios.$get("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.4136&lon=5.2680");
    console.log(yr.properties.timeseries[0].data.instant.details)
    let baseURL = $config.baseURL;
    /*if (!params.slug) {
      const articles = await $axios.$get("api/news/getnewsposts");
      return {
        articles: articles.posts,
        baseURL,
      }
    } else {
      const articles = await $axios.$get("api/news/getnewspost/" + params.slug);
      return {
        articles: articles.posts,
        baseURL,
        params
      }
    }*/
    const articles = await $axios.$get("api/news/getnewsposts");
    return {
      articles: articles.posts,
      weather: yr.properties,
      baseURL,
    }
  },
  methods: {
    timeSince(date) {
      return moment(date).fromNow(true)
    },
    tagSelect(tag) {
      console.log(this.$auth.user)
      if (!this.ownarticle.tags.includes(tag)) {
        this.ownarticle.tags.push(tag);
      }
    },
    showSnackbar(message) {
			this.$notifier.showMessage({ content: message, color: '#ff0000' })
		},
    editPost(i) {
      //var post = document.getElementById(`post${i}`)
      this.currenteditpost = i
      //post.contentEditable = true;
      //post.appendChild(savebtn)
    },
    async deletePost(i) {
      console.log(this.article.posts[i])
      const post = await this.$axios.$delete("api/news/deletenewspost", {id: this.article.posts[i]._id}).then((res) => {
        this.showSnackbar(res.message)
      })
    },
    userPerm(perm) {
      if (this.isAuthenticated) {
        if (this.$store.getters.getUserInfo.role.permissions.includes(perm)) {
            return true;  
        } else {
            return false;
        }
      }
    },
  },
  mounted() {
    
  },
  computed: {
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
$badgeselectcolor: #dddddd;
$colorpalette: (
  "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "meridian": linear-gradient(45deg, #283c86, #45a247)
);

// Website colorscheme
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
@function gradientscheme($color) {
  @return map-get($colorpalette, $color);
}
.news {
  //margin-top: 1rem;
  list-style-type: none;
  .row {
    gap: 1.5rem 0;
    list-style-type: none;
  }
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    padding-block: 2rem;
    list-style-type: none;
    width: min(95%, 70rem);
    margin-inline: auto;
    .grid-col-span-2 {
      grid-column: span 2;
    }
    .grid-row-span-2 {
      grid-row: span 2;
    }
    .description {
      column-count: 3;
      word-break: break-all;
      background: -webkit-linear-gradient(#fff 60%, transparent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  #editPost {
    position: fixed;
    display: block;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 5;
    cursor: pointer; /* Add a pointer on hover */
  }
}
.badges {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 3ch;
  .badge-Pain {
    color: #ff0000;
  }
}
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
        padding: 0 1% 0 1%;
        width: 100%;
        vertical-align: top;
        margin: 0px 2% 0 2%;
        -webkit-transition: 1s ease all;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border-left: 1px solid $bordercolor;
        border-right: 1px solid $bordercolor;
        border-bottom: 3px double $bordercolor;
        img {max-width:100%; height: auto;}
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