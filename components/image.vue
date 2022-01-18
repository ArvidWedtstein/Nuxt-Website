<template>
  <figure class="figure">
    <img :src="image" class="figure-img img-fluid rounded" :alt="text">
    <figcaption class="figure-caption text-end">{{ text }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "image",
  template: '<Image/>',
  transition: 'slide-bottom',
  props: {
    image: "",
    text: ""
  },
  data() {
    return {
      
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>