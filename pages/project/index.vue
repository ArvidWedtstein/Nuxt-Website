
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
                            <NuxtLink to="./game" title="A wacky game"><p class="card-text">A wacky game. . .</p></NuxtLink>
                            <p class="card-text">Date: 22/10/21</p>
                        </div>
                    </div>
                </div>
		        <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./3dprint"><img class="card-img-top" src="/images/Projects/3dprint.jpg" alt="3D Print"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">3D Print</h5>
                            <NuxtLink to="3dprint"><p class="card-text">3D Models</p></NuxtLink>
                            <p class="card-text">Date: 22/10/21</p>
                        </div>
                    </div>
			  	</div>
			    <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./photoshop"><img class="card-img-top" src="/images/Projects/photoshop.jpg" alt="Photoshop"/></NuxtLink>
                        <div class="card-body boxborder">
                            <h5 class="card-title">Photoshop</h5>
                            <p class="card-text"><NuxtLink to="./photoshop">Photoshop Images</NuxtLink></p>
                            <p class="card-text">Date: 22/10/21</p>
                        </div>
                    </div>
			  	</div>
                <div class="col-md-3 project d-flex">
                    <div class="card text-center">
                        <NuxtLink class="imgborder" to="./php-login"><img class="card-img-top" src="/images/Projects/php.png"/>
                        <div class="card-body boxborder">
                            <h5 class="card-title">PHP Login</h5>
                            <p class="card-text">PHP & SQL Login</p>
                            <p class="card-text">Date: 22/10/21</p>
                        </div>
                        </NuxtLink>
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

