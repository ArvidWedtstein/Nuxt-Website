<template>
   <div id='php'>
      <Navbar/>
      <div class="container-fluid">
         <div class="jumbotron">
            <h1 class="display-4">Login System</h1>
            <hr class="my-4">
            <p class="lead">Made in <i class="fab fa-php"></i> & <i class="fas fa-database"></i> SQL</p>
         </div>
      </div>
   </div>
</template>

<script>
const axios = require('axios');
export default {
   template: 'php',
   transition: 'slide-bottom'
}
</script>