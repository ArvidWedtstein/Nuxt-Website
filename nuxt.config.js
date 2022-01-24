import fs from 'fs';
import path from 'path';
require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", 
          integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM", 
          crossorigin: "anonymous"
        },
        {
          src: "https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"
        },
        {
          src: "https://cdn.socket.io/4.3.2/socket.io.min.js",
          integrity: "sha384-KAZ4DtjNhLChOB/hxXuKqhMLYvx3b5MlT55xPEiNmREKRzeEm+RVPlTnAn0ajQNs",
          crossorigin: "anonymous"
        },
        {
          src: "https://apis.google.com/js/platform.js",
          async: true,
          defer: true
        },
        {
          src: `https://cdn.tiny.cloud/1/${process.env.TINY_MCE_API_KEY}/tinymce/5/tinymce.min.js`,
          referrerpolicy: "origin"
        }
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
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin: "anonymous"}
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
  ],
  auth: {
    strategies: {
      local: {
        //scheme: "refresh",
        token: {
          //property: "access_token",
          property: "token",
          global: false,
          required: true,
          //maxAge: 1800,
          type: "Bearer"
        },
        user: {
          property: "user",
          //autoFetch: true
        },
        /*refreshToken: {  
          property: "refresh_token",
          data: "refresh_token",
          maxAge: 60 * 60 * 24 * 30
        },*/
        
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          refresh: { url: "/api/auth/refresh", method: "post" },
          logout: { url: "/api/auth/logout", method: "delete" },
          user: { url: "/api/auth/getUser", method: "get" },
          allusers: { url: "/api/auth/allusers", method: "get" },
          allposts: { url: "/api/auth/allnewsposts", method: "get" },
          getroles: { url: "/api/auth/getRoles", method: "get" }
        },
        autoLogout: false
      }
    },
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    github: process.env.GITHUB_TOKEN
  },
  privateRuntimeConfig: {
    github: process.env.GITHUB_TOKEN
  },
  axios: {
    // baseURL: process.env.BASE_URL
    baseURL: "http://localhost:8080/"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: 'red',
    height: '1px',
    continuous: true,
    duration: 1000
  },
  ssr: false,
  
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
