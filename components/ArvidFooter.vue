<template>
  <footer class="text-white text-center p-3">
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
        <li><a class="text-muted" href="#">Terms And Conditions</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  template: "<AFooter/>",
  name: "ArvidFooter",
  transition: 'slide-bottom'
}
</script>
<style lang="scss">

footer {
  &.container {
    width: 100%;
  }
}
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
footer {
  background: colorscheme('blue');
}
</style>