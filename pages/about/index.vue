
<template>
    <div id="about">
        <Navbar/>
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
                                <!--<a href="https://www.facebook.com/profile.php?id=100022120962542" target="_blank animate__bounceIn" class="facebook"><i class="fa fa-facebook"></i></a>--> 
                                <a href="https://github.com/ArvidWedtstein" target="_blank" class="github animate__bounceIn"><i class="fab fa-github"></i></a> 
                                <!--<a href="https://twitter.com/ArvidWedtstein" target="_blank" class="twitter animate__bounceIn"><i class="fa fa-twitter"></i></a> 
                                <a href="https://www.twitch.tv/bass_gamer03" target="_blank" class="twitch animate__bounceIn"><i class="fa fa-twitch"></i></a> 
                                <a href="https://steamcommunity.com/id/arviwed/" target="_blank" class="steam animate__bounceIn"><i class="fa fa-steam"></i></a>-->
                                <a href="https://discord.gg/5hMtxNW" target="_blank" class="discord animate__bounceIn"><i class="fab fa-discord"></i></a> 
                                <a href="https://www.linkedin.com/in/arvid-wedtstein-7498a21b7" target="_blank" class="linkedin animate__bounceIn"><i class="fa fa-linkedin"></i></a>
                                <a href="../CV/" class="cv animate__bounceIn">CV</a>
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
    transition: 'slide-bottom',
    key(route) {
        return route.fullPath
    }
}
</script>

