
<template>
    <div id="project">
        <Navbar/>
        <div class="container-fluid">  
            <div class="row">
			    <div v-for="item in projects" :key="item" class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <div class="card-body">
                            <NuxtLink v-bind:to="item.path"><img class="card-img-top" v-bind:src="item.image" v-bind:alt="item.name"/></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><h5 class="card-title">{{ item.name }} <div class="icons"><font-awesome-icon class="category" v-for="category in item.category" :key="category" v-bind:icon="categoryicons[category]"/></div></h5></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><p class="card-text">{{ item.description }}</p></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><p class="card-text">Date: 22/10/21</p></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><p v-if="item.category == 'Programming'" class="card-text">Language: {{ item.language.join(', ') }}</p></NuxtLink>
                        </div>
                    </div>
                    
                </div>
                <!--<div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./game"><img class="card-img-top" src="/images/Projects/game.PNG" alt="Spill"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">Spill</h5>
                            <p class="card-text">A wacky game...</p>
                            <p class="card-text">Date: 22/10/21</p>
                            <p class="card-text">Language: C#</p>
                        </div>
                    </div>
                </div>
		        <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./3dprint"><img class="card-img-top" src="/images/Projects/3dprint.jpg" alt="3D Print"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">3D Print</h5>
                            <p class="card-text">3D Models</p>
                            <p class="card-text">Date: 22/10/21</p>
                            <p class="card-text">Language: GCODE</p>
                        </div>
                    </div>
			  	</div>
			    <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./photoshop"><img class="card-img-top" src="/images/Projects/photoshop.jpg" alt="Photoshop"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">Photoshop</h5>
                            <p class="card-text">Photoshop Images</p>
                            <p class="card-text">Language: ps</p>
                        </div>
                    </div>
			  	</div>
                <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./php-login"><img class="card-img-top" src="/images/Projects/php.png"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">PHP Login</h5>
                            <p class="card-text">PHP & SQL Login</p>
                            <p class="card-text">Language: PHP, SQL</p>
                        </div>
                    </div>
			  	</div>-->
	        </div>
        </div>
    </div>
</template>


<script lang="text/javascript">


export default {
  
    template: '<Project/>',
    transition: 'slide-bottom',
    head() {
        return {
            title: 'Projects',
            meta: [
                {
                    hid: "description",
                    name: "project page",
                    content: "Arvid's projects"
                }
            ]
        }
    },
    data() {
        return {
            images: null,
            projects: null,
            categoryicons: null
        }
    },
    mounted() {
        this.importAll(require.context('~/static/images/Blender/', true, /\.PNG$/))
    },
    methods: {
        async importAll(r) {
            this.images = [];
            this.projects = [];
            this.categoryicons = [];
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            const content = await this.$content('projects').fetch();
            this.projects = content.projects;
            this.categoryicons = content.categoryicons;
        }
    }
}


</script>

