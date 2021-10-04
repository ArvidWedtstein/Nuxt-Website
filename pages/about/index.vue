
<template>
    <div id="about">
        <nav class="navbar navbar-expand-lg"> <NuxtLink to="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px; filter: contrast(200%);" src="/images/ArvidLogo.png" alt="logo"></NuxtLink>
            <button class="navbar-toggler" target="navbarSupportedContent" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- Hjem knapp i navigeringslinjen på toppen-->
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" id="hometab" aria-controls="home" aria-expanded="true" to="./">Home</NuxtLink>
                    </li>
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link active" to="/about">About Me</NuxtLink>
                    </li>
                    <b-dropdown variant="dark" text="Projects" class="nav-item dropdowncustom"> 
                        <b-dropdown-header class="dropdown-headercustom"><NuxtLink to="project/">All Projects</NuxtLink></b-dropdown-header>
                            <b-dropdown-divider class="dropdown-divider"></b-dropdown-divider>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="/project/game">Spill</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="/3d-print">3D-Print</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="/photoshop">Photoshop</NuxtLink></b-dropdown-item>
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
              <li class="breadcrumb-item"><NuxtLink to="./">Home</NuxtLink></li>
              <li class="breadcrumb-item active"><NuxtLink to="./about">About Me</NuxtLink></li>
          </ol>
        </nav>
        
        <div class="container-fluid">	
            <div class="row">
                <div class="col-xl-6">
                    <div class="text">
                        <div class="jumbotron">
                            <h1 class="display-4">Well, Hello there</h1>
                            <p class="lead">My name is Arvid Wedtstein</p>
                            <hr class="my-4">
                            <p>I currently study: Informationteknology and Media<br>Age: 17<br>I'm interested in: 3D-Design, Game development<br>Programmeringsspråk: JS, C#, Python, VB, HTML, CSS</p>
                            <div class="icon-bar a">
                                <!--<a id="text0" href="https://www.facebook.com/profile.php?id=100022120962542" target="_blank animate__bounceIn" class="facebook"><i class="fa fa-facebook"></i></a>--> 
                                <a id="text1" href="https://github.com/ArvidWedtstein" target="_blank" class="github animate__bounceIn"><i class="fab fa-github"></i></a> 
                                <!--<a id="text2" href="https://twitter.com/ArvidWedtstein" target="_blank" class="twitter animate__bounceIn"><i class="fa fa-twitter"></i></a> 
                                <a id="text3" href="https://www.twitch.tv/bass_gamer03" target="_blank" class="twitch animate__bounceIn"><i class="fa fa-twitch"></i></a> 
                                <a id="text4" href="https://steamcommunity.com/id/arviwed/" target="_blank" class="steam animate__bounceIn"><i class="fa fa-steam"></i></a>-->
                                <a id="text5" href="https://discord.gg/5hMtxNW" target="_blank" class="discord animate__bounceIn"><i class="fab fa-discord"></i></a> 
                                <a id="text6" href="https://www.linkedin.com/in/arvid-wedtstein-7498a21b7" target="_blank" class="linkedin animate__bounceIn"><i class="fa fa-linkedin"></i></a>
                                <a id="text7" href="../CV/" class="cv animate__bounceIn">CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="col-xl-6">
                        <div class="aboutMe col-md-10">
                            <img id="profile" class="card-img" src="/images/profilePicture.png" alt="Profil">
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>


<script lang="text/javascript">

export default {
    template: '<about/>',
    transition: 'slide-bottom'
}
</script>

