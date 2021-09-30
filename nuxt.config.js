export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Arvid's Website",
    script: [
      {  
          type: 'text/javascript', 
          src: '~assets/js/jquery-3.4.1.min.js',
          'data-account': 'XXXXX',
          'data-user': 'XXXXX',
          async: true
      },
      {  
          type: 'text/javascript', 
          src: '~assets/js/bootstrap-4.4.1.js',
          'data-account': 'XXXXX',
          'data-user': 'XXXXX',
          async: true
      },
      {  
          type: 'text/javascript', 
          src: '~assets/js/popper.min.js',
          'data-account': 'XXXXX',
          'data-user': 'XXXXX',
          async: true
      }
    ],
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Arvids nettside" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  //'@/assets/css/bootstrap-4.4.1.css'
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
