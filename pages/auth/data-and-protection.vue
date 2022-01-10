<template>
  <div id="dataprotection" class="container-fluid">
    <div class='jumbotron'>
       <h1 class='display-4'>Your data</h1>
       <hr class='my-4'>
       <p class='lead'></p>
       <div class="btn-group">
        <button class="btn btn-main">Request All My Data</button>
        <button class="btn btn-red">Delete All My Data</button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    showSnackbar(message, type) {
      this.$notifier.showMessage({ content: message, color: type })
    },
  },
  mounted() {

  }
};
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
#login {
  position: relative;
  margin-top: 3rem;
  
  .my-4 {
    &.valid {
      background: #00ff00;
      box-shadow: 0 0 0.25rem #00ff00, 0 0 0.50rem #00ff00, 0 0 1rem #00ff00;
    }
    &.invalid {
      background: #ff0000;
      box-shadow: 0 0 0.25rem #ff0000, 0 0 0.50rem #ff0000, 0 0 1rem #ff0000;
    }
  }
}


</style>