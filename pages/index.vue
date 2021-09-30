
<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light"> <a href="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px;filter: contrast(200%);" src="~assets/images/ArvidLogo.png" alt="logo"></a>
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
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false"><i class="fas fa-briefcase"></i></a>
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
                        <div class="img" style="background-image: url(images/Photoshop/photoshop1.jpg);"></div>
                        <h1 class="txt1">Star Wars</h1>
                        <p class="txt2">Photoshop Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                            <div class="img" style="background-image: url(images/Unity/Unity1.PNG);"></div>
                        <h1 class="txt1">By</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Unity/Unity7.PNG);"></div>
                        <h1 class="txt1">By</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Unity/Unity4.PNG);"></div>
                        <h1 class="txt1">Lyktestolpe</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Unity/Unity2.PNG);"></div>
                        <h1 class="txt1">Elv</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                    <div class="img" style="background-image: url(images/Blender/Start2.png);"></div>
                        <h1 class="txt1">Mynt</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Blender/Start1.png);"></div>
                        <h1 class="txt1">Ovn</h1>
                        <p class="txt2">Unity Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Blender/Start3.png);"></div>
                        <h1 class="txt1">Gjerde</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Blender/Start4.png);"></div>
                        <h1 class="txt1">Kiste</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image:url(images/Blender/Start5.png);"></div>
                        <h1 class="txt1">Ambolt</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                    <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Blender/Start6.png);"></div>
                        <h1 class="txt1">Flagg</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                      <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                            <div class="img" style="background-image: url(images/Unity/Unity10.PNG);"></div>
                        <h1 class="txt1">Bro</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                    <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Photoshop/">
                        <div class="img" style="background-image: url(images/Photoshop/photoshop2.jpg);"></div>
                        <h1 class="txt1">Space</h1>
                        <p class="txt2">Photoshop Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="img" style="background-image: url(images/Unity/Unity9.PNG);"></div>
                        <h1 class="txt1">Tårn</h1>
                        <p class="txt2">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                </ul>
                  </div>
                </div>
              <div id="wrapfabtest">
                <div class="adBanner">
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
                                <a class="spill" href="Spill/"><img class="card-img-top" src="images/Wolf.svg" alt="Spill"></a>
                                <h5 class="card-title">Spill</h5>
                                <a class="spill" href="Spill/"><p class="card-text">Et spill jeg holder på å programmere og designe for tiden</p></a>
                            </div> 
                        </div>
                      </div>
                      <div class="card col-xl-12"> 
                            <div class="card-body">
                    <div class="card-inner">
                    <a class="spill" href="IMcity/"><img class="card-img-top" src="images/IMcity/imcity5.jpg" alt="IM city"></a>
                            <h5 class="card-title">IM City</h5>
                            <a class="modell" href="IMcity/"><p class="card-text">Prosjekt i YFF</p></a>
                        </div> 
                      </div>
                          </div>
                    <div class="card col-xl-12">
                    <div class="card-body">
                    <div class="card-inner">
                    <a class="spill" href="3D-Print/"><img class="card-img-top" src="images/3dprint.png" alt="3D"></a>
                            <h5 class="card-title">3D Print</h5>
                            <a class="modell" href="3D-Print/"><p class="card-text">3D Modeller</p></a>
                        </div> 
                      </div>
                      </div>
                  <div class="card col-xl-12">
                    <div class="card-body">
                    <div class="card-inner">
                    <a class="spill" href="Photoshop/"><img class="card-img-top" src="images/Photoshop/photoshop3.jpg" alt="Photoshop"></a>
                            <h5 class="card-title">Photoshop</h5>
                            <a class="modell" href="Photoshop/"><p class="card-text">Photoshop bilder</p></a>
                        </div> 
                      </div>
                      </div>
                  </div>
            </div>
    </div>
</template>


<script lang="javascript">

export default {
    template: '<App/>'
}
</script>

