
<template>
    <div id="project">
        <div class="container-fluid">  
            <div class="row">
			    <div v-for="item in projects" :key="item" class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <div class="card-body">
                            <NuxtLink v-bind:to="item.path"><img class="card-img-top" v-bind:src="item.image" v-bind:alt="item.name" /></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><h5 class="card-title">{{ item.name }} <div class="icons"><font-awesome-icon class="category" v-for="category in item.category" :key="category" v-bind:icon="categoryicons[category]"/></div></h5></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><p class="card-text">{{ item.description }}</p></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><p class="card-text">Date: 22/10/21</p></NuxtLink>
                            <NuxtLink v-bind:to="item.path"><p v-if="item.category == 'Programming'" class="card-text">Language: {{ item.language.join(', ') }}</p></NuxtLink>
                        </div>
                    </div>
                </div>
                <!--<div v-for="(item, i) in gitprojects" :key="i" class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <div class="card-body">
                            <p>{{i}}</p>
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{item.description}}</p>
                            <p class="card-text">Date: {{item.created_at}}</p>
                            <ul>
                                <li v-for="(key, value) in gitprojectlang[i]" :key="value">{{value}}{{key}}</li>
                            </ul>
                        </div>
                    </div>
                </div>-->          
                
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
            <div class="jumbotron">
                <h1 class="display-4">Projects</h1>
                <hr class="my-4">
                <Timeline :timeline="timeline"/>
            </div>
            
        </div>
    </div>
</template>


<script lang="text/javascript">
import Timeline from '../../components/timeline.vue';

const axios = require('axios');
export default {
    template: "<Project/>",
    transition: "slide-bottom",
    head() {
        return {
            title: "Projects",
            meta: [
                {
                    hid: "description",
                    name: "project page",
                    content: "Arvid's projects"
                }
            ]
        };
    },
    data() {
        return {
            images: null,
            projects: null,
            categoryicons: null
        };
    },
    async asyncData() {
        const gitprojects = [];
        const gitprojectlang = [];
        const timeline = []
        const projectrepositories = ["Nuxt-Website", "DiscordBotArvid", "Game", "Marlin", "TestNettside", "rgbOS", "Arvidw.space"];
        axios({
            method: "get",
            url: "https://api.github.com/users/ArvidWedtstein/repos"
        })
            .then(async (response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (projectrepositories.includes(response.data[i].name)) {
                    gitprojects.push(response.data[i]);
                    timeline.push(
                        {
                            message: response.data[i].name,
                            description: response.data[i].description,
                            date: response.data[i].created_at
                        }
                    )
                    axios({
                        method: "get",
                        url: response.data[i].languages_url
                    }).then((response2) => {
                        let lang = response2.data;
                        for (let r = 0; r < Object.values(lang).length; r++) {
                            /*let score = 0;
                            for (let s = 0; s < Object.values(lang).length; s++) {
                                score += Object.values(lang)[s];
                            }
                            let percent = Object.values(lang)[r]/score;*/
                            let totalvalue = Object.values(lang);
                            console.log(Object.values(lang) + "===" + totalvalue);
                            let percent = this.percentage(Object.values(lang)[r], totalvalue);
                            lang[`${Object.keys(lang)[r]}`] = percent;
                        }
                        console.log(lang);
                        gitprojectlang.push(response2.data);
                    });
                    
                    
                    
                }
            }
        });
        return {
            gitprojects,
            gitprojectlang,
            timeline
        };
    },
    mounted() {
        this
        this.importAll(require.context("~/static/images/Blender/", true, /\.PNG$/));
    },
    methods: {
        async importAll(r) {
            this.images = [];
            this.projects = [];
            this.categoryicons = [];
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            const content = await this.$content("projects").fetch();
            this.projects = content.projects;
            this.categoryicons = content.categoryicons;
        },
        percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
        },
        sumArray(array) {
            console.log(array);
            let sum = 0;
            for (var index = 0; index < array.length; index++) {
                sum += array[index];
            }
            return sum;
        }
    },
    computed: {},
    components: { Timeline }
}


</script>

