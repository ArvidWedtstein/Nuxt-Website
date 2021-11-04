import fs from 'fs';
import path from 'path';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - ⚜",
    title: "Arvid's Website",
    script: [
        {
          type: 'text/javascript',
          rel: "preload",
          src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
          defer: true
        },
        {
          src: "https://kit.fontawesome.com/0cda3bb6df.js"
        },
        {
          src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
          integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
          crossorigin: "anonymous"
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", 
          integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q", 
          crossorigin: "anonymous"
        },  
        {
          src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", 
          integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl", 
          crossorigin: "anonymous"
        }
    ],
    srcDir: "./",
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
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Julius Sans One"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Trade Winds"},
      { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", crossorigin: "anonymous"}
    ]
  },
  //'@/assets/css/bootstrap-4.4.1.css'
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.scss",
    //"@fortawesome/fontawesome-svg-core/styles.css"
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //"~/plugins/fontawesome.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxt/image",
    "@nuxt/content"
  ],
  content: {

  },
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
  },
  hooks: {
    build: {
      done(builder) {
        /*const extraFilePath = path.join(
          __dirname,
          'settingstg.json'
        )
        fs.writeFileSync(extraFilePath, 'egg');*/
        
        
      },
      node: {
        fs: 'empty'
      }
    }
  },
  serverMiddleware: [
    //'~/api/index.js'
  ]
};
