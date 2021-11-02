
<template>
    <div id="app">
        <!--<b-navbar class="navbar navbar-expand-lg navbar-light" toggleable="lg" type="dark">
            <b-navbar-brand href="./"><img style="width: 60px; filter: contrast(200%);" src="/images/ArvidLogo.png" alt="logo"/></b-navbar-brand>
            <b-navbar-toggle class="navbar-toggler" target="nav-collapse"></b-navbar-toggle>
            <b-collapse class="collapse navbar-collapse" id="nav-collapse" is-nav>
                <b-navbar-nav class="mr-auto">
                    <b-nav-item>
                        <NuxtLink class="nav-link navlinkarvid active" id="hometab" aria-controls="home" aria-expanded="true" to="./">Home</NuxtLink>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>-->
        <!-- https://codepen.io/YusukeNakaya/pen/ebLjde TABS NAVBAR -->

        <!-- Hexagon Navbar https://codepen.io/web-tiki/full/WvNQpG/ -->
        <!-- new navbar?!?!?? https://codepen.io/MitchES/pen/dRMQdx -->
        <nav class="navbar navbar-expand-lg"> <NuxtLink to="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px; filter: contrast(200%);" src="/images/ArvidLogo.png" alt="logo"/></NuxtLink>
            <button class="navbar-toggler" target="navbarSupportedContent" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" id="hometab" aria-controls="home" aria-expanded="true" to="/"><i class="fas fa-solid fa-home" /> Home</NuxtLink>
                    </li>
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" to="/about"><i class="fas fa-address-card"/> About Me</NuxtLink>
                    </li>
                    <NuxtLink class="nav-item" to="/project"><b-dropdown variant="dark" text="Projects" class="nav-item dropdowncustom"> 
                        <b-dropdown-header class="dropdown-headercustom"><NuxtLink to="/project/">All Projects</NuxtLink></b-dropdown-header>
                            <b-dropdown-divider class="dropdown-divider rgbline"></b-dropdown-divider>
                            <!--<b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="/project/game">Spill</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="/project/3dprint">3D-Print</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="/project/photoshop">Photoshop</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="/project/php-login">PHP</NuxtLink></b-dropdown-item>-->
                            <b-dropdown-item v-for="item in projects" :key="item" v-bind:href="item.path" class="dropdown-itemcustom"><NuxtLink v-bind:to="item.path">{{ item.name }}</NuxtLink></b-dropdown-item>
                    </b-dropdown></NuxtLink>
                    
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" aria-controls="contacttab" aria-expanded="true" to="/contact">Contact</NuxtLink>
                    </li>
                    <li class="navbar-text">
			            <h1 class="navbarbox"></h1>
		            </li>
                </ul>
            </div>
        </nav>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <NLink property="item" typeof="WebPage" to="/">
                        <span property="name">Home</span>
                    </NLink>
                    <meta property="position" content="1" />
                </li>
                <li v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem" class="breadcrumb-item">
                    <NLink property="item" typeof="WebPage" :to="crumb.path">
                        <span property="name">
                            {{ $route.fullPath === crumb.path && title !== null ? title : crumb.title }}
                        </span>
                    </NLink>
                </li>
            </ol>
        </nav>
    </div>
</template>
<script src="~assets/js/jquery-3.4.1.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="~assets/js/popper.min.js"></script> 
<script src="~assets/js/bootstrap-4.4.1.js"></script>


<script lang="text/javascript">

export default {
    name: "Navbar",
    props: {
        title: {
        type: String,
        default: null,
        },
    },
    data() {
        return {
            projects: null,
            scene: 0,
            maxScene: 8
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


            if (match.name !== null) {
                crumbs.push({
                    title: param.charAt(0).toUpperCase() + param.slice(1),
                    ...match,
                })
            }
        })

        return crumbs
        },
    }, 
    mounted() {
        this.importAll();
    },
    methods: {
        async importAll(r) {
            this.projects = [];
            const content = await this.$content('projects').fetch();
            this.projects = content.projects;
        }
    }
}

</script>

<style lang="scss">
$titlefont: "Montserrat";
$textfont: "Quicksand";
@mixin hover {
    color: #ff0000 !important;
    /*box-shadow: inset 3px 3px 5px rgba(0,0,0,0.2), 
        inset 3px 3px 10px rgba(0,0,0,0.3),
        inset -3px -3px 10px rgba(0,0,0,0.1);*/
    box-shadow: 0 15px 35px rgb(0 0 0 / 50%);
    border-bottom: 0.2rem solid #ff0000;
    // Optional
    //animation: hover 2s forwards infinite;
}
@mixin active {
    color: #ff0000 !important;
    border-bottom: 0.2rem solid #ff0000;
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
.title {
    font-family: $titlefont;
}
/* Navbar */
.navbar {
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    background: colorscheme(darkblue);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0 !important;
    .navbar-nav {
        .nav-link {
            flex: 1 1 auto;
            align-self: center;
            padding: 1rem 2rem;
            transition: 0.2s;
            height: 100%;
            //display: block;
            vertical-align: middle;
            font-size: auto;
            align-self: stretch;
            position: relative;
            color: #ffffff;
            text-align: center;
            margin-left: 0rem;
            transition: all 1s ease;
            //transition: all 300ms ease;
            &:hover, &:focus {
                @include hover;
                border-radius: 50px;
            }
            &.active {
                @include active;
                border-radius: 50px;
            }
            &.nuxt-link-exact-active {
                @include active;
                border-radius: 50px;
                box-shadow: 4.2px 8.3px 8.3px hsl(0deg 0% 0% / 0.37);
                
            }
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

.rgbline {
    background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    height: 3px;
    border: 0;
    background-size: 200% 200%;
    box-shadow: 0px 1px 10px #23d5ab;
}
.rgb-link {
    background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-repeat: no-repeat;
    background-size: 0% 3px;
    background-position: left bottom;
    text-decoration: none;
    font-weight: 900;
    transition: background-size 600ms ease;
    &:hover {
        background-size: 300% 3px;
        -webkit-animation: rgb-link 10s ease infinite;
        animation: rgb-link 3s linear infinite;
    }
}
@keyframes rgb-link {
    0% {
        background-position-x: left;
    }
    50% {
        background-position-x: right;
    }
    100% {
        background-position-x: left;
    }
}
/* dropdown */
.dropdowncustom {
    .dropdown-headercustom, .dropdown-headercustom a {
        font-size: 1.2rem;
        color: #ffffff;
        text-align: center;
    }
    .dropdown-itemcustom:hover, .dropdown-itemcustom:focus, .dropdown-headercustom:hover, .dropdown-headercustom:focus {
        color: #16181b;
        text-decoration: none;
        background-size: 400% 200% !important;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab );
        -webkit-animation: gradient 10s ease infinite;
        animation: gradient 10s ease infinite !important;
    }
    .dropdown-item:hover, .dropdown-item:hover a, .dropdown-headercustom:hover a {
        background: none;
        color: #ffffff;
    }
    .btn {
        display: block;
        font-size: 1.25rem;
        color: #ffffff;
        padding: 1rem 2rem;
        text-align: center;
        margin-left: 0rem;
        border: none;
        border-radius: 0;
        transition: 0.3s;
        background: none !important;
        outline: none !important;
        &:hover {
            @include hover;
            /*background: none;
            border: none;
            outline: none;
            box-shadow: none;*/
        }
    }
    .dropdown-menu {
        background: var(--dropdownbackground);
        border: 0.1px solid white;
        border-top: none;
    }
    &.show {
        @include active;
        //box-shadow: 4.2px 8.3px 8.3px hsl(0deg 0% 0% / 0.37);
    }
}
</style>