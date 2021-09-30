
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light"> <a onclick="openNav()" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px;filter: contrast(200%);" src="~/assets/images/ArvidLogo.png" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <!-- onclick="play()" navbar-toggler -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav mr-auto">
          <!-- Hjem knapp i navigeringslinjen på toppen-->
          <li class="nav-item"> 
          <a class="nav-link active" href="" id="hometab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true"> <font-awesome-icon icon="fa-home" /></a> 
          </li>
          <li class="nav-item"> 
          <a class="nav-link" href="About/">Om Meg</a> 
          </li>
          <!-- Dropdown -->
          <li class="nav-item dropdown"> 
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false"><i class="fas fa-briefcase"></i></a>
          <!--Prosjektdropdown-->
            <div class="dropdown-menu"> 
          <a class="dropdown-header" href="Project/">Alle Prosjekter</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="Spill/">Spill</a>
          <!--<a class="dropdown-item" href="IMcity/">IM City</a>-->
          <a class="dropdown-item" href="3D-Print/">3D</a>
          <a class="dropdown-item" href="Photoshop/">Photoshop</a>
          </div>
            </li>
          <!--Kontaktside-->
        <li class="nav-item"> 
          <a class="nav-link" href="../Contact/" id="contact1" aria-controls="contacttab" aria-expanded="true">Kontakt</a> 
        </li>
          <!--boksen i navigasjonsbaren til høyre. Skifter farge og forsvinner når skjermbredden er under 992px.-->
        <li class="navbar-text">
          <h1 class="navbarbox"></h1>
        </li>
          
      <!--<li class="navbar-text dropdown"> 
          <a class="login dropdown-toggle" data-toggle="dropdown" href="#" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i></a>
            <div class="dropdown-menu"> 
          <a class="dropdown-header" href="The Game/Login/">Logg inn</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="The Game/Login/profile.php">Detaljer</a>
          <a class="dropdown-item" href="The Game/Login/logout.php">Logg ut</a>
          </div>
            </li>-->
      </ul>
      </div>
    </nav>
  </div>
</template>


<script lang="javascript">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome)

export default {
  template: '<App/>'
}
</script>

