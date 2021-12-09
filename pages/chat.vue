
<template>
    <div id="chat">
        <div class="container-fluid">	
            <textarea>Chat</textarea>
        </div>
    </div>
</template>


<script lang="text/javascript">
const axios = require('axios');
const { io } = require('socket.io-client')
const moment = require('moment');
export default {
    name: "chat",
    transition: 'slide-bottom',
    key(route) {
        return route.fullPath
    },
    data() {
        return {
            messages: []
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
        chat() {
            const socket = io("ws://localhost:6969");

            socket.on("connect", () => {

            // or with emit() and custom event names
            socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
            });

            // handle the event sent with socket.send()
            socket.on("message", data => {
            console.log(data);
            });

            // handle the event sent with socket.emit()
            socket.on("greetings", (elem1, elem2, elem3) => {
            console.log(elem1, elem2, elem3);
            });
        }
    },
    mounted() {
        //this.chat()
    },
    computed: {
        
    }
}
</script>
<style lang="scss" scoped>
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