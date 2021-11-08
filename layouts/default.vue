<template>
  <div>
    <div class="navbar">
        <Navbar/>
    </div>
    <Nuxt/>
    <slot/>
    <NuxtPage/>
  </div>
</template>

<script>
import Navbar from ".../components/navbar.vue";
export default {
    template: "default",
    transition: "slide-bottom",
    components: { Navbar }
}
</script>
<style lang="scss">

</style>