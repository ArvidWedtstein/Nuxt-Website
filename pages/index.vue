<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
	    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
	         <ul class="navbar-nav mr-auto">
			  <!-- Hjem knapp i navigeringslinjen på toppen-->
			   <li class="nav-item"> 
			  <a class="nav-link" href="../" id="hometab" aria-controls="home"><i class="fas fa-home"></i></a> 
			  </li>
	      <li class="nav-item"> 
		    <a class="nav-link" href="../About/">Om Meg</a> 
		    </li>
		    <!-- Dropdown -->
	      <li class="nav-item dropdown"> 
			  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" alt="Mitt Arbeid" aria-haspopup="true" aria-expanded="false"><i class="fas fa-briefcase"></i></a>
	        <div class="dropdown-menu"> 
				<a class="dropdown-header" href="../Project/">Alle Prosjekter</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="../Spill/">Spill</a>
				<a class="dropdown-item" href="../IMcity/">IM City</a>
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
</template>

<style>
  @import './bootstrap-4.4.1.css';
</style>
<script lang="javascript">
export default {

}
</script>
