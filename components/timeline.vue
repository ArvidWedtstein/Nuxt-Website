<template>
   <div id='timeline'>
       <ul :key="timeline" class="timeline">
            <li v-for="(event, i) in timeline" :key="event">
                <div :class="{'direction-l': i % 2 === 0, 'direction-r': i % 2 !== 0}">
                    <div class="flag-wrapper">
                        <span class="flag">{{event.message}}</span>
                        <span class="time-wrapper"><span class="time">{{event.date}}</span></span>
                    </div>
                    <div class="desc">{{event.description}}</div>
                </div>
            </li>
        </ul>
   </div>
</template>

<script>

const axios = require('axios');
const moment = require('moment');
export default {
    template: '<Timeline/>',
    transition: 'slide-bottom',
    props: {
        timeline: String
    },
    data() {
        return {
            
        }
    },
    methods: {
       
    },
    mounted() {

    }
}
</script>

<style lang="scss">
$rainbow-grad0: linear-gradient(0deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
.timeline {
    position: relative;
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 1em 0;
    list-style-type: none;
    color: #333333;
    &::before {
        position: absolute;
        left: 50%;
        top: 0;
        content: ' ';
        display: block;
        width: 6px;
        height: 100%;
        margin-left: -3px;
        background: $rainbow-grad0;
        z-index: 5;
    }
    li {
        padding: 1em 0;
        &::after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
        .flag-wrapper {
            position: relative;
            display: inline-block;
            text-align: center;
            .flag {
                position: relative;
                display: inline;
                background: rgb(248,248,248);
                padding: 6px 10px;
                border-radius: 5px;
                font-weight: 600;
                text-align: left;
            }
        }
        .time-wrapper {
            display: inline;
            line-height: 1em;
            font-size: 0.66666em;
            color: rgb(250,80,80);
            vertical-align: middle;
            .time {
                display: inline-block;
                padding: 4px 8px;
                background: rgb(248,248,248);
            }
        }
        .direction-l,
        .direction-r {
            position: relative;
            width: 300px;
            .flag {
                /*-webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
                -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
                box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);*/
                background: linear-gradient(0deg, #333, #000);
                outline: none;   
                color: #dddddd;
                box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px black, 0 5px 20px rgb(0 0 0 / 50%), inset 0 0 15px rgb(0 0 0 / 20%);
                /*&::before {
                    position: absolute;
                    top: 50%;
                    content: '';
                    display: block;
                    width: 12px;
                    height: 12px;
                    margin-top: -10px;
                    background: #333;
                    border-radius: 10px;
                    border: 1px solid rgb(255,80,80);
                    z-index: 10;
                }*/
                /*&::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    height: 0;
                    width: 0;
                    margin-top: -8px;
                    border: solid transparent;
                    border-width: 8px;
                    pointer-events: none;
                }*/
                &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    display: block;
                    width: 12px;
                    height: 12px;
                    background: linear-gradient(0deg, #000, #6b6b6b);
                    border-radius: 20px;
                    box-shadow: 0 0 0 1px #232323;
                    transition: 0.5s;
                    z-index: 10;
                }
                /*&::after {
                    content: "";
                    position: absolute;
                    top: calc(50% - 2px);
                    width: 4px;
                    height: 4px;
                    background: linear-gradient(0deg, #6b6b6b, #000);
                    border-radius: 50%;
                    transition: 0.5s;
                }*/
                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    height: 0;
                    width: 0;
                    margin-top: -8px;
                    border: solid transparent;
                    border-width: 8px;
                    pointer-events: none;
                }
            }
            .desc {
                margin: 1em 0.75em 0 0;
                color: #dddddd;
                font-size: 0.77777em;
                font-style: italic;
                line-height: 1.5em;
            }
        }
        .direction-l {
            float: left;
            text-align: right;
            .flag {
                &::before {
                    right: -36px;
                }
                &::after {
                    left: 103%;
                    border-left-color: #333;
                    //left: 100%;
                    //border-left-color: rgb(248,248,248);
                }
            }
            .time-wrapper {
                float: left;
            }
        }
        .direction-r {
            float: right;
            text-align: left;
            .flag {
                &::before {
                    left: -36px;
                }
                &::after {
                    //right: 100%;
                    //border-right-color: rgb(248,248,248);
                    right: 103%;
                    border-right-color: #333;
                }
            }
            .time-wrapper {
                float: right;
            }
            
        }
    }
}
@media screen and (max-width: 660px) {
    .timeline {
        width: 100%;
        padding: 4em 0 1em 0;
        li {
            padding: 2em 0;
        }
    }
    .direction-l,
    .direction-r {
        float: none;
        width: 100%;
        text-align: center;
        .flag-wrapper {
            text-align: center;
            .flag {
                background: rgb(255,255,255);
                z-index: 15;
                &::before {
                    position: absolute;
                    top: -30px;
                    left: 50%;
                    content: ' ';
                    display: block;
                    width: 12px;
                    height: 12px;
                    margin-left: -9px;
                    background: #fff;
                    border-radius: 10px;
                    border: 4px solid rgb(255,80,80);
                    z-index: 10;
                }
                &::after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: -8px;
                    height: 0;
                    width: 0;
                    margin-left: -8px;
                    border: solid transparent;
                    border-bottom-color: rgb(255,255,255);
                    border-width: 8px;
                    pointer-events: none;
                }
            }
            .time-wrapper {
                display: block;
                position: relative;
                margin: 4px 0 0 0;
                z-index: 14;
                float: none;
            }
            .desc {
                position: relative;
                margin: 1em 1em 0 1em;
                padding: 1em;
                background: rgb(245,245,245);
                -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
                -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
                box-shadow: 0 0 1px rgba(0,0,0,0.20);
                z-index: 15;
            }
        }
    }
}
@media screen and (max-width: 660px) {
    .direction-l .desc,
    .direction-r .desc {
        margin: 1em 4em 0 4em;
    }
}
</style>