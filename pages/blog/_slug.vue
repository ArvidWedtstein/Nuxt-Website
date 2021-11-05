<template>
  <div class="news">
    <Navbar/>
    <ul class="row posts">
      <li class="col-md-4">
        <div class="card">
          <img class="card-img-top" :src="article[0].img" alt="Card image cap">
          <div class="card-header">
            <p>{{article[0].author.name}}</p>
            <img class="profileImg" :src="article[0].author.img"/>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{article[0].title}}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated {{timeSince(article[0].updatedAt)}} ago</small></p>
          </div>
        </div>
      </li>
    </ul>
<p>{{article[0]}}</p>
  </div>
</template>

<script>
import moment from 'moment'
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
    
      return {
        article
      }
    },
    methods: {
      timeSince(date) {
        return moment(date).fromNow(true)
      }
    }
  }
</script>

<style lang="scss">
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
  .posts {
    list-style-type: none;
    .card {
      background: gradientscheme("moonlit");
      .card-header {
        display: flex;
        flex-direction: row;
        width: 100%;
        .profileImg {
          position: relative;
          align-self: flex-end;
          background-repeat: no-repeat;
          border-radius: 50%;
          overflow:hidden
        }
      }
      
    }
  }
}
</style>