
<template>
    <div id="app">
        <Navbar/>
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
            <div class="grid">
                <ul id="hexGrid">
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="Photoshop/">
                                <div class="hexImg" style="background-image: url(/images/Photoshop/photoshop1.jpg);"></div>
                                <h1 class="hexTxtTitle orange-fade">Star Wars</h1>
                                <p class="hexTxtDesc">Photoshop Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Unity/Unity1.PNG);"></div>
                                <h1 class="hexTxtTitle orange-fade">By</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Unity/Unity7.PNG);"></div>
                                <h1 class="hexTxtTitle orange-fade">By</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Unity/Unity4.PNG);"></div>
                                <h1 class="hexTxtTitle orange-fade">Lyktestolpe</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Unity/Unity2.PNG);"></div>
                                <h1 class="hexTxtTitle orange-fade">Elv</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Blender/Start2.png);"></div>
                                <h1 class="hexTxtTitle orange-fade">Mynt</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Blender/Start1.png);"></div>
                                <h1 class="hexTxtTitle orange-fade">Ovn</h1>
                                <p class="hexTxtDesc">Unity Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Blender/Start3.png);"></div>
                                <h1 class="hexTxtTitle orange-fade">Gjerde</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Blender/Start4.png);"></div>
                                <h1 class="hexTxtTitle orange-fade">Kiste</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image:url(/images/Blender/Start5.png);"></div>
                                <h1 class="hexTxtTitle orange-fade">Ambolt</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Blender/Start6.png);"></div>
                                <h1 class="hexTxtTitle orange-fade">Flagg</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                    <div class="hexImg" style="background-image: url(/images/Unity/Unity10.PNG);"></div>
                                <h1 class="hexTxtTitle orange-fade">Bro</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="Photoshop/">
                                <div class="hexImg" style="background-image: url(/images/Photoshop/photoshop2.jpg);"></div>
                                <h1 class="hexTxtTitle orange-fade">Space</h1>
                                <p class="hexTxtDesc">Photoshop Prosjekt</p>
                            </a>
                        </div>
                    </li>
                    <li class="hex">
                        <div class="hexIn">
                            <a class="hexLink" href="/project/game">
                                <div class="hexImg" style="background-image: url(/images/Unity/Unity9.PNG);"></div>
                                <h1 class="hexTxtTitle orange-fade">Tårn</h1>
                                <p class="hexTxtDesc">Spill Prosjekt</p>
                            </a>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        <div id="particles-js"></div>
    </div>
</template>

<script src="~assets/js/jquery-3.4.1.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="~assets/js/popper.min.js"></script> 
<script src="~assets/js/bootstrap-4.4.1.js"></script>


<script lang="text/javascript">
const axios = require('axios');


/*const { data } = axios.get('http://localhost:8080/user/arvid');
console.log(data)*/



export default {
    template: '<App/>',
    transition: 'slide-bottom',
    data() {
        return {
            images: []
        }
    },
    mounted() {
    },
    methods: {
        greet() {
            var audio = new Audio("~/pages/speak.wav");
            audio.play();
        }
    }
}

</script>

