<template>
  <div class="news">
    <div class="container">
      <div class="row">
        <div class="col-md-8 post-main">
          <h3 class="pb-3 mb-4 border-bottom">Test Post</h3>
          <div class="blog-post">
            <h2 class="blog-post-title">{{ post.title }}</h2>
            <p class="blog-post-meta text-muted">{{ formatDate(post.createdAt) }} by <a class="link" href="#">{{ post.author.name }}</a></p>
            <p class="blog-post-description">{{ post.description }}</p>
            <hr>
            <div class="sectionBlocks">
              <div v-for="(sectBlock, ttt) in post.sectionBlocks" :key="ttt">
                <h2 v-if="'header' in sectBlock">{{ sectBlock.header }}</h2>
                <p v-if="'text' in sectBlock">{{ sectBlock.text }}</p>
                <hr>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 sidebar">
          <div class="p-3 mb-3">
            <h4 class="font-italic">About</h4>
            <p class="mb-0">
              test <em>AAAAAAAAAAAAAAA</em>
            </p>
          </div>
          <div class="p-3">
            <h4 class="font-italic">Other Posts</h4>
            <ol class="list-unstyled mb-0">
              <li><a class="link" href="#">Other Post</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- <ArvidFooter></ArvidFooter> -->
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
      }
    }
  },
  content: {
    nestedProperties: ['author.name']
  },
  async asyncData({ $content, params, $axios, $config }) {
    let baseURL = $config.baseURL;
    console.log(params)
    const post = await $axios.$get("api/news/getnewspost/" + params.slug);
    console.log(post.posts[0])
    return {
      post: post.posts[0],
      baseURL,
      params
    }
  },
  methods: {
    /*async replaceLink(txt) {
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      if (txt.match(urlRegex)) {
        let { hostname, url } = (new URL(txt));
    
        txt = txt.replace(urlRegex, function(url) {
          return "-" + url;
        })
        var link = document.createElement('a');
        var linkname = document.createTextNode(hostname);
        link.href = url;
        link.appendChild(linkname); 
        let test = await document.getElementById("test")
        while (!test) {
          test = await document.getElementById("test")
        }
        await test.appendChild(link)
        return txt
      } else { // Vis teksten ikkje inneholde link
        return txt
      }
    },*/
    replaceLink(txt) {
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      if (txt.match(urlRegex)) {
        let hostname = (new URL(txt)).hostname;
        txt = txt.replace(urlRegex, function(url) {
          return '<a class="link" href="' + url + '">' + hostname + '</a>';
        })
        return txt
      } else { // Vis teksten ikkje inneholde link
        return txt
      }
    },
    timeSince(date) {
      return moment(date).fromNow(true);
    },
    formatDate(date) {
      return moment(date).format("DD MMMM, YYYY hh:mm")
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
      //console.log(this.article.posts[i])
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
  list-style-type: none;
  .post-main {
    //background-color: colorscheme('blue');
    border-radius: 0.25rem;
    .blog-post {
      margin-bottom: 4rem;
      .blog-post-title {
        font-family: 'MedievalSharp';
        &::first-letter {
          position: relative;
          font-size: 3ch;
          color: #f05053;
          text-transform: uppercase;
        }
      }
      .blog-post-description {
        font-weight: 500;
      }
    }
  }
  .sidebar {
    //background-color: colorscheme('blue');
    border-radius: 0.25rem;
  }
}
</style>