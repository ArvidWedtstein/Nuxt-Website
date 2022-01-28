<template>
  <div class="container error-container">
    <div class="error">
      <h1 class="statusCode">{{ error.statusCode }}</h1>
      <h1>{{ errortext[error.statusCode] }}</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>  
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error', // you can set a custom layout for the error page
    data() {
      return {
        errortext: {
          100: "I am working on it",
          200: "Here you go",
          300: "I am sending you somewhere else",
          400: "You messed up",
          401: "Access denied",
          402: "I am once again asking you for financial support. (Payment Required)",
          403: "No (Forbidden)",
          404: "You're looking for stuff that doesn't exist (pretty sus)",
          406: "This is clearly Not Acceptable",
          410: "Gone, reduced to atoms",
          418: "tEa",
          425: "You're time has not come yet",
          426: "Upgrade Required",
          429: "Drowning in Too Many Requests",
          451: "Unavailable For Legal Reasons",
          500: "Something went wrong. ",
          507: "Oh shot. Insufficient Storage"
        }
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
.container {
  &.error-container {
    
    position: relative;
    padding: 5rem;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    //transform: translate(-50%, -50%);
    .error {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 5rem;
      & > * {
        flex: 0 1 auto;
      }
      .statusCode {
        
        position: relative;
        font-size: 30ch;
        transform: rotate(10deg);
        z-index: 2;
        //top: 15%;
        text-shadow: 1px 1px 1px #919191,
            1px 2px 1px #919191,
            1px 3px 1px #919191,
            1px 4px 1px #919191,
            1px 5px 1px #919191,
            1px 6px 1px #919191,
            1px 7px 1px #919191,
            1px 8px 1px #919191,
            1px 9px 1px #919191,
            1px 10px 1px #919191,
        1px 18px 6px rgba(16,16,16,0.4),
        1px 22px 10px rgba(16,16,16,0.2),
        1px 25px 35px rgba(16,16,16,0.2),
        1px 30px 60px rgba(16,16,16,0.4);
      }
    }
  }
}

</style>
