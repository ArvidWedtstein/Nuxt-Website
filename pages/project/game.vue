
<template>
    <div id="game">
        <div id="preview" class="container-fluid">
            <div class="jumbotron">
                <h1 class="display-4">Spill uten navn..</h1>
                <p class="lead">Dette er da spillet jeg holder på å utvikle og designe</p>
                <p class="lead">Nedenfor kan du få et lite innblikk i hvordan spillet ser ut for tiden</p>
                <hr class="my-4">
            </div>
        </div>
        <div id="slides" class="container-fluid">
            <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="7"></li>
                </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active"> <img class="d-block mx-auto" src="/images/Unity/Unity1.PNG" alt="First slide">
                    <div class="carousel-caption">
                        <h5>By</h5>
                        <p>I denne byen er det i fremtiden mulig å kjøpe utstyr (sverd, rustninger, osv)</p>
                    </div>
                </div>
                <div class="carousel-item"><img class="d-block mx-auto" src="/images/Unity/Unity2.PNG" alt="Second slide">
                    <div class="carousel-caption">
                        <h5>Elv</h5>
                        <p>Send gjerne forslag til navn til elven på "kontakt" siden</p>
                    </div>
                </div>
                <div class="carousel-item"> <img class="d-block mx-auto" src="/images/Unity/Unity3.PNG" alt="Third slide">
                    <div class="carousel-caption">
                        <h5>By uten navn i dagslys</h5>
                        <p>Send gjerne forslag til bynavn på "kontakt" siden</p>
                    </div>
                </div>
                <div class="carousel-item"> <img class="d-block mx-auto" src="/images/Unity/Unity4.PNG" alt="Fourth slide">
                    <div class="carousel-caption">
                        <h5>Landskap</h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item"> <img class="d-block mx-auto" src="/images/Unity/Unity5.PNG" alt="Fifth slide">
                    <div class="carousel-caption">
                        <h5>By</h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item"> <img class="d-block mx-auto" src="/images/Unity/Unity6.PNG" alt="Sixth slide">
                    <div class="carousel-caption">
                        <h5>Landskap</h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item"> <img class="d-block mx-auto" src="/images/Unity/Unity7.PNG" alt="Eight slide">
                    <div class="carousel-caption">
                        <h5>By uten navn i mørket</h5>
                        <p>Send gjerne forslag til bynavn på "kontakt" siden</p>
                    </div>
                </div>
                <div class="carousel-item"> <img class="d-block mx-auto" src="/images/Unity/Unity8.PNG" alt="Ninth slide">
                    <div class="carousel-caption">
                        <h5>Hus</h5>
                        <p></p>
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev"><i class="fas fa-chevron-left"></i> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next"> <i class="fas fa-chevron-right"></i> <span class="sr-only">Next</span> </a> </div>
            </div>
            <div class="container-fluid">
                <div class="jumbotron">
                    <h1 class="display-4">Blender</h1>
                    <hr class="my-4">
                    <p>Spillets 3D modeller har jeg laget i Blender. Nedenfor er en oversikt på noen av dem.</p>
                </div>
                <div class="row">
                    <div v-for="(value) in images" :key="value" class="col-xl-3">
                        <div class="gameresponsive">
                            <div class="gallery">
                                <a target="_blank" v-bind:alt="value.pathShort">
                                <img v-bind:src="value.pathLong" v-bind:alt="value.pathShort" class="img-fluid 3Dimg" height="300">
                                </a>
                                <!--Tekst under bilde-->
                                <div class="desc">{{descriptions[value.pathShort]}}</div>
                            </div>
                        </div>
                    </div>
                    <!--BEHOLD CODE TIL PRESENTASJON-->
                    <!--<div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender2.PNG">
                                <img src="/images/Blender/Blender2.PNG" alt="Gull Mynt" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Gull Mynt</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender3.PNG">
                                <img src="/images/Blender/Blender3.PNG" alt="Obelisk" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Obelisk</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender4.PNG">
                                <img src="/images/Blender/Blender4.PNG" alt="Lykt" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Lykt</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender5.PNG">
                                <img src="/images/Blender/Blender5.PNG" alt="Hus" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Hus</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender6.PNG">
                                <img src="/images/Blender/Blender6.PNG" alt="Banner" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Banner</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender7.PNG">
                                <img src="/images/Blender/Blender7.PNG" alt="Øltønne" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Øltønne</div>
                            </div>
                        </div>
                    </div>	
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender8.PNG">
                                <img src="/images/Blender/Blender8.PNG" alt="Ambolt" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Ambolt</div>
                            </div>
                        </div>
                    </div>	  
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender9.PNG">
                                <img src="/images/Blender/Blender9.PNG" alt="Kopp" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Kopp</div>
                            </div>
                        </div>
                    </div>	  
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender10.PNG">
                                <img src="/images/Blender/Blender10.PNG" alt="Kiste" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Kiste</div>
                            </div>
                        </div>
                    </div>	  
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender11.PNG">
                                <img src="/images/Blender/Blender11.PNG" alt="Gjerde" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Gjerde</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender12.PNG">
                                <img src="/images/Blender/Blender12.PNG" alt="Ovn" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Ovn</div>
                            </div>
                        </div>
                    </div>	  
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender13.PNG">
                                <img src="/images/Blender/Blender13.PNG" alt="MystiskKiste" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Mystisk Kiste</div>
                            </div>
                        </div>
                    </div>	  
                    <div class="col-xl-3">
                        <div class="responsive">
                            <div class="gallery">
                                <a target="_blank" href="/images/Blender/Blender14.PNG">
                                <img src="/images/Blender/Blender14.PNG" alt="Hammer" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">Hammer</div>
                            </div>
                        </div>
                    </div>-->	   
                </div>
            </div>
        </div>
</template>

<script lang="text/javascript">
const axios = require('axios');

export default {
  
    template: '<game/>',
    transition: 'slide-bottom',
    data() {
        return {
            images: null,
            descriptions: null
        }
    },
    mounted() {
        this.importAll(require.context('~/static/images/Blender/', true, /\.PNG$/))
        this.api()
    },
    methods: {
        async importAll(r) {
            this.images = [];
            this.descriptions = [];
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            const content = await this.$content('game').fetch();
            this.descriptions = content;
        },
        api() {
         axios({
               method: 'get',
               url: 'https://api.github.com/repos/ArvidWedtstein/Game'
         })
         .then(function (response) {
            console.log(response.data)
            axios({
               method: 'get',
               url: 'https://api.github.com/repos/ArvidWedtstein/Game/contents/Assets/3D models'
            })
            .then(function (response2) {
               console.log(response2.data)
            })
         });
      }
    }
}


</script>

