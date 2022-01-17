
<template>
  <div id="navbar">
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
              <NuxtLink class="nav-link link" to="/"><i class="fas fa-solid fa-home" /> Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/about"><i class="fas fa-id-card-alt"/> About Me</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/project/"><i class="fas fa-briefcase"/> Projects</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/contact"><i class="fas fa-id-card"/> Contact</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link" to="/blog"><i class="fas fa-newspaper"/> News</NuxtLink>
            </li>
          </ul>
          <!--<span class="navbar-text">
            Navbar text with an inline element
          </span>-->
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="user" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="far fa-user"/></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><NuxtLink v-if="!isAuthenticated" class="dropdown-item" to="/auth/register"><i class="far fa-user"/> Signup</NuxtLink></li>
              <li><NuxtLink v-if="!isAuthenticated" class="dropdown-item" to="/auth/login"><!--<i class="far fa-user"/>--><img width="30px" src="/images/login.png"/> Login</NuxtLink></li>
              <li><NuxtLink v-if="isAuthenticated" class="dropdown-item" :to="'/auth/profile/' + getUserInfo.id"><i class="far fa-user"/> Profile</NuxtLink></li>
              <li><NuxtLink v-if="hasPermission('MODIFY_USERS')" class="dropdown-item" to="/auth/admindashboard"><i class="fas fa-user-cog"/> Hacker Dashboard</NuxtLink></li>
              <!-- <li><NuxtLink class="dropdown-item" to="/chat"><i class="fas fa-user-cog"/> Chat</NuxtLink></li> -->
              <li><NuxtLink v-if="isAuthenticated" class="dropdown-item" @click="logout" to="/"><img width="30px" src="/images/logout.png"/> Logout</NuxtLink></li>
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
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })
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
  mounted() {
  },
  methods: {
    isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    async logout() {
      
      //console.log('logout')
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
          padding: 1rem 2rem;
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
      .dropdown-header {
        font-size: 1.2rem;
        color: colorscheme('lime');
        text-align: center;
        transition: all 0.1s ease;
      }
      .dropdown-item:hover, 
      .dropdown-item:focus, 
      .dropdown-item:focus-within, 
      .dropdown-header:hover, 
      .dropdown-header:focus {
        text-decoration: none;
        transition: all 0.1s ease;
        background: inherit;
        background: none;
        @include hover;
        color: colorscheme('lime');
        
      }
      .dropdown-menu {
        background: darken(colorscheme('cyan'), 10);
        border: 0.1px solid white;
        border-top: none;
        color: #fff;
        .dropdown-item {
          color: #fff;
        }
      }
      &.show {
        @include active;
        border-radius: 0.25rem;
        box-shadow: 4.2px 8.3px 8.3px hsl(0deg 0% 0% / 0.37);
      }
    }
    .navbarbox {
      position: absolute;
      top: 0;
      left: 70%;
      width: 10%;
      height: 100%;
      text-align: center;
      border-left: 0.1rem solid #ffffff;
      border-right: 0.1rem solid #ffffff;
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab );
      background-size: 400% 200%;
      transform: skewX(25deg);
      display: block;
      animation: gradient 10s ease infinite;
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