import fs from 'fs';
import path from 'path';
require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    titleTemplate: "%s",
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
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", 
          integrity: "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p", 
          crossorigin: "anonymous"
        },
        // {
        //   src: "https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"
        // },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"
        },
        {
          src: "https://apis.google.com/js/platform.js",
          async: true,
          defer: true
        },
        {
          src: `https://cdn.tiny.cloud/1/${process.env.TINY_MCE_API_KEY}/tinymce/5/tinymce.min.js`,
          referrerpolicy: "origin"
        },
        // {
        //   src: "https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js",
        //   integrity: "sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D",
        //   crossorigin: "anonymous"
        // }
    ],
    srcDir: "./",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "homepage yes." },
      { name: "format-detection", content: "telephone=no" },
      { name: '960880220676-ceap82vf6vqim2dlvaj0elrb6t0rac8m.apps.googleusercontent.com', content: `${process.env.GOOGLE_ADS_OAUTH_CLIENT_ID}.apps.googleusercontent.com`, client_id: process.env.GOOGLE_ADS_OAUTH_CLIENT_ID }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/ArvidLogoFavIcon.png" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Julius Sans One"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Trade Winds"},
      { 
        rel: "stylesheet", 
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", 
        integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", 
        crossorigin: "anonymous"
      }
    ]
  },
  //'@/assets/css/bootstrap-4.4.1.css'
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/notifier.js",
    "~/plugins/permissions.js",
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
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/auth-next",
    "@nuxtjs/axios"
    //'@nuxtjs/recaptcha'
  ],
  auth: {
    strategies: {
      local: {
        //scheme: "refresh",
        token: {
          //property: "access_token",
          property: "token",
          global: true,
          required: true,
          //maxAge: 1800,
          type: "Bearer"
        },
        user: {
          property: "user",
          // autoFetch: false
        },
        /*refreshToken: {  
          property: "refresh_token",
          data: "refresh_token",
          maxAge: 60 * 60 * 24 * 30
        },*/
        
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          refresh: { url: "/api/auth/refresh", method: "post" },
          logout: { url: "/api/auth/logout", method: "post" },
          user: { url: "/api/auth/getUser", method: "get" },
          allusers: { url: "/api/auth/allusers", method: "get" },
          allposts: { url: "/api/auth/allnewsposts", method: "get" },
          getroles: { url: "/api/auth/getRoles", method: "get" }
        },
        autoLogout: false
        //https://discord.com/api/oauth2/authorize?client_id=976135846086471720&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=identify
      },
      discord: {
        clientId: process.env.DISCORD_AUTH_CLIENT_ID,
        clientSecret: process.env.DISCORD_AUTH_CLIENT_SECRET,
      }
    },
  },
  image: {

  },
  // router: {
  //   middleware: ['auth']
  // },
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    language: 'english',   // Recaptcha language (v2)
    siteKey: process.env.GOOGLE_RECAPTCHA_SITE_KEY,    // Site key for requests
    version: 2,     // Version
    size: 'normal'      // Size: 'compact', 'normal', 'invisible' (v2)
  },
  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL,
    baseURL: process.env.ALTERNATIVE_BASE_URL2,
    github: process.env.GITHUB_TOKEN
  },
  privateRuntimeConfig: {
    baseURL: process.env.ALTERNATIVE_BASE_URL2,
    github: process.env.GITHUB_TOKEN
  },
  axios: {
    // baseURL: process.env.BASE_URL
    baseURL: process.env.ALTERNATIVE_BASE_URL2
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: 'red',
    height: '1px',
    continuous: true,
    duration: 1000
  },
  
  loadingIndicator: {
    name: 'cube-grid',
    color: 'lime',
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
  /*serverMiddleware: [
    //'~/api/index.js'
  ]*/
};
