
<template>
    <div id="project">
        <Navbar/>
        <div class="container-fluid">  
            <div class="row">
			    <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./game"><img class="card-img-top" src="/images/Projects/game.png" alt="Spill"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">Spill</h5>
                            <p class="card-text">A wacky game...</p>
                            <p class="card-text">Date: 22/10/21</p>
                            <p class="card-text">Language: C#</p>
                        </div>
                    </div>
                </div>
		        <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./3dprint"><img class="card-img-top" src="/images/Projects/3dprint.jpg" alt="3D Print"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">3D Print</h5>
                            <p class="card-text">3D Models</p>
                            <p class="card-text">Date: 22/10/21</p>
                            <p class="card-text">Language: GCODE</p>
                        </div>
                    </div>
			  	</div>
			    <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./photoshop"><img class="card-img-top" src="/images/Projects/photoshop.jpg" alt="Photoshop"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">Photoshop</h5>
                            <p class="card-text">Photoshop Images</p>
                            <p class="card-text">Language: ps</p>
                        </div>
                    </div>
			  	</div>
                <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./php-login"><img class="card-img-top" src="/images/Projects/php.png"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">PHP Login</h5>
                            <p class="card-text">PHP & SQL Login</p>
                            <p class="card-text">Language: PHP, SQL</p>
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
    transition: 'slide-bottom',
    head() {
        return {
            title: 'Projects',
            meta: [
                {
                    hid: "description",
                    name: "project page",
                    content: "Arvid's projects"
                }
            ]
        }
    }
}


</script>

