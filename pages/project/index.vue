
<template>
    <div id="project">
        <Navbar/>
        <div class="container-fluid">  
            <div class="row">

			    <div class="card col-md-4 project">
  	                <div class="card-body">
			            <div class="card-inner">
                            <NuxtLink to="./game"><img id="wolf" class="card-img-top" src="/images/Wolf.svg" alt="Spill"/></NuxtLink>
				  	        <h5 class="card-title">Spill</h5>
                            <NuxtLink to="./game" title="A wacky game"><p class="card-text">A wacky game. . .</p></NuxtLink>
				        </div>
			  	    </div>
                </div>
		        <div class="card col-md-4 project">
				    <div class="card-body">
			            <div class="card-inner">
                            <NuxtLink to="./3dprint"><img class="card-img-top" src="/images/3dprint.png" alt="3D Print"></NuxtLink>
                            <h5 class="card-title">3D Print</h5>
                            <NuxtLink to="3dprint"><p class="card-text">3D Models</p></NuxtLink>
					    </div> 
				    </div>
			  	</div>
			    <div class="card col-md-4 project">
                    <NuxtLink to="./photoshop">
                        <div class="card-body">
                            <div class="card-inner">
                                <nuxt-img class="card-img-top" src="/images/Photoshop/photoshop1.jpg" alt="Photoshop"/>
                                <h5 class="card-title">Photoshop</h5>
                                <p class="card-text">Photoshop Images</p>
                            </div> 
                        </div>
                    </NuxtLink>
			  	</div>
                <div class="card col-md-4 project">
                    <NuxtLink to="./php-login">
                        <div class="card-body">
                            <div class="card-inner">
                                <nuxt-img class="card-img-top" src="/images/Photoshop/photoshop1.jpg"/>
                                <h5 class="card-title">PHP Login</h5>
                                <p class="card-text">PHP & SQL Login</p>
                            </div> 
                        </div>
                    </NuxtLink>
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

