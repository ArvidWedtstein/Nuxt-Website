import fs from 'fs';
import path from 'path';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Nuxt",
    title: "Arvid's Website",
    script: [
        {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js"
        },
        {
          src: "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",
          type: "module"
        },
        {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
          defer: true,
          rel: "preload"
        },
        {
          type: 'text/javascript',
          rel: "preload",
          src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
          defer: true
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js",
          defer: true
        },
        {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
          integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
          crossorigin: "anonymous"
        },
        {
          src: "https://kit.fontawesome.com/0cda3bb6df.js"
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
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Julius Sans One"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Trade Winds"},
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", crossorigin: "anonymous", integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"}
    ]
  },
  //'@/assets/css/bootstrap-4.4.1.css'
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/fontawesome.js"
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
