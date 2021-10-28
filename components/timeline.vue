<template>
   <div id='timeline'>
       <ul class="timeline">
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="flag">Praksis</span>
                        <span class="time-wrapper"><span class="time">2021 - today</span></span>
                    </div>
                    <div class="desc">Begynte på Appex som praksiselev!</div>
                </div>
            </li>
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="flag">VG2</span>
                        <span class="time-wrapper"><span class="time">2021 - today</span></span>
                    </div>
                    <div class="desc">Begynte på Informasjonsteknologi og Media VG2</div>
                </div>
            </li>
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="flag">VG1</span>
                        <span class="time-wrapper"><span class="time">2020 - 2021</span></span>
                    </div>
                    <div class="desc">Begynte på Informasjonsteknologi og Media VG2. Dette året lærte jeg om Photoshop, Illustrator osv</div>
                </div>
            </li>
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="flag">Grunnskole</span>
                        <span class="time-wrapper"><span class="time">2010 - 2020</span></span>
                    </div>
                    <div class="desc">Tja, de første 10 årene med grunnskole i guess</div>
                </div>
            </li>   
        </ul>
   </div>
</template>

<script>
export default {
   template: '<Timeline/>',
   transition: 'slide-bottom'
}
</script>

<style lang="scss" scoped>
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
    }
}
  
.direction-l {
    position: relative;
    width: 300px;
    float: left;
    text-align: right;
    .flag {
        -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        &::before {
            position: absolute;
            top: 50%;
            right: -36px;
            content: ' ';
            display: block;
            width: 12px;
            height: 12px;
            margin-top: -10px;
            background: #333;
            border-radius: 10px;
            border: 1px solid rgb(255,80,80);
            z-index: 10;
        }
        &::after {
            content: "";
            position: absolute;
            left: 100%;
            top: 50%;
            height: 0;
            width: 0;
            margin-top: -8px;
            border: solid transparent;
            border-left-color: rgb(248,248,248);
            border-width: 8px;
            pointer-events: none;
        }
    }
    .time-wrapper {
        float: left;
    }
}
.direction-r {
    position: relative;
    width: 300px;
    float: right;
    .flag {
        -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        &::before {
            position: absolute;
            top: 50%;
            right: -36px;
            content: ' ';
            display: block;
            width: 12px;
            height: 12px;
            margin-top: -10px;
            background: #333;
            border-radius: 10px;
            border: 1px solid rgb(255,80,80);
            z-index: 10;
            left: -36px;
        }
        &::after {
            content: "";
            position: absolute;
            right: 100%;
            top: 50%;
            height: 0;
            width: 0;
            margin-top: -8px;
            border: solid transparent;
            border-right-color: rgb(248,248,248);
            border-width: 8px;
            pointer-events: none;
        }
    }
    .time-wrapper {
        float: right;
    }
    .desc {
        margin: 1em 0 0 0.75em;
    }
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
}
.time {
    display: inline-block;
    padding: 4px 6px;
    background: rgb(248,248,248);
}
.direction-l, .direction-r {
    .desc {
        margin: 1em 0.75em 0 0;
        color: #dddddd;
        font-size: 0.77777em;
        font-style: italic;
        line-height: 1.5em;
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
        .flag::before {
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
    }

    .flag-wrapper {
        text-align: center;
    }

    .flag {
        background: rgb(255,255,255);
        z-index: 15;
    }


    .direction-l .flag:after,
    .direction-r .flag:after {
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

    .time-wrapper {
        display: block;
        position: relative;
        margin: 4px 0 0 0;
        z-index: 14;
    }

    .direction-l .time-wrapper {
        float: none;
    }

    .direction-r .time-wrapper {
        float: none;
    }

    .desc {
        position: relative;
        margin: 1em 0 0 0;
        padding: 1em;
        background: rgb(245,245,245);
        -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
        -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
        box-shadow: 0 0 1px rgba(0,0,0,0.20);
        
        z-index: 15;
    }

    .direction-l .desc,
    .direction-r .desc {
        position: relative;
        margin: 1em 1em 0 1em;
        padding: 1em;
        
        z-index: 15;
    }

    }

    @media screen and (max-width: 660px) {

    .direction-l .desc,
    .direction-r .desc {
        margin: 1em 4em 0 4em;
    }
}
</style>