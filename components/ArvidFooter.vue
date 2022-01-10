<template>
  <div class="footer text-white text-center p-3">
    <div class="container p-4">
      <section class="mb-4">
        <!--btn-floating m-1-->

      </section>
    </div>
    <div class="col-6 col-md">
      <h5>Stats</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Terms And Conditions</a></li>
        <li><a class="text-muted" href="#">Terms And Conditions</a></li>
        <li><a class="text-muted" href="#">Terms And Conditions</a></li>
        <li><a class="text-muted" href="#">Terms And Conditions</a></li>
        <li v-if="isAuthenticated"><NuxtLink class="text-muted" to="/auth/data-and-protection">Data & Protection</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  template: "<AFooter/>",
  name: "ArvidFooter",
  transition: 'slide-bottom',
  data() {
    return {
      
    }
  },
  computed: { 
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;  
    }
  }
}
</script>
<style lang="scss">

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
.footer {
  position: fixed;
  bottom: -10% !important;
  width: 100%;
  background: colorscheme('blue');
  &.container {
    
  }
}

</style>