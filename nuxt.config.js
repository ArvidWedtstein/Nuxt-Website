export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Arvid's Website",
    script: [
        {  
            type: 'text/javascript', 
            src: '~assets/js/jquery-3.4.1.min.js',
            defer: true
        },
        {  
            type: 'text/javascript', 
            src: '~assets/js/bootstrap-4.4.1.js',
            defer: true
        },
        {  
            type: 'text/javascript', 
            src: '~assets/js/popper.min.js',
            defer: true
        },
        {
            type: 'text/javascript',
            rel: "preload",
            src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
            defer: true
        },
        {
            type: 'text/javascript',
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js',
            defer: true
        },
        {
            src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js",
            defer: true
        },
        {
            src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
            defer: true
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/ArvidLogoFavIcon.png" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Julius Sans One"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Trade Winds"},
      { rel: "stylesheet", href: "~assets/jQueryAssets/jquery.ui.core.min.css", type: "text/css"},
      { rel: "stylesheet", href: "~assets/jQueryAssets/jquery.ui.theme.min.css", type: "text/css"},
      { rel: "stylesheet", href: "~assets/jQueryAssets/jquery.ui.dialog.min.css", type: "text/css"},
      { rel: "stylesheet", href: "~assets/jQueryAssets/jquery.ui.resizable.min.css", type: "text/css"}
    ]
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
  build: {},
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000
  },
  ssr: false,

  loadingIndicator: {
    name: 'chasing-dots',
    color: 'red',
    background: 'black'
  }
};
