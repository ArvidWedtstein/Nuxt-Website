
<template>
    <div id="about">
        <nav class="navbar navbar-expand-lg navbar-light"> <a href="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px;filter: contrast(200%);" src="~static/images/ArvidLogo.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav mr-auto">
                    <!-- Hjem knapp i navigeringslinjen på toppen-->
                    <li class="nav-item"> 
                        <a class="nav-link" href="../" id="hometab" aria-controls="home" aria-expanded="true">Home</a> 
                    </li>
                    <li class="nav-item"> 
                        <a class="nav-link active" href="./">Om Meg</a> 
                    </li>
                    <!-- Dropdown -->
                    <li class="nav-item dropdown"> 
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false"><i class="fas fa-briefcase"></i></a>
                        <div class="dropdown-menu"> 
                            <a class="dropdown-header" href="../Project/">Alle Prosjekter</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="../Spill/">Spill</a>
                            <!--<a class="dropdown-item" href="../IMcity/">IM City</a>-->
                            <a class="dropdown-item" href="../3D-Print/">3D</a>
                            <a class="dropdown-item" href="../Photoshop/">Photoshop</a>
                        </div>
                    </li>
                    
                    <!--Kontaktside-->
                    <li class="nav-item"> 
                        <a class="nav-link" href="../Contact/" id="contact1" aria-controls="contacttab" aria-expanded="true">Kontakt</a> 
                    </li>
                </ul>
            </div>
        </nav>

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="./index.vue">Hjem</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a>Om Meg</a></li>
            </ol>
        </nav>
        
        <div class="container-fluid">	
            <div class="row">
                <div class="col-xl-6">
                        <div class="text">
                            <!--<p class="aboutMe">Hei, <br> mitt navn er <br> Arvid Wedtstein</p>-->
                        <div class="jumbotron">
                            <h1 class="display-4">Hei!</h1>
                            <p class="lead">Mitt navn er Arvid Wedtstein</p>
                            <hr class="my-4">
                            <p>Skole: Haugaland VGS<br>Linje: Informasjonsteknologi og Media<br>Alder: 16<br>Interesser: 3D-Design, Spillutvikling<br>Programmeringsspråk: JS, C#, Python, VB, HTML, CSS</p>
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
                        <div class="card col-md-10"> <img id="profile" class="card-img" src="~/static/images/profilePicture.png" alt="Profil">
                            <div class="card-body">
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

