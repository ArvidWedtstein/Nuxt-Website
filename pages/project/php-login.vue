<template>
   <div id='php'>
      <div class="container-fluid">
         <div class="jumbotron">
            <h1 class="display-4">Login System</h1>
            <hr class="my-4">
            <p class="lead">Made in <i class="fab fa-php"></i> & <i class="fas fa-database"></i> SQL</p>
            <h3>Current Issues</h3>
            <ul class="lead">
               <li v-for="(issue, i) in issues" :key="i">
                  <h4>{{issue.title}}</h4>
                  <h6>{{issue.body}}</h6> 
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
               url: 'https://api.github.com/repos/ArvidWedtstein/TestNettside/issues'
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

</style>