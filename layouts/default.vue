<template>
  <div>
    <Navbar/>
    <Nuxt/>
    <slot/>
    <NuxtPage/>
  </div>
</template>

<script>
export default {
    template: "default",
    transition: "slide-bottom"
}
</script>
<style lang="scss">
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
}
</style>