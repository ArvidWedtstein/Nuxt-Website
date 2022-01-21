<template>
  <div id="dataprotection" class="container">
    <div class='jumbotron'>
       <h1 class='display-4'>Your data</h1>
       <hr class='my-4'>
       <p class='lead'></p>
       <div class="btn-group">
        <button class="btn btn-main">Request All My Data</button>
        <button class="btn btn-red" @click="deletemydata()">Delete All My Data</button>
       </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {

    };
  },
  methods: {
    showSnackbar(message, type) {
      this.$notifier.showMessage({ content: message, color: type })
    },
    async deletemydata() {

    }
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
#dataprotection {
  height: 100%;
}


</style>