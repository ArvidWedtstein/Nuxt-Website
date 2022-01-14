<template>
   <div id='commingsoon'>
        <div class="bgimg" :style="`background-image: url(${ img.pathLong })`">
            <div class="topleft">
                <img src="/images/logo.svg" width="50">
            </div>
            <div class="middle">
                <h1>COMING SOON</h1>
                <hr>
                <p>{{ daysRemaining(releasedate) }} days left</p>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="bottomleft">
                <p>{{ name }}</p>
            </div>
        </div>
   </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'commingsoon',
    transition: 'slide-bottom',
    props: {
        releasedate: "",
        name: "",
        
    },
    data() {
        return {
            img: ""
        }
    },
    methods: {
        daysRemaining(date) {
            var daycurrent = moment(Date.now()).format("DD.MM.YYYY");
            var todaysDate = moment(daycurrent, "DD.MM.YYYY");
            var eventDate = moment(date, "DD.MM.YYYY");
            return eventDate.diff(todaysDate, 'days');
        },
        async importImg(r) {
            let images = [];
            await r.keys().forEach(key => (images.push({ pathLong: r(key), pathShort: key })));
            const random = Math.floor(Math.random() * images.length);
            this.img = images[random]
            console.log(this.img)
        }
    },
    mounted() {
        this.importImg(require.context('~/static/images/Unity/', true, /\.jpg$/))
    }
} 
</script>
<style lang="scss" scoped>
#commingsoon {
    z-index: 0;
    height: 100%;
    margin-top: 8rem;
    .bgimg {
        z-index: -2;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: center;
        background-size: cover;
        position: absolute;
        color: white;
        font-family: "Courier New", Courier, monospace;
        font-size: 25px;
    }
    .topleft {
        position: absolute;
        top: 130px;
        left: 16px;
    }
    .bottomleft {
        position: absolute;
        bottom: 0;
        left: 16px;
    }
    .middle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    hr {
        margin: auto;
        width: 40%;
    }
}
</style>