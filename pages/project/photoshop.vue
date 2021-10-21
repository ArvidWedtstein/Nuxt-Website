
<template>
    <div id="photoshop">
        <Navbar/>
        <div class="container-fluid">  
            <div id="jumbo" class="jumbotron">
                <h1 class="display-4">Photoshop</h1>
                <p class="lead">Bilder.</p>
                <p class="lead"></p>
                <hr class="my-4">
            </div>
            <!--https://codepen.io/william-goldsworthy/pen/JzVajj - cards -->
            <!--https://codepen.io/lamchang/pen/PQGQyR - card -->
            <!--<div class="photoset">
                <a href="/images/Photoshop/photoshop1.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop1.jpg)" ></a>
                <a href="/images/Photoshop/photoshop2.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop2.jpg)"></a>
                <a href="/images/Photoshop/photoshop3.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop3.jpg)"></a>
                <a href="/images/Photoshop/photoshop4.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop4.jpg)"></a>
                <a href="/images/Photoshop/photoshop5.png" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop5.png)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/c62c2379b7fc2c16b0bc3c9efcc915ac/tumblr_p773r1ugkd1wd32uro6_400.jpg)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/ea9fe77f480a5328eb81335847cb711f/tumblr_p773r1ugkd1wd32uro7_400.jpg)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/470e6d187709ee3ecd0b1c71a287adc6/tumblr_p773r1ugkd1wd32uro8_400.png)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/b5f5d5705000bf45b6f8903222bcba8d/tumblr_p773r1ugkd1wd32uro9_400.jpg)"></a>
            </div>-->
            <div class="row">
                <div class="col-xl-4" v-for="(value) in images" :key="value">
                    <div class="psresponsive">
                        <div class="contentBox">
                            <a target="_blank" v-bind:href="value.pathShort">
                            <img v-bind:src="value.pathLong" v-bind:alt="value.pathShort" class="img-fluid">
                            </a>
                            <div class="content">
                                <p class="desc">{{descriptions[value.pathShort]}}</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
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
        }
    }
}


</script>

