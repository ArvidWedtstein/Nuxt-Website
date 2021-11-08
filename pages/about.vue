
<template>
    <div v-bind:class="{shake: ragemode2}" id="about">
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
                        <button class="profileimage" v-on:click="play"><object id="profile" v-bind:class="{shake: ragemode}" data="/images/profilePicture.png"></object></button>
                        <audio ref="audioElm" src="/lefishe.mp3"></audio>
                        <!--<img  class="" src="/images/profilePicture.png" alt="Profil">-->
                    </div>
                </div>
                <div class="col-xl-12 about">
                    <Timeline :timeline="timeline"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="text/javascript">
const axios = require('axios');
const moment = require('moment');
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
            timeline: [
                {
                    message: "Praksis",
                    description: "Begynte på Appex som praksiselev!",
                    date: "2021 - today"
                },
                {
                    message: "VG2",
                    description: "Begynte på Informasjonsteknologi og Media VG2",
                    date: "2021 - today"
                },
                {
                    message: "VG1",
                    description: "Begynte på Informasjonsteknologi og Media VG1. Dette året lærte jeg om Photoshop, Illustrator osv",
                    date: "2020 - 2021"
                },
                {
                    message: "Grunnskole",
                    description: "Tja, de første 10 årene med grunnskole i guess",
                    date: "2010 - 2020"
                }
            ]
        }
    },
    methods: {
        play: function(event) {
            this.$refs.audioElm.play();
            this.ragemode = true;
            setTimeout(() => {
                this.ragemode2 = true;
            }, 9000);
        },
    },
    mounted() {

    }
}
</script>
<style lang="scss" scoped>

.profileimage {
    position: relative;
    transition: 0.5s;
    padding: 2rem;
    background: url('/images/UI/PlayerAvatarUI.png');
    background-size: cover;
    background-position: center;
    outline: none;
    border: none;
    border-radius: 50%;
    &:hover {
        background-size: 110%;
        transform: scale(1.1);
        box-shadow: inset -5px -5px 10px rgba(255,255,255,0.05),
            inset 5px 5px 15px rgba(0,0,0,0.5);
    }
    #profile {
        border-radius: 50%;
        //background: transparent;
        mask-image: -webkit-gradient(linear, top, bottom, 
        color-stop(0.00,  rgba(0,0,0,1)),
        color-stop(0.35,  rgba(0,0,0,1)),
        color-stop(0.50,  rgba(0,0,0,0)),
        color-stop(0.65,  rgba(0,0,0,0)),
        color-stop(1.00,  rgba(0,0,0,0)));
    }
}

/* About Me page */
.about { 
    &:first-child {
        background: #333333;
        clip-path: polygon(0% 0%, 0% 100%, 90% 100%, 100% 0% );
    }
    &:nth-child(2) {
        //background: #333333; 
        padding: 6rem;
        background: none; 
        clip-path: polygon(10% 0%, 0% 100%, 100% 100%, 100% 0%);
    }
}
.text .aboutMe {
    background: none;
	text-align: left;
	display: -ms-flexbox;
  	display: flex;
	position: relative;
	padding-left: 0rem;
	font-size: 5rem;
}


@media (max-width: 992px) {
	.text .aboutMe {
		font-size: 20px;
		text-align: center;
		float: left;
		padding: 0;
	}
}

 /* About Me link bar */
 .icon-bar {
    $iconcolors: (
        "facebook":#3B5998,
        "twitter":#55ACEE,
        "twitch": rgba(145, 71, 255, 0.9),
        "discord": #8697F6,
        "github": #333333,
        "steam": #173e58,
        "linkedin":#007bb5,
        "cv": #009bb5,
        "js": #EFD81D,
        "html": #D84B24,
        "css": #3492CB,
        "sass": #C45F92,
        "vue": #49B180,
        "ubuntu": #D24413,
        "python": #dddddd
    );
    &.social {
        font-size: 1.3rem;
        & > * {
            border-radius: 30% 30%;
            opacity: 0.7;
            @each $color, $value in $iconcolors {
                &.#{$color}  {
                    background: $value;
                    color: white;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,5.2);
                }
            }
            &:hover {
                box-shadow: none;
                font-size: 1.8rem;
                /*color: #333333;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;*/
            }
        }
    }
    &.icons {
        font-size: 1.8rem;
        opacity: 1;
        & > * {
            @each $color, $value in $iconcolors {
                &.#{$color}  {
                    //background: url('/images/UI/UIPanel.png');
                    //background-size: cover;
                    color: $value;
                    border: 1mm outset $value;
                }
            }
            &:hover {
                opacity: 1;
            }
        }
    }
    & > * {
        justify-content: center;
        align-items: center;
        display: inline-flex;
        align-items: center;
        align-content: center;
        vertical-align: middle;
        -webkit-transition: all 0.5s ease-in-out;
        text-align: center;
        border: 1px solid transparent;
        padding: 1rem;
        width: 4rem;
        height: 4rem;
        transition: all 0.3s ease;
        margin: 5px 2px;
        line-height: 4rem;
        position: relative;
    }
}

</style>