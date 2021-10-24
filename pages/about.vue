
<template>
    <div id="about">
        <Navbar/>
        <div class="container-fluid">	
            <div class="row aboutbackground">
                <div class="col-xl-6 about">
                    <div class="text">
                        <div class="jumbotron">
                            <h1 class="display-4">Well, Hello there</h1>
                            <p class="lead">My name is Arvid Wedtstein</p>
                            <hr class="my-4">
                            <p>I currently study: Informationteknology and Media<br>Age: 17<br>I'm interested in: 3D-Design, Game development<br>Programmeringsspråk: JS, C#, Python, VB, HTML, CSS</p>
                            <div class="icon-bar a">
                                <!--<a href="https://www.facebook.com/profile.php?id=100022120962542" target="_blank animate__bounceIn" class="facebook"><i class="fa fa-facebook"></i></a>--> 
                                <a href="https://github.com/ArvidWedtstein" target="_blank" class="github animate__bounceIn"><font-awesome-icon icon="fa-github"/>Git</a> 
                                <!--<a href="https://twitter.com/ArvidWedtstein" target="_blank" class="twitter animate__bounceIn"><i class="fa fa-twitter"></i></a> 
                                <a href="https://www.twitch.tv/bass_gamer03" target="_blank" class="twitch animate__bounceIn"><i class="fa fa-twitch"></i></a> 
                                <a href="https://steamcommunity.com/id/arviwed/" target="_blank" class="steam animate__bounceIn"><i class="fa fa-steam"></i></a>-->
                                <a href="https://discord.gg/5hMtxNW" target="_blank" class="discord animate__bounceIn"><font-awesome-icon icon="fa-discord"/>Discord</a> 
                                <a href="https://www.linkedin.com/in/arvid-wedtstein-7498a21b7" target="_blank" class="linkedin animate__bounceIn"><font-awesome-icon icon="fa-linkedin"/>LinkedOut</a>
                                <a href="../CV/" class="cv animate__bounceIn">CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 about">
                    <div class="aboutMe col-md-10">
                        <img id="profile" class="card-img" src="/images/profilePicture.png" alt="Profil">
                    </div>
                </div>
                <div class="col-xl-12 about">
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

