<template>
   <div id='timeline'>
       <ul class="timeline">
            <li v-for="(event, i) in timeline" :key="i">
                <div :class="{'direction-l': i % 2 === 0, 'direction-r': i % 2 !== 0}">
                    <div class="flag-wrapper">
                        <span class="flag">{{event.message}}</span>
                        <span class="time-wrapper"><span class="time">{{date(event.date)}}<span v-if="event.dateend"> - {{event.dateend}}</span></span></span>
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
        timeline: ''
    },
    data() {
        return {
            
        }
    },
    methods: {
       date(date) {
           //console.log(date)
           let t = moment(date).format('DD/MM/YYYY HH:mm')
           if (!moment(date).isValid()) {
               t = date;
           }
           return t;
       }
    },
    mounted() {

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
.timeline {
    position: relative;
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 1em 0;
    list-style-type: none;
    &::before {
        position: absolute;
        left: 50%;
        top: 0;
        content: ' ';
        display: block;
        width: 6px;
        height: 100%;
        margin-left: -3px;
        background: linear-gradient(colorscheme('cyan'), colorscheme('lightblue'));
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
            color: colorscheme('darkblue');
            vertical-align: middle;
            .time {
                display: inline-block;
                padding: 4px 8px;
                background: colorscheme('white');
            }
        }
        .direction-l,
        .direction-r {
            position: relative;
            width: 300px;
            .flag {
                background: colorscheme('blue');
                outline: none;   
                color: colorscheme('white');
                box-shadow: 0 0 0 4px colorscheme('darkblue'), 0 0 0 5px lighten($color: colorscheme('darkblue'), $amount: 2), inset 0 0 10px darken($color: colorscheme('darkblue'), $amount: 100), 0 5px 20px rgb(0 0 0 / 50%), inset 0 0 15px rgb(0 0 0 / 20%);
                &::before { // Dots in centerline
                    content: "";
                    position: absolute;
                    top: 50%;
                    display: block;
                    width: 12px;
                    height: 12px;
                    background: linear-gradient(0deg, colorscheme('darkblue'), colorscheme('cyan'));
                    border-radius: 20px;
                    box-shadow: 0 0 0 1px colorscheme('darkblue');
                    transition: 0.5s;
                    z-index: 10;
                }
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
                color: colorscheme('white');
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
                &::after { // arrows left
                    left: 103%;
                    border-left-color: colorscheme('darkblue');
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
                &::after { // arrows right
                    right: 103%;
                    border-right-color: colorscheme('darkblue');
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
        display: none;
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
                    border-radius: 10px;
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
                    border-width: 8px;
                    pointer-events: none;
                }
            }
            .time-wrapper {
                // display: block;
                display: none;
                position: relative;
                margin: 4px 0 0 0;
                z-index: 14;
                float: none;
            }
            .desc {
                position: relative;
                margin: 1em 1em 0 1em;
                padding: 1em;
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