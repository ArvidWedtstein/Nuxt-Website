<template>
  <div class="news">
    <ul class="card-deck">
      <!--<li v-for="post in article" :key="post" class="col-md-2">-->
        <div v-for="post in article" :key="post" class="card">
          <img v-if="post.img" class="card-img-top" :src="post.img" alt="Card image cap" height="400" >
          <div v-if="post.author" class="card-header">
            <p v-if="post.author.name">{{post.author.name}}</p>
            <img class="profileImg" v-if="post.author.img" :src="post.author.img"/>
            <h6 class="badge" v-for="tag in post.tags" :key="tag"><i :class="'fas ' + tag.icon"/></h6>
          </div>
          <div class="card-body">
            <h5 v-if="post.title" class="card-title">{{post.title}}</h5>
            <p v-if="post.description" class="card-text">{{post.description}}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated {{timeSince(post.updatedAt)}} ago</small>
          </div>
        </div>
      <!--</li>-->
    </ul>
<p>{{article[0]}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      author: '',
      title: '',
      description: ''
    }
  },
  async asyncData({ $content, params }) {
    const posts = await $content('articles')
    .only(['title', 'image', 'tags', 'slug'])
    .sortBy('createdAt', 'desc')
    .fetch()
    console.log(posts)
    const article = await $content('articles', params.slug).fetch()
    return {
      article
    }
  },
  methods: {
    timeSince(date) {
      return moment(date).fromNow(true)
    },
    createpost() {
      console.log(this.ownarticle)
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">
/*Background https://codepen.io/towc/pen/eNEBQX*/

$colorpalette: (
    "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
    "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
    "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
    "meridian": linear-gradient(45deg, #283c86, #45a247)
);

// Website colorscheme
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
@function gradientscheme($color) {
    @return map-get($colorpalette, $color);
}
.news {
  margin-top: 1rem;
  list-style-type: none;
  .card {
    //margin: 1rem;
    //background: gradientscheme("moonlit");
    background: colorscheme('blue');
    .card-img-top {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% calc(90% - 1px));
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
        right: 0;
        border-radius: 50%;
        mix-blend-mode: multiply;
        overflow:hidden
      }
    }
  }
}
</style>