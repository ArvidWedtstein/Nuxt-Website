<template>
   <div id='discordbot'>
       <Navbar/>
       <h1>discoooordbot</h1>
       <button class="knapp">test</button>
   </div>
</template>

<script>
const axios = require('axios');
export default {
   template: 'discordbot',
   transition: 'slide-bottom',
   methods: {
      api() {
         axios({
               method: 'get',
               url: 'https://api.github.com/users/ArvidWedtstein/repos'
         })
         .then(function (response) {
               axios({
                  method: 'get',
                  url: response.data[0].languages_url
               })
               .then(function (response2) {
                  console.log(response2)
               })
         });
      }
   },
   mounted() {
      this.api()
   }
}
</script>