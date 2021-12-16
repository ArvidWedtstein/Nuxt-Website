<template>
  <div class="news container-fluid">
    <div class='jumbotron'>
       <h1 class='display-4'>Arvid.spayce News</h1>
       <hr class='my-1'>
       <hr class='my-0'>
       <p class='lead'>{{ new Date().toDateString() }}</p><i class="fab fa-linux"/>
       <hr class='my-0'>
       <hr class='my-1'>
    </div>
    <NuxtLink v-if="userPerm('CREATE_POST')" type="button" class="btn btn-main" to="/blog/new-post">New Post</NuxtLink>
    <!--http://www.dollardreadful.com/ blog-->
    <!--https://codepen.io/alekspopovic/pen/gzOJbq-->
    <div class="row">
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
            <!--<small class="text-muted">Last updated {{timeSince(post.updatedAt)}} ago <i class="fab fa-accessible-icon"/></small>-->
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
    </div>
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
    "grey": "#212529",
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
  
  margin-top: 1rem;
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
    position: fixed; /* Sit on top of the page content */
    display: block; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100vh; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 5; /* Specify a stack order in case you're using a different order for other elements */
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