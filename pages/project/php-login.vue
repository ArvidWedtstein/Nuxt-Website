<template>
   <div id='php'>
      <div class="container-fluid">
         <div class="jumbotron">
            <h1 class="display-4">Login System</h1>
            <hr class="my-4">
            <p class="lead">Made in <i class="fab fa-php"></i> & <i class="fas fa-database"></i> SQL</p>
            <p class="lead">Current Issues</p>
            <ul class="lead">
               <li class="lead" v-for="issue in issues" :key="issue">
                  <p class="title">{{issue.title}}</p>
                  <p class="body">{{issue.body}}</p>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script>
const axios = require('axios');
export default {
   template: 'php',
   transition: 'slide-bottom',
   data() {
      return {
         issues: null
      }
   },
   methods: {
      api() {
         this.issues
         axios({
               method: 'get',
               url: 'https://api.github.com/repos/ArvidWedtstein/Nuxt-Website/issues'
         })
         .then(async (response) => {
            console.log(response.data)
            this.issues = await response.data
         });
      }
   },
   mounted() {
      this.api()
   }
}
</script>
<style lang="scss">
.title {
   font-weight: bold;
}
</style>