
<template>
    <div v-bind:class="{shake: ragemode2}" id="about">
        <Navbar/>
        <div class="container-fluid">	
            <div class="row aboutbackground">
                <div class="col-xl-6 about">
                    <div class="text">
                        <div class="jumbotron">
                            <h1 class="display-4">Well, Hello there</h1>
                            <p class="lead">My name is Arvid Wedtstein</p>
                            <hr class="my-4">
                            <p>I currently study: Informationteknology and Media<br>Age: 17<br>I'm interested in: 3D-Design, Game development<br><br>Progamming languages/Framework:</p>
                            <div class="icon-bar icons">
                                <i class="python fab fa-python"></i>
                                <i class="js fab fa-js-square"></i>
                                <i class="html fab fa-html5"></i>
                                <i class="css fab fa-css3-alt"></i>
                                <i class=" sass fab fa-sass"></i>
                                <i class="vue fab fa-vuejs"></i>
                                <i class="ubuntu fab fa-ubuntu"></i>
                            </div>
                            <br>
                            <div class="icon-bar social">
                                <!--<a href="https://www.facebook.com/profile.php?id=100022120962542" target="_blank animate__bounceIn" class="facebook"><i class="fa fa-facebook"></i></a>--> 
                                <a href="https://github.com/ArvidWedtstein" target="_blank" class="github animate__bounceIn"><i class="fab fa-github"/></a> 
                                <!--<a href="https://twitter.com/ArvidWedtstein" target="_blank" class="twitter animate__bounceIn"><i class="fa fa-twitter"></i></a> 
                                <a href="https://www.twitch.tv/bass_gamer03" target="_blank" class="twitch animate__bounceIn"><i class="fa fa-twitch"></i></a> 
                                <a href="https://steamcommunity.com/id/arviwed/" target="_blank" class="steam animate__bounceIn"><i class="fa fa-steam"></i></a>-->
                                <a href="https://discord.gg/5hMtxNW" target="_blank" class="discord animate__bounceIn"><i class="fab fa-discord"/></a> 
                                <a href="https://www.linkedin.com/in/arvid-wedtstein-7498a21b7" target="_blank" class="linkedin animate__bounceIn"><i class="fab fa-linkedin"/></a>
                                <a href="../CV/" class="cv animate__bounceIn">CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 about">
                    <div class="aboutMe col-md-10">
                        <!--Unsavable image-->
                        <button style="background: none; border:none; outline: none;" v-on:click="play"><object id="profile" v-bind:class="{shake: ragemode}" class="card-img" data="/images/profilePicture.png"></object></button>
                        <audio ref="audioElm" src="/lefishe.mp3"></audio>
                        <!--<img  class="" src="/images/profilePicture.png" alt="Profil">-->
                    </div>
                </div>
                <div class="col-xl-12 about">
                    <Timeline/>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="text/javascript">

export default {
    template: '<about/>',
    transition: 'slide-bottom',
    key(route) {
        return route.fullPath
    },
    data() {
        return {
            ragemode: false,
            ragemode2: false,
        }
    },
    methods: {
        play: function(event) {
            this.$refs.audioElm.play();
            this.ragemode = true;
            setTimeout(() => {
                this.ragemode2 = true;
            }, 9000);
        }
    }
}
</script>

