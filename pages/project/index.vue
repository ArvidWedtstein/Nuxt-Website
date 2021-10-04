
<template>
    <div id="project">

        <nav class="navbar navbar-expand-lg navbar-light"> <NuxtLink to="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px; filter: contrast(200%);" src="/images/ArvidLogo.png" alt="logo"></NuxtLink>
            <button class="navbar-toggler" target="navbarSupportedContent" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- Hjem knapp i navigeringslinjen på toppen-->
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" id="hometab" aria-controls="home" aria-expanded="true" to="../">Home</NuxtLink>
                        <!--<a class="nav-link active" href="../" id="hometab" aria-controls="home" aria-expanded="true">Home</a>--> 
                    </li>
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" to="/about">About Me</NuxtLink>
                        <!--<a class="nav-link" href="about/">Om Meg</a> -->
                    </li>
                    <b-dropdown variant="dark" text="Projects" class="nav-item dropdowncustom"> 
                        <b-dropdown-header class="dropdown-headercustom"><NuxtLink to="project/">All Projects</NuxtLink></b-dropdown-header>
                            <b-dropdown-divider class="dropdown-divider"></b-dropdown-divider>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="./game">Spill</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="3dprint">3D-Print</NuxtLink></b-dropdown-item>
                            <b-dropdown-item class="dropdown-itemcustom"><NuxtLink to="photoshop">Photoshop</NuxtLink></b-dropdown-item>
                    </b-dropdown>
                    
                    <!--Kontaktside-->
                    <li class="nav-item"> 
                        <NuxtLink class="nav-link" aria-controls="contacttab" aria-expanded="true" to="../contact">Contact</NuxtLink>
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
              <li class="breadcrumb-item"><NuxtLink to="../">Home</NuxtLink></li>
              <li class="breadcrumb-item active" aria-current="page"><NuxtLink to="./">Projects</NuxtLink></li>
          </ol>
        </nav>
        <div class="container-fluid">  
            <div class="row">

			    <div class="card col-md-4 project">
  	                <div class="card-body">
			            <div class="card-inner">
			                <a class="spill" href="game"><img id="wolf" class="card-img-top" src="/images/Wolf.svg" alt="Spill"></a>
				  	        <h5 class="card-title">Spill</h5>
				  	        <a class="spill" href="./game"><p class="card-text">A wacky game. . .</p></a>
				        </div>
			  	    </div>
                </div>
		        <div class="card col-md-4 project">
				    <div class="card-body">
			            <div class="card-inner">
			                <a class="spill" href="3dprint"><img class="card-img-top" src="/images/3dprint.png" alt="3D Print"></a>
                            <h5 class="card-title">3D Print</h5>
                            <a class="modell" href="3dprint"><p class="card-text">3D Modeller</p></a>
					    </div> 
				    </div>
			  	</div>
			    <div class="card col-md-4 project">
				    <div class="card-body">
                        <div class="card-inner">
                            <a class="spill" href="photoshop"><img class="card-img-top" src="/images/Photoshop/photoshop1.jpg" alt="card image cap"></a>
				  	        <h5 class="card-title">Photoshop</h5>
				  	        <a class="modell" href="photoshop"><p class="card-text">Photoshop Images</p></a>
					    </div> 
				    </div>
			  	</div>
	        </div>
        </div>
    </div>
</template>


<script lang="text/javascript">


export default {
  
    template: '<Project/>',
    transition: 'slide-bottom'
}


</script>

