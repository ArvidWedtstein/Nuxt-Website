
<template>
  <div id="navbar">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="arvid" viewBox="0 0 118 94">
        <title>Arvid</title>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
      </symbol>
      <symbol id="id" viewBox="0 0 580 500">
        <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"/>
      </symbol>
      <symbol id="home" viewBox="0 0 16 16">
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
      </symbol>
      <symbol id="news" viewBox="0 0 550 550">
        <path d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"/>
      </symbol>
      <symbol id="speedometer2" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
        <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
      </symbol>
      <symbol id="table" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
      </symbol>
      <symbol id="people-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </symbol>
      <symbol id="grid" viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
      </symbol>
      <symbol id="database" viewBox="0 0 500 500">
        <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"/>
      </symbol>
      <symbol id="login" viewBox="0 0 512 512">
        <path d="M128.73 195.32l-82.81-51.76c-8.04-5.02-18.99-2.17-22.93 6.45A254.19 254.19 0 0 0 .54 239.28C-.05 248.37 7.59 256 16.69 256h97.13c7.96 0 14.08-6.25 15.01-14.16 1.09-9.33 3.24-18.33 6.24-26.94 2.56-7.34.25-15.46-6.34-19.58zM319.03 8C298.86 2.82 277.77 0 256 0s-42.86 2.82-63.03 8c-9.17 2.35-13.91 12.6-10.39 21.39l37.47 104.03A16.003 16.003 0 0 0 235.1 144h41.8c6.75 0 12.77-4.23 15.05-10.58l37.47-104.03c3.52-8.79-1.22-19.03-10.39-21.39zM112 288H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm0 128H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm77.31-283.67l-36.32-90.8c-3.53-8.83-14.13-12.99-22.42-8.31a257.308 257.308 0 0 0-71.61 59.89c-6.06 7.32-3.85 18.48 4.22 23.52l82.93 51.83c6.51 4.07 14.66 2.62 20.11-2.79 5.18-5.15 10.79-9.85 16.79-14.05 6.28-4.41 9.15-12.17 6.3-19.29zM398.18 256h97.13c9.1 0 16.74-7.63 16.15-16.72a254.135 254.135 0 0 0-22.45-89.27c-3.94-8.62-14.89-11.47-22.93-6.45l-82.81 51.76c-6.59 4.12-8.9 12.24-6.34 19.58 3.01 8.61 5.15 17.62 6.24 26.94.93 7.91 7.05 14.16 15.01 14.16zm54.85-162.89a257.308 257.308 0 0 0-71.61-59.89c-8.28-4.68-18.88-.52-22.42 8.31l-36.32 90.8c-2.85 7.12.02 14.88 6.3 19.28 6 4.2 11.61 8.9 16.79 14.05 5.44 5.41 13.6 6.86 20.11 2.79l82.93-51.83c8.07-5.03 10.29-16.19 4.22-23.51zM496 288h-96c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm0 128h-96c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zM240 177.62V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V177.62c-5.23-.89-10.52-1.62-16-1.62s-10.77.73-16 1.62zm-64 41.51V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V189.36c-12.78 7.45-23.84 17.47-32 29.77zm128-29.77V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V219.13c-8.16-12.3-19.22-22.32-32-29.77z"/>
      </symbol>
    </svg>
    <!-- https://codepen.io/YusukeNakaya/pen/ebLjde TABS NAVBAR -->

    <!-- Hexagon Navbar https://codepen.io/web-tiki/full/WvNQpG/ -->
    <!-- new navbar?!?!?? https://codepen.io/MitchES/pen/dRMQdx -->
    <nav class="navbar navbar-expand-lg navbar-darkmode">
      <div class="container-fluid">
        <NuxtLink to="./" class="navbar-brand"><img style="width: 30px;" src="/images/ArvidLogo.png" alt="logo"/></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="box-shadow: none; border: none">
          <span class="navbar-toggler-icon" style="color: #ffffff"><i class="fas fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#login"/></svg>
                Home
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/about">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#id"/></svg>
                About
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/project/">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#database"/></svg>
                Projects
              </NuxtLink>
            </li>
            <!-- <li class="nav-item">
              <NuxtLink class="nav-link link" to="/contact">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#arvid"/></svg>
                Contact
              </NuxtLink>
            </li> -->
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/blog">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#news"/></svg>
                News
              </NuxtLink>
            </li>
          </ul>
          <!--<span class="navbar-text">
            Navbar text with an inline element
          </span>-->
          <div class="dropdown text-end">
            <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <nuxt-img src="/images/Galaxy.jpg" alt="User" width="32" height="32" class="rounded-circle" />
            </a>
            <ul class="dropdown-menu text-small dropdown-menu-end" aria-labelledby="dropdownUser1">
              <li><a v-if="isAuthenticated" class="dropdown-item" href="#">New project...</a></li>
              <li><a v-if="isAuthenticated" class="dropdown-item" href="#">Settings</a></li>
              <li><a v-if="isAuthenticated" class="dropdown-item" href="/chat">Chat</a></li>
              <li><NuxtLink v-if="hasPermission('MODIFY_USERS')" class="dropdown-item" to="/auth/admindashboard"><i class="fas fa-user-cog"/> Admin Dashboard</NuxtLink></li>
              <li><NuxtLink v-if="isAuthenticated" class="dropdown-item" :to="'/auth/profile/' + getUserInfo.id"><i class="far fa-user"/> Profile</NuxtLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a v-if="isAuthenticated" class="dropdown-item" v-on:click="logout()" to="/">Sign out</a></li>
              <li><NuxtLink v-if="!isAuthenticated" class="dropdown-item" to="/auth/register">Signup</NuxtLink></li>
              <li><NuxtLink v-if="!isAuthenticated" class="dropdown-item" to="/auth/login">Login</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink property="item" typeof="WebPage" to="/">
            <span property="name">Home</span>
          </NuxtLink>
          <meta property="position" content="1" />
        </li>
        <li v-for="(crumb, iii) in crumbs" :key="iii" property="itemListElement" typeof="ListItem" class="breadcrumb-item">
          <NuxtLink property="item" typeof="WebPage" :to="crumb.path">
            <span property="name">
              {{ $route.fullPath === crumb.path && title !== null ? title : crumb.title }}
            </span>
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </div>
</template>


<script lang="text/javascript">
export default {
  name: "Navbar",
  middleware: "isAuthenticated",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      projects: null
    }
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []

      let path = ''

      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        var isId = param.match(/\d+/g);

        if (match.name !== null && isId === null) {
          crumbs.push({
            title: param.charAt(0).toUpperCase() + param.slice(1),
            ...match,
          })
        }
      })

      return crumbs
    },
    isAuthenticated() {
      //this.$auth.refreshTokens()
      return this.$store.getters.isAuthenticated;  
    },
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    },
    
  }, 
  methods: {
    isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    async logout() {
      
      console.log('logout')
      // console.log(this)
      this.$store.$auth.logout()
    },
    hasPermission(permission) {
      if (this.isAuthenticated) {
        if (this.$store.getters.getUserInfo.role.permissions.includes(permission)) {
          return true;  
        } else {
          return false;
        }
      }
    }
  }
}

</script>

<style lang="scss">

@font-face {
  font-family: "bodytext";  
  src: url('https://fonts.gstatic.com/s/unifrakturcook/v8/ASwh69ykD8iaoYijVEU6RpMdj8Gkv7ccSfgBBVtwm5Y.woff2');
}
.bi {
  vertical-align: -.125em;
  fill: currentColor;
}
@mixin hover {
  text-decoration: none;
  color: colorscheme('lime') !important;
  /*box-shadow: inset 3px 3px 5px rgba(0,0,0,0.2), 
    inset 3px 3px 10px rgba(0,0,0,0.3),
    inset -3px -3px 10px rgba(0,0,0,0.1);*/
  box-shadow: 0 15px 35px rgb(0 0 0 / 50%);
  border-bottom: 0.2rem solid colorscheme('lime');
  // Optional
  //animation: hover 2s forwards infinite;
}
$maincolors: (
  "darkblue": #192D40,
  "blue": #21303A,
  "cyan": #375D72,
  "lime": #7FCD8A,
  "white": #F4F0E7,
  "lightblue": #5DACB6
);
@function colorscheme($color) {
  @return map-get($maincolors, $color);
}
@mixin active {
  text-decoration: none;
  color: colorscheme('lime') !important;
  border-bottom: 0.2rem solid colorscheme('lime');
  box-shadow: inset 3px 3px 5px rgba(0,0,0,0.2), 
    inset 3px 3px 10px rgba(0,0,0,0.3),
    inset -3px -3px 10px rgba(0,0,0,0.1);
}
@mixin rgbshadow {
  border-radius: 100px;
  box-shadow: #ffdd00 5px -3px 5px 0px,
        #00ff2f 3px 5px 5px 0px,
        #f200ff -3px 5px 5px 0px,
        #00eeff -3px -5px 5px 0px;
}
@mixin shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@keyframes hover {
  0% {
    box-shadow: 0.0px 0.0px 0.0px hsl(0deg 0% 0% / 0.50);
  }
  50% {
    box-shadow: 4.2px 8.3px 8.3px hsl(0deg 0% 0% / 0.37);
  }
  100% {
    box-shadow: 0.0px 0.0px 0.0px hsl(0deg 0% 0% / 0.50);
  }
}
$titlefont: "Montserrat";
$textfont: "Quicksand";
.title {
  font-family: $titlefont;
}
.navbar-darkmode {
  &.navbar {
    z-index: 5;
    text-align: center;
    justify-content: center;
    background: linear-gradient(to right, colorscheme('blue'), colorscheme('darkblue'));
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0 !important;
    margin: 0;
    .navbar-nav {
      .nav-item {
        position: relative;
        padding: 0;
        .nav-link {
          // padding: 1rem 2rem;
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 2.3ch;
          margin: 0;
          text-align: center;
          transition: all 0.3s ease;
          font-family: 'Quicksand';
          span {
            cursor: pointer;
            display: inline-block;
            &::after {
              vertical-align: middle;
              content: "News ";
              position: absolute;
              opacity: 0;
              top: 50%;
              transform: translateY(-50%);
              right: -20px;
              transition: 0.5s;
            }
          }
          &:hover {
            span {
              padding-right: 25px;
              &::after {
                opacity: 1;
                right: 0px;
              }
            }
          }
        }
      }
    }
    .dropdown {
      transition: all 0.3s ease;
      font-family: $textfont;
      color: colorscheme('white');
      .dropdown-menu {
        color: colorscheme('white');
        background: lighten(colorscheme('cyan'), 10);
      }
      .dropdown-item {
        color: colorscheme('white');
      }
      .dropdown-header {
        font-size: 1.2rem;
        transition: all 0.1s ease;
      }
      .dropdown-item:hover, 
      .dropdown-item:focus, 
      .dropdown-item:focus-within, 
      .dropdown-header:hover, 
      .dropdown-header:focus {
        text-decoration: none;
        transition: all 0.1s ease;
        background: rgba(colorscheme('darkblue'), 0.3);
        color: colorscheme('white');
        
      }
      &.show {
        @include active;
        border-radius: 0.25rem;
        box-shadow: 4.2px 8.3px 8.3px hsl(0deg 0% 0% / 0.37);
      }
    }
  }
  color: colorscheme('white') !important;
  
}
.navbar-lightmode {
  .navbar-nav {
    .nav-item {
      .nav-link {
        border-bottom: 0.2rem solid transparent;
        color: #ffffff;
        &:hover, &:focus {
          @include hover;
        }
        &.active, &.nuxt-link-exact-active  {
          @include active;
          border-radius: 0.25rem;
          box-shadow: 4.2px 8.3px 8.3px hsl(0deg 0% 0% / 0.37);
        }
      }
    }
  }
}





/* Breadcrumb */
.breadcrumb {
  z-index: 5;
  padding: 0.8rem 1rem;
  margin-bottom: 0rem;
  font-family: $textfont;
  list-style: none;
  border-top: 0.05rem solid #ffffff;
  //background: var(--navitemcolor) !important;
  background: linear-gradient(to right, colorscheme('blue'), colorscheme('cyan'));
  border-radius: none;
  border-bottom: 0.01rem solid #727272;
  
  .breadcrumb-item {
    .nuxt-link-exact-active, :active {
      color: lighten(colorscheme('lime'), 10);
      box-shadow: none !important;
      border: none;
      font-weight: 600;
    }
    .breadcrumb-item::before {
      color: #00ffff;
      content: '/';
    }
  }
}

</style>
