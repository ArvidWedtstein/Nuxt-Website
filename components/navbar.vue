
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
                        <NuxtLink class="nav-link" id="hometab" aria-controls="home" aria-expanded="true" to="/"><font-awesome-icon icon="fa-solid fa-home" /> Home</NuxtLink>
                    </li>
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" to="/about"><font-awesome-icon icon="fa-address-card"/> About Me</NuxtLink>
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

