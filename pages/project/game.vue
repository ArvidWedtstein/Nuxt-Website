
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
                    <li v-for="(slide, s) in slideshow" :key="s" data-target="#carouselExampleIndicators1" :data-slide-to="s" class="active"></li>
                </ol>
            <div class="carousel-inner" role="listbox">
                <div v-for="(slide, h) in slideshow" :key="h" v-bind:class="{active: h === 0}" class="carousel-item"> 
                    <img class="d-block mx-auto" :src="slide.pathLong" :alt="slide.pathShort">
                    <div class="carousel-caption">
                        <h5>By</h5>
                        <p>test</p>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev"><i class="fas fa-chevron-left"/> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next"> <i class="fas fa-chevron-right"/> <span class="sr-only">Next</span> </a> </div>
            </div>
            <div class="container-fluid">
                <div class="jumbotron">
                    <h1 class="display-4">Blender</h1>
                    <hr class="my-4">
                    <p>Spillets 3D modeller har jeg laget i Blender. Nedenfor er en oversikt på noen av dem.</p>
                </div>
                <div class="row">
                    <div v-for="(value, k) in images" :key="k" class="col-xl-3">
                        <div class="blendercard">
                            <div class="box">
                                <div class="icon">
                                    <!--<i class="fas fa-code"/>-->
                                    <img class="img-fluid" height="100%" width="100%" v-bind:src="value.pathLong" v-bind:alt="value.pathShort">
                                </div>
                                <div class="content">
                                    <h5 class="printcard-title">{{ descriptions[value.pathShort] }}</h5>
                                </div>
                            </div>
                        </div>
                        <!--<div class="gameresponsive">
                            <div class="gallery">
                                <a target="_blank" v-bind:alt="value.pathShort">
                                <img v-bind:src="value.pathLong" v-bind:alt="value.pathShort" class="img-fluid 3Dimg" height="300">
                                </a>
                                <div class="desc">{{descriptions[value.pathShort]}}</div>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="text/javascript">
const axios = require('axios');

export default {
    name: 'game',
    transition: 'slide-bottom',
    data() {
        return {
            images: null,
            slideshow: null,
            descriptions: null
        }
    },
    mounted() {
        this.importAll()
        this.api()
    },
    methods: {
        async importAll() {
            let r = require.context('~/static/images/Blender/', true, /\.PNG$/);
            let r2 = require.context('~/static/images/Unity/', true, /\.PNG$/);
            this.images = [];
            this.slideshow = [];
            this.descriptions = [];
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            r2.keys().forEach(key => (this.slideshow.push({ pathLong: r2(key), pathShort: key })));
            const content = await this.$content('game').fetch();
            this.descriptions = content;
            this.slideshow.slice(0, 3);
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

<style lang="scss">
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
body {
    overflow-x: hidden;
}
.blenderimg {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
}
.blendercard {
    padding: 0;
    min-height: 1px;
    margin: 1rem;
    align-content: center;
    display: flex;
    width: 100%;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    .box {
        border: 1px solid #ccc;
        align-self: center;
        position: relative;
        overflow: hidden;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        border-radius: 0.25rem;
        background: linear-gradient(-0deg, colorscheme('lightblue'), colorscheme('darkblue'));
        .icon {
            position: absolute;
            top: 0%;
            left: 0;
            width: 100%;
            height: 100%;
            transition: 0.5s;
            border-radius: 0.25rem;
            background: colorscheme('blue');
            z-index: 2;
            text-align: center;
            vertical-align: middle;
            img {
                width: 100%;
                height: 100%;
            }
            i {
                font-size: 4ch;
                transform: translateY(50%);
            }
        }
        &:hover {
            .icon {
                top: 30px;
                left: calc(50% - 40px);
                width: 80px;
                height: 80px;
                border: 50%;
            }
        }
        .content {
            position: relative;
            padding: 20px;
            color: #fff;
            margin-top: 100px;
            text-align: center;
            z-index: 1;
        }
    }
}
.gameresponsive {
    padding: 0;
    margin: 1rem;
    min-height: 1px;
    align-content: center;
    display: flex;
    align-items: center;
    vertical-align: middle;
    background: url("/images/background.jpg");
    background-size: cover;
    width: 100%;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.2), 
        inset -5px -5px 15px rgba(255,255,255,0.1), 
        5px 5px 15px rgba(0,0,0,0.3),
        -5px -5px 15px rgba(255,255,255,0.1);
    .gallery {
        border: 1px solid #ccc;
        padding: 0rem;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        transition: all 0.3s ease;
        &:hover {
            border: 1px solid #777;
            transform: scale(1.01);
            box-shadow: 0 0 10px #F50004, 0 0 40px #FF1F22, 0 0 80px #FF3E41;
        }
        .img {
            width: 100%;
            height: 10;
        }
        .desc {
            width: 100%;
            padding: 15px;
            text-align: center;
            font-family: var(--textfont);
            font-weight: 300;
            background: rgba(0,0,0,0.3);
        }
    }
}
</style>

