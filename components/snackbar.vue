<template>
  <div class="snaggbar alert" v-if="show" :class="'bg-' + color" role="alert">
    <p>{{ message }}</p>
    <button class="btn btn-red" text @click="show = false">&times;</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: '',
      type: ''
    }
  },

  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content
        this.color = state.snackbar.color
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 3000)

      }
    })
  }
}
</script>
<style lang="scss">
.snaggbar {
  position: fixed;
  bottom: 20px;
  padding: 1rem 8rem;
  display: flex;
  align-items: center;
  vertical-align: middle;
  flex-direction: row;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  button {
    float: right;
    position: absolute !important;
    right: 20px !important;
  }
}
</style>