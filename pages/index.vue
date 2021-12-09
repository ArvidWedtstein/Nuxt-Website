
<template>
    <div id="app">
        <div class="container-fluid">  
            <!--Jumbotron-->
            <div class="jumbotron jumbotroncustom">
            <!--RGB firkanten som går rundt "Velkommen" boksen-->
                <div class="RGBborder">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p class="display-4 rgb-link unselectable">Welcome</p>
                    <p id="pos" class="lead unselectable">to my website</p>
                </div>
            </div>
            <!--Hexagon layouten med bildene-->
                
            <div class="hexContainer">
                <ul class="hexGrid">
                    <li v-for="(img, i) in images" :key="i" class="hex">
                        <div class="hexIn">
                            <div class="background"></div>
                            <a class="hexLink" href="Photoshop/">
                                <div class="hexImg" v-bind:style="{ backgroundImage: 'url('+ images[i].pathLong +')' }"></div>
                                <h1 class="hexTxtTitle orange-fade">{{i + 1}}</h1>
                                <p class="hexTxtDesc">{{img.pathShort.replace('./', '').substring(0, img.pathShort.length - 6)}}</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <Userreview></Userreview>
        </div>
        <!--<div id="particles-js"></div>-->
    </div>
</template>



<script lang="text/javascript">
const axios = require('axios');
import bcrypt from 'bcryptjs';
import Userreview from '../components/userreview.vue';
import Rating from '../components/rating.vue';

export default {
    name: "App",
    transition: "slide-bottom",
    data() {
        return {
            images: null
        };
    },
    mounted() {
        this.importImg();
        //this.hashPassword("test123")
    },
    methods: {
        async importImg() {
            this.images = [];
            let img = [];
            let r = require.context("~/static/images/Photoshop/", true, /\.(jpg|png|PNG)\b/);
            let r2 = require.context("~/static/images/Unity/", true, /\.(jpg)\b/);
            await r.keys().forEach(key => (img.push({ pathLong: r(key), pathShort: key })));
            await r2.keys().forEach(key => (img.push({ pathLong: r2(key), pathShort: key })));
            for (let i = 0; i < 14; i++) {
                const random = Math.floor(Math.random() * img.length);
                this.images.push(img[random]);
                img.splice(random, 1);
            }
            //console.log(this.images)
        },
        /*async hashPassword(password) {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            var res = {
                password: password,
                salt: salt,
                hash: hash
            }
            console.table(res)
            return {
                salt: salt,
                hash: hash,
            };
        }*/
    },
    components: { Userreview, Rating }
}

</script>

<style lang="scss">
$hex-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
$colorpalette: (
    "moonlit": linear-gradient(to right, #0f2027, #203a43, #2c5364),
    "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
    "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
    "meridian": linear-gradient(45deg, #283c86, #45a247)
);
@function gradientscheme($color) {
    @return map-get($colorpalette, $color);
}
#app {
    margin-top: 2rem;
}
/*Hex Layout*/
.hexContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .hexGrid {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        width: 90%;
        margin: 0 auto;
        //overflow: hidden;
        font-family: sans-serif;
        list-style-type: none;
        height: 100%;
        /*Hexagon bildene*/
        .hex {
            position: relative;
            visibility:hidden;
            outline: 1px solid transparent;
            transition: all 0.5s;
            backface-visibility: hidden;
            
            will-change: transform;
            p {
                color: #ffffff;
            }
            &::after {
                content:'';
                display:block;
                padding-bottom: 86.602%;
                
            }
            /*Formen av hexagonene*/
            .hexIn {
                position: absolute;
                width:96%;
                padding-bottom: 110.851%; 
                overflow: hidden;
                visibility: hidden;
                outline:1px solid transparent;
                transition: all 0.5s;
                margin: calc(-1*var(--hl)) 0;
                //transform: scale(.95);
                clip-path: $hex-clip-path;
                &:hover {
                    .hexImg::before, .hexImg::after, .hexLink {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                }
            }
            .background {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: gradientscheme("moonlit");
                background-size: 100% 150%;
            }
            .hexIn * {
                position: absolute;
                visibility: visible;
                outline:1px solid transparent; 
                transition: all 0.5s;
            }
            .hexLink {
                display:block;
                width: 100%;
                height: 100%;
                text-align: center;
                color: #fff;
                overflow: hidden;
                &:hover, &:focus {
                    h1, p {
                        opacity:1;
                        transition: 0.5s;
                        font-weight: 50;
                    }
                }
            }    
            h1, p {
                width: 100%;
                padding: 5%;
                box-sizing: border-box;
                font-weight: 300;
                opacity: 0;
            }
            h1::before, h1::after {
                display: inline-block;
                margin: 0 0.5em;
                width: 0.55em;
                height: 0.03em;
                background: #ffffff;
                content: '';
                vertical-align: middle;
                transition: all 0.3s;
                text-align:center;
            }
            .hexTxtTitle {
                color: #F5CE95;
                text-transform: capitalize;
                text-align: center;
                bottom: 50%;
                padding-top:50%;
                font-size: 1.5em;
                z-index: 1;
            }
            .hexTxtDesc {
                top: 50%;
                text-align: center;
                text-transform: uppercase;
            }
            .hexImg {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-position: center center;
                background-size: cover;
                overflow: hidden;
                --hl: 0;
                width: 100%; 
                height: 100%;
                filter: brightness(1);
                transition: 0.7s;
                &::before {
                    background: rgba(2, 65, 92, 0.3);
                }
                &::after {
                    background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5), transparent);
                }
                &::before, &::after {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    content: '';
                    opacity: 0;
                    transition: all 0.3s;
                    
                }
            }
        }
    }
}

.orange-fade {
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 100; 
    background: -webkit-linear-gradient(#ff9000,#F5CE95);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
/*Media funksjonene til hex bilde layouten. Dette er funksjonene som gjør dem responsive når skjermstørrelsen blir mindre eller større*/
@media (min-width:1201px) { 
  #hexGrid{
    padding-bottom: 4.4%
  }
  .hex {
    width: 20%;
  }
  .hex:nth-child(9n+6){ 
    margin-left:10%; 
  }
}

@media (max-width: 1200px) and (min-width:901px) {
  #hexGrid{
    padding-bottom: 5.5%;
    font-size: 13px;
  }
  .hex {
    width: 25%;
  }
  .hex:nth-child(7n+5){ 
    margin-left:12.5%; 
  }
}

@media (max-width: 900px) and (min-width:601px) { 
  #hexGrid{
    padding-bottom: 7.4%;
    font-size: 14px;
  }
  .hex {
    width: 33.333%; 
  }
  .hex:nth-child(5n+4){ 
    margin-left:16.666%; 
  }
}

@media (max-width: 600px) { 
  #hexGrid{
    padding-bottom: 11.2%;
    font-size: 12px;
  }
  .hex {
    width: 50%;
  }
  .hex:nth-child(3n+3){ 
    margin-left:25%; 
  }
}

@media (max-width: 400px) {
    #hexGrid {
        font-size: 8px;
    }
}

</style>