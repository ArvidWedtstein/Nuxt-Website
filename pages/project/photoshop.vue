
<template>
    <div id="photoshop">
        <div class="container-fluid">  
            <div id="jumbo" class="jumbotron">
                <h1 class="display-4">Photoshop</h1>
                <p class="lead">Bilder.</p>
                <p class="lead"></p>
                <hr class="my-4">
            </div>
            <!--https://codepen.io/william-goldsworthy/pen/JzVajj - cards -->
            <div class="photoset">
                <a v-for="(value, i) in images" :key="i" :href="value.longPath" target="_blank" class="photo" :style="'background-image:url(' + value.pathLong + ')'"></a>
            </div>
            <!--<div class="row">
                <div class="col-xl-3" v-for="(value, i) in images" :key="i">
                    <div class="psresponsive">
                        <div class="contentBox">
                            <a target="_blank" v-bind:href="value.pathShort">
                            <img v-bind:src="value.pathLong" v-bind:alt="value.pathShort" class="img-fluid">
                            </a>
                            <div class="content">
                                <p class="desc title">{{descriptions[value.pathShort]}}</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>-->
        </div>
    </div>
</template>


<script lang="text/javascript">


export default {
  
    template: '<Photoshop/>',
    transition: 'slide-bottom',
    data() {
        return {
            images: null,
            descriptions: null
        }
    },
    mounted() {
        this.importAll(require.context('~/static/images/Photoshop/', true, /\.jpg$/))
    },
    methods: {
        async importAll(r) {
            this.images = [];
            this.descriptions = [];
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            let description = {
                './photoshop1.jpg': {description: "Star Wars"},
                './photoshop2.jpg': {description: "Space"},
                './photoshop3.jpg': {description: "Mars"},
                './photoshop4.jpg': {description: "Avatar"},
                './photoshop5.jpg': {description: "Stein"}
            };
        
            const content = await this.$content('photoshop').fetch();
            this.descriptions = content;
            const shuffledArray = this.images.sort((a, b) => 0.5 - Math.random());
            this.images = shuffledArray;
        }
    }
}
</script>
<style lang="scss">
/* Photoshop page pscards */
.psresponsive {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.2), 
        inset -5px -5px 15px rgba(255,255,255,0.1), 
        5px 5px 15px rgba(0,0,0,0.3),
        -5px -5px 15px rgba(255,255,255,0.1);
    border-radius: 1rem;
    min-height: 1px;
    display: flex;
    align-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    transition: 0.3s;
    position: relative;
    margin: 0 auto;
    &:hover {
        transform: scale(1.01);
    }
    .contentBox {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        display: flex;
        border-radius: 1rem;
        padding: 0.5rem 0.5rem;
        .content {
            position: absolute;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            transition: 0.3s;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5); 
            padding: 1.5rem;
            margin: 0 auto;
            width: 100%;
            img {
                height: 10;
                border-radius: 1rem;
                width: 100%;
                max-width: 100%;
                align-content: center;
                vertical-align: middle;
            }
            .desc {
                text-align: center;
                text-transform: uppercase;
                font-weight: 800;
                font-size: 1.3em;
                letter-spacing: 1px;
            }
        }
    }
}
div.photoset {
    padding: 2px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: #192D40;
    max-width: 70%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .photo {
        position: relative;
        flex-grow: 1; //They will fill space but actually want to take up the smallest space possible doing it, so you just need to stop it getting too small with min-width (otherwise they all bunch on the same line)
        min-width: calc(100% / 3); //This is the maximum number (3) in a row bit
        background-size: cover;
        background-position: center;
        
        @media screen and (max-width: 700px) {
            min-width: calc(100% / 2); //As simple as this for responsiveness without a delay you would get with JavaScript
        }
        @media screen and (max-width: 460px) {
            min-width: 100%;
        }
        &:after {
            //Aspect Ratio
            padding-top: 83.33333%; //For 5:6 height to width ratio
            display: block;
            content: "";
        }
        &:before {
            //Gaps
            z-index: 2;
            position: absolute;
            content: "";
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            box-shadow: inset 0 0 0 2px #ffffff; //Cheaty way to make it look like there are gaps 😜
        }
        &:nth-child(1) {
            //Make first image big
            width: 100%;
        }
    }

    &.square .photo:after {
        padding-top: 100%;
    }
    &.portrait .photo:after {
        padding-top: 120%;
    }
}
</style>
