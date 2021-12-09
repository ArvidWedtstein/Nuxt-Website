
<template>
    <div id="navbar">
        <!-- https://codepen.io/YusukeNakaya/pen/ebLjde TABS NAVBAR -->

        <!-- Hexagon Navbar https://codepen.io/web-tiki/full/WvNQpG/ -->
        <!-- new navbar?!?!?? https://codepen.io/MitchES/pen/dRMQdx -->
        <nav class="navbar navbar-expand-lg navbar-darkmode">
            <NuxtLink to="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px;" src="/images/ArvidLogo.png" alt="logo"/></NuxtLink>
            <button class="navbar-toggler" target="navbarSupportedContent" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"><i class="fas fa-id-card"/></span> 
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" id="hometab" aria-controls="home" aria-expanded="true" to="/"><i class="fas fa-solid fa-home" /> Home</NuxtLink>
                    </li>
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" to="/about"><i class="fas fa-id-card-alt"/>About Me</NuxtLink>
                    </li>
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" to="/project/"><i class="fas fa-briefcase"/>Projects</NuxtLink>
                    </li>
                    <!--<li class="nav-item dropdown"> 
                        <NuxtLink class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false"><i class="fas fa-briefcase"/> Projects</NuxtLink>

                        <div class="dropdown-menu"> 
                            <a class="dropdown-header" href="../project/">Alle Projects</a>
                            <div class="dropdown-divider"></div>
                            <NuxtLink v-bind:to="item.path" v-for="(item, x) in projects" :key="x" class="dropdown-item">{{ item.name }}</NuxtLink>
                        </div>
                    </li>-->
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" aria-controls="contacttab" aria-expanded="true" to="/contact"><i class="fas fa-id-card"/> Contact</NuxtLink>
                    </li>
                    <li v-if="hasPermission('VIEW_POST')" class="nav-item"> 
                        <NuxtLink class="nav-link" aria-controls="newstab" aria-expanded="true" to="/blog"><i class="far fa-newspaper"/> News</NuxtLink>
                    </li>
                    <li class="nav-item dropdown"> 
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false"><i class="far fa-user"/></a>
                        <div class="dropdown-menu"> 
                            <NuxtLink v-if="!isAuthenticated" class="dropdown-item" to="/auth/register"><i class="far fa-user"/> Signup</NuxtLink>
                            <NuxtLink v-if="!isAuthenticated" class="dropdown-item" to="/auth/login"><!--<i class="far fa-user"/>--><img width="30px" src="/images/login.png"/> Login</NuxtLink>
                            <NuxtLink v-if="isAuthenticated" class="dropdown-item" :to="'/auth/profile/' + getUserInfo.id"><i class="far fa-user"/> Profile</NuxtLink>
                            <NuxtLink v-if="hasPermission('MODIFY_USERS')" class="dropdown-item" to="/auth/admindashboard"><i class="fas fa-user-cog"/> Hacker Dashboard</NuxtLink>
                            <NuxtLink class="dropdown-item" to="/chat"><i class="fas fa-user-cog"/> Chat</NuxtLink>
                            <button type="button" v-if="isAuthenticated" class="dropdown-item" @click="logout" to="/"><!--<i class="far fa-user"/>--><img width="30px" src="/images/logout.png"/> Logout</button>
                        </div>
                    </li>
                    <!--<li class="navbar-text">
			            <h1 class="navbarbox"></h1>
		            </li>-->
                </ul>
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
                <li v-for="(crumb, i) in crumbs" :key="i" property="itemListElement" typeof="ListItem" class="breadcrumb-item">
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
            this.$auth.refreshTokens()
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
            console.log('logout')
            this.$store.$auth.logout()
        },
        hasPermission(permission) {
            if (this.isAuthenticated) {
                //console.log(this.$auth.hasScope('admin'))
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
    font-family: "medieval";
    src: url('https://fonts.gstatic.com/s/unifrakturmaguntia/v7/7KWy3ymCVR_xfAvvcIXm3wh3zWhftzIdHBsuU0JwdCQ.woff2');
}
@font-face {
    font-family: "bodytext";  
    src: url('https://fonts.gstatic.com/s/unifrakturcook/v8/ASwh69ykD8iaoYijVEU6RpMdj8Gkv7ccSfgBBVtwm5Y.woff2');
}

@mixin hover {
    text-decoration: none;
    color: $hovercolor !important;
    /*box-shadow: inset 3px 3px 5px rgba(0,0,0,0.2), 
        inset 3px 3px 10px rgba(0,0,0,0.3),
        inset -3px -3px 10px rgba(0,0,0,0.1);*/
    box-shadow: 0 15px 35px rgb(0 0 0 / 50%);
    border-bottom: 0.2rem solid $hovercolor;
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
    color: $hovercolor !important;
    border-bottom: 0.2rem solid $hovercolor;
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
$hovercolor: colorscheme('lime');
.title {
    font-family: $titlefont;
}

.navbar {
    z-index: 5;
    text-align: center;
    justify-content: center;
    background: linear-gradient(to right, colorscheme('blue'), colorscheme('darkblue'));
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0 !important;
    &.navbar-darkmode {
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
    &.navbar-lightmode {
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
    .navbar-nav {
        .nav-item {
            .nav-link {
                padding: 1rem 2rem;
                font-size: 2.3ch;
                text-align: center;
                transition: all 0.3s ease;
                font-family: 'bodytext';
            }
        }
    }
    .dropdown {
        transition: all 0.3s ease;
        .dropdown-header {
            font-size: 1.2rem;
            color: $hovercolor;
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
            color: $hovercolor;
        }
        /*.btn {
            display: block;
            font-size: 1.25rem;
            color: #ffffff;
            padding: 1rem 2rem;
            text-align: center;
            margin-left: 0rem;
            border: none;
            border-radius: 0;
            transition: 0.1s;
            background: none !important;
            outline: none !important;
            &:hover {
                @include hover;
            }
        }*/
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




/* Breadcrumb */
.breadcrumb {
    z-index: 5;
    padding: 0.8rem 1rem;
    margin-bottom: 0rem;
    list-style: none;
    border-top: 0.05rem solid #ffffff;
    //background: var(--navitemcolor) !important;
    background: linear-gradient(to right, colorscheme('blue'), colorscheme('cyan'));
    border-radius: none;
    border-bottom: 0.01rem solid #727272;
    
    .breadcrumb-item {
        .nuxt-link-exact-active, :active {
            color: lighten($hovercolor, 10);
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