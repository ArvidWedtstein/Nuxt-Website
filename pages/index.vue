
<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light"> <a href="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px;filter: contrast(200%);" src="~static/images/ArvidLogo.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav mr-auto">
                    <!-- Hjem knapp i navigeringslinjen på toppen-->
                    <li class="nav-item"> 
                        <a class="nav-link active" href="../" id="hometab" aria-controls="home" aria-expanded="true">Home</a> 
                    </li>
                    <li class="nav-item"> 
                        <a class="nav-link" href="about/">Om Meg</a> 
                    </li>
                    <!-- Dropdown -->
                    <li class="nav-item dropdown"> 
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false">Prosjekter</a>
                        <div class="dropdown-menu"> 
                            <a class="dropdown-header" href="./Project/">Alle Prosjekter</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="./Spill/">Spill</a>
                            <!--<a class="dropdown-item" href="../IMcity/">IM City</a>-->
                            <a class="dropdown-item" href="./3D-Print/">3D</a>
                            <a class="dropdown-item" href="./Photoshop/">Photoshop</a>
                        </div>
                    </li>
                    
                    <!--Kontaktside-->
                    <li class="nav-item"> 
                        <a class="nav-link" href="contact/" id="contact1" aria-controls="contacttab" aria-expanded="true">Kontakt</a> 
                    </li>
                </ul>
            </div>
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item active"><a href="../">Hjem</a></li>
          </ol>
        </nav>
        <div class="container-fluid">  
            <!--Jumbotron-->
            <div class="jumbotron">
            <!--RGB firkanten som går rundt "Velkommen" skiltet-->
                <div class="RGBborder">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p class="display-4 unselectable">Velkommen</p>
                    <p id="pos" class="lead unselectable">Til min nettside</p>
                </div>
            </div>
            <!--Hexagon layouten med bildene-->
            <div class="grid">
                <ul id="hexGrid">
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Photoshop/">
                        <div class="hexImg" style="background-image: url(~static/images/Photoshop/photoshop1.jpg);"></div>
                        <h1 class="hexTxtTitle">Star Wars</h1>
                        <p class="hexTxtDesc">Photoshop Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                        <a class="hexLink" href="Spill/">
                            <div class="hexImg" style="background-image: url(~static/images/Unity/Unity1.PNG);"></div>
                            <h1 class="hexTxtTitle">By</h1>
                            <p class="hexTxtDesc">Spill Prosjekt</p>
                        </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Unity/Unity7.PNG);"></div>
                        <h1 class="hexTxtTitle">By</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Unity/Unity4.PNG);"></div>
                        <h1 class="hexTxtTitle">Lyktestolpe</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Unity/Unity2.PNG);"></div>
                        <h1 class="hexTxtTitle">Elv</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                    <div class="hexImg" style="background-image: url(~static/images/Blender/Start2.png);"></div>
                        <h1 class="hexTxtTitle">Mynt</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Blender/Start1.png);"></div>
                        <h1 class="hexTxtTitle">Ovn</h1>
                        <p class="hexTxtDesc">Unity Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Blender/Start3.png);"></div>
                        <h1 class="hexTxtTitle">Gjerde</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Blender/Start4.png);"></div>
                        <h1 class="hexTxtTitle">Kiste</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image:url(~static/images/Blender/Start5.png);"></div>
                        <h1 class="hexTxtTitle">Ambolt</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                    <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Blender/Start6.png);"></div>
                        <h1 class="hexTxtTitle">Flagg</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                      <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                            <div class="hexImg" style="background-image: url(~static/images/Unity/Unity10.PNG);"></div>
                        <h1 class="hexTxtTitle">Bro</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                    <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Photoshop/">
                        <div class="hexImg" style="background-image: url(~static/images/Photoshop/photoshop2.jpg);"></div>
                        <h1 class="hexTxtTitle">Space</h1>
                        <p class="hexTxtDesc">Photoshop Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(~static/images/Unity/Unity9.PNG);"></div>
                        <h1 class="hexTxtTitle">Tårn</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                </ul>
                  </div>
                </div>
            <!--Et sidepanel som gir hurtigtilgang til prosjektene. Kommer til syne når man klikker på logoen i øverste venstre hjørne-->
            <div id="prosjektSidepanel" class="QuickAccessProsjektPanel">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <!--Her laget jeg en rad for at objektene skal ligge under hverandre-->
                <div class="row">
                    <div class="card col-xl-12">
                        <div class="card-body">
                            <div class="card-inner">
                                <a class="spill" href="Spill/"><img class="card-img-top" src="~static/images/Wolf.svg" alt="Spill"></a>
                                <h5 class="card-title">Spill</h5>
                                <a class="spill" href="Spill/"><p class="card-text">Et spill jeg holder på å programmere og designe for tiden</p></a>
                            </div> 
                        </div>
                    </div>
                      <div class="card col-xl-12"> 
                            <div class="card-body">
                    <div class="card-inner">
                    <a class="spill" href="IMcity/"><img class="card-img-top" src="~static/images/IMcity/imcity5.jpg" alt="IM city"></a>
                            <h5 class="card-title">IM City</h5>
                            <a class="modell" href="IMcity/"><p class="card-text">Prosjekt i YFF</p></a>
                        </div> 
                      </div>
                          </div>
                    <div class="card col-xl-12">
                    <div class="card-body">
                    <div class="card-inner">
                    <a class="spill" href="3D-Print/"><img class="card-img-top" src="~static/images/3dprint.png" alt="3D"></a>
                            <h5 class="card-title">3D Print</h5>
                            <a class="modell" href="3D-Print/"><p class="card-text">3D Modeller</p></a>
                        </div> 
                      </div>
                      </div>
                  <div class="card col-xl-12">
                    <div class="card-body">
                    <div class="card-inner">
                    <a class="spill" href="Photoshop/"><img class="card-img-top" src="~static/images/Photoshop/photoshop3.jpg" alt="Photoshop"></a>
                            <h5 class="card-title">Photoshop</h5>
                            <a class="modell" href="Photoshop/"><p class="card-text">Photoshop bilder</p></a>
                        </div> 
                      </div>
                      </div>
                  </div>
            </div>
            <div id="particles-js"></div>
    </div>
</template>
<script src="js/jquery-3.4.1.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/popper.min.js"></script> 
<script src="js/bootstrap-4.4.1.js"></script>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> 
<script type="text/javascript">

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff0000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": {
            "value": ["#03a9f4", "#f441a5", "#ffeb3b", "#03a9f4"]
        },
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff0000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


// must be ran after Particles.js' own anim loop has began
// se we are always pushed after their drawings
requestAnimationFrame( anim );
function anim() {
  ctx.fillStyle = grad;
  ctx.globalCompositeOperation = "source-atop";
ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
  ctx.globalCompositeOperation = "source-over";
  requestAnimationFrame( anim );
}
const ctx = document.querySelector('#particles-js > canvas').getContext('2d');
let grad;
onresize();
addEventListener('resize', onresize);

function onresize() {
    grad= ctx.createLinearGradient(0,0,ctx.canvas.width, ctx.canvas.height);
    grad.addColorStop(0.1,'#ff0000');
    grad.addColorStop(0.25, '#FFA500')
    grad.addColorStop(0.50, '#00FF00')
    grad.addColorStop(0.75, '#4BFFFF')
    grad.addColorStop(1, '#FF00FF');
}


function openNav() {
	//Vis skjermbredden er mindre enn 800px så sett bredden på prosjektsidepanelet til 100% så den dekker hele skjermen
  if (window.innerWidth < 799) {
	document.getElementById("prosjektSidepanel").style.width = "100%";
	document.getElementById("main").style.marginRight = "100%";
	  //Vis ikke, altså vis skjermbredden er større enn 799px så sett bredden til sidepanelet til 30%
} else {
	document.getElementById("prosjektSidepanel").style.width = "30%";
  	document.getElementById("main").style.marginLeft = "30%";
}	    
}
//Lukk sidepanelet
function closeNav() {
	document.getElementById("prosjektSidepanel").style.width = "0";
  	document.getElementById("main").style.marginLeft= "0";
	document.getElementById("main").style.marginRight= "0";
}
	  
var x = document.getElementById("pos");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Error";
  }
}
</script>

<script lang="javascript">

export default {
    template: '<App/>'
}
</script>

