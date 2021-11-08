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
            let Discordbot = response.data.find(x => x.name === 'DiscordBotArvid');
            console.log(Discordbot)
            axios({
               method: 'get',
               url: 'https://api.github.com/repos/ArvidWedtstein/DiscordBotArvid/contents/'
            })
            .then(function (response2) {
               console.log(response2.data)
            })
         });
      }
   },
   mounted() {
      this.api()
   }
}
</script>