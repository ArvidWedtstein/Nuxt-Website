<template>
  <div class="news container-fluid">
    <div v-if="isAuthenticated && userPerm('VIEW_POST')" class="row">
      <div class="col-md-4 d-flex blog m-3" v-for="(post, i) in this.$store.state.newspost.news" :key="i" data-match-height="news-items">
        <NewsNewscard :post="post" :i="i"></NewsNewscard>
      </div>
    </div>
    <h1 v-else class="p-5"><a class="link" href="/auth/login">Log in to view newspost</a></h1>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "news",
  data() {
    return {
      currenteditpost: null,
      author: '',
      title: '',
      description: '',
      articles: [],
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
  async asyncData({ $content, params, $axios, $config, $store }) {
    let baseURL = $config.baseURL;
    //const articles = await $axios.$get("api/news/getnewsposts");
    return {
      // articles: articles,
      baseURL,
    }
  },
  methods: {
    showSnackbar(message, type) {
			this.$notifier.showMessage({ content: message, color: type })
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
  async mounted() {
    this.articles = await this.$store.state.newspost.news
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;  
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

</style>