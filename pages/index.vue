
<template>
    <div id="app">
        <!--<b-navbar class="navbar navbar-expand-lg navbar-light" toggleable="lg" type="dark">
            <b-navbar-brand href="./"><img style="width: 60px; filter: contrast(200%);" src="/images/ArvidLogo.png" alt="logo"/></b-navbar-brand>
            <b-navbar-toggle class="navbar-toggler" target="nav-collapse"></b-navbar-toggle>
            <b-collapse class="collapse navbar-collapse" id="nav-collapse" is-nav>
                <b-navbar-nav class="mr-auto">
                    <b-nav-item>
                        <NuxtLink class="nav-link active" id="hometab" aria-controls="home" aria-expanded="true" to="./">Home</NuxtLink>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>-->
        <nav class="navbar navbar-expand-lg navbar-light"> <NuxtLink to="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px; filter: contrast(200%);" src="/images/ArvidLogo.png" alt="logo"></NuxtLink>
            <button class="navbar-toggler" target="navbarSupportedContent" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- Hjem knapp i navigeringslinjen på toppen-->
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link active" id="hometab" aria-controls="home" aria-expanded="true" to="./">Home</NuxtLink>
                        <!--<a class="nav-link active" href="../" id="hometab" aria-controls="home" aria-expanded="true">Home</a>--> 
                    </li>
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" to="/about">About Me</NuxtLink>
                        <!--<a class="nav-link" href="about/">Om Meg</a> -->
                    </li>
                    <b-dropdown variant="dark" text="Projects" class="nav-item dropdown"> 
                        <b-dropdown-header><NuxtLink to="project/">All Projects</NuxtLink></b-dropdown-header>
                            <b-dropdown-divider class="dropdown-divider"></b-dropdown-divider>
                            <b-dropdown-item class="dropdown-item"><NuxtLink to="/project/game">Spill</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-item"><NuxtLink to="/3d-print">3D-Print</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-item"><NuxtLink to="/photoshop">Photoshop</NuxtLink></b-dropdown-item>
                    </b-dropdown>
                    
                    <!--Kontaktside-->
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" aria-controls="contacttab" aria-expanded="true" to="./contact">Contact</NuxtLink>
                        <!--<a class="nav-link" href="contact/" id="contact1" aria-controls="contacttab" aria-expanded="true">Kontakt</a>--> 
                    </li>
                    <li class="navbar-text">
			            <h1 class="navbarbox"></h1>
		            </li>
                </ul>
            </div>
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item active"><NuxtLink to="./">Home</NuxtLink></li>
          </ol>
        </nav>
        <div class="container-fluid">  
            <!--Jumbotron-->
            <div class="jumbotron">
            <!--RGB firkanten som går rundt "Velkommen" boksen-->
                <div class="RGBborder">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p class="display-4 unselectable">Welcome</p>
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
                        <h1 class="hexTxtTitle">Star Wars</h1>
                        <p class="hexTxtDesc">Photoshop Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                        <a class="hexLink" href="Spill/">
                            <div class="hexImg" style="background-image: url(/images/Unity/Unity1.PNG);"></div>
                            <h1 class="hexTxtTitle">By</h1>
                            <p class="hexTxtDesc">Spill Prosjekt</p>
                        </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Unity/Unity7.PNG);"></div>
                        <h1 class="hexTxtTitle">By</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Unity/Unity4.PNG);"></div>
                        <h1 class="hexTxtTitle">Lyktestolpe</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Unity/Unity2.PNG);"></div>
                        <h1 class="hexTxtTitle">Elv</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                    <div class="hexImg" style="background-image: url(/images/Blender/Start2.png);"></div>
                        <h1 class="hexTxtTitle">Mynt</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Blender/Start1.png);"></div>
                        <h1 class="hexTxtTitle">Ovn</h1>
                        <p class="hexTxtDesc">Unity Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Blender/Start3.png);"></div>
                        <h1 class="hexTxtTitle">Gjerde</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                  <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Blender/Start4.png);"></div>
                        <h1 class="hexTxtTitle">Kiste</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image:url(/images/Blender/Start5.png);"></div>
                        <h1 class="hexTxtTitle">Ambolt</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                    <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Blender/Start6.png);"></div>
                        <h1 class="hexTxtTitle">Flagg</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                      <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                            <div class="hexImg" style="background-image: url(/images/Unity/Unity10.PNG);"></div>
                        <h1 class="hexTxtTitle">Bro</h1>
                        <p class="hexTxtDesc">Spill Prosjekt</p>
                      </a>
                    </div>
                  </li>
                    <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Photoshop/">
                        <div class="hexImg" style="background-image: url(/images/Photoshop/photoshop2.jpg);"></div>
                        <h1 class="hexTxtTitle">Space</h1>
                        <p class="hexTxtDesc">Photoshop Prosjekt</p>
                      </a>
                    </div>
                  </li>
                <li class="hex">
                    <div class="hexIn">
                      <a class="hexLink" href="Spill/">
                        <div class="hexImg" style="background-image: url(/images/Unity/Unity9.PNG);"></div>
                        <h1 class="hexTxtTitle">Tårn</h1>
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
<script type="text/javascript">

</script>

<script lang="text/javascript">


export default {
  
    template: '<App/>',
    transition: 'slide-bottom'
}


</script>

