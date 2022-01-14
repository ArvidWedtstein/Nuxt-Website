<template>
   <div id='review'>
     <div id="carouselIndicator" class="carousel slide" data-bs-ride="carousel">
      <h3 class="text-center">Reviews</h3>
      <div class="carousel-indicators">
        <button v-for="(review, i) in reviewuser" :key="i" :class="{'active': i === 0}" type="button" data-bs-target="#carouselIndicator" :data-bs-slide-to="i" aria-current="true" :aria-label="'Slide ' + i"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(review, i) in reviewuser" :key="i" class="carousel-item" :class="{'active': i === 0}">
          <div class='jumbotron'>
            <h6 class='display-6' v-if="review.author != 'undefined'">{{ review.author }}</h6>

            <img v-if="review.author.profileimg" :src="review.author.profileimg" :alt="review.author.name">
            <p class='lead'>{{ review.review }}</p>
            <p class='lead text-warning'><i v-for="index in review.rating" :key="index" class="fas fa-star"/></p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" data-bs-target="#carouselIndicator" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" data-bs-target="#carouselIndicator" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
   </div>
</template>

<script>
export default {
  template: '<review/>',
  transition: 'slide-bottom',
  props: {
    reviewuser: ''
  },
  async asyncData({ $axios }) {
    /*const reviews = await $axios.get("/api/project/getRatings").then(async (res) => {
      return res.data.reviews
    });
    return {
      //reviews
    }*/
  }
}
</script>
<style lang="scss">
$colorpalette: (
  "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "meridian": linear-gradient(45deg, #283c86, #45a247),
  "bluegreen": linear-gradient(45, #402565, #30BE96)
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
#review {
  .carousel {
    .carousel-inner {
      .carousel.item {
        
      }
    }
    .jumbotron {
      img {
        width: 30%;
        border-radius: 50%;
      }
      padding: 1rem 4rem !important;
    }
    background: colorscheme('blue');
    .carousel-indicators {
      li {
        background: rgba(colorscheme('white'), 0.5);
        &.active {
          background: darken(colorscheme('white'), 20);
        }
      }
    }
  }
}

</style>