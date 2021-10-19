
<template>
    <div id="photoshop">
        <Navbar/>
        <div class="container-fluid">  
            <div id="jumbo" class="jumbotron">
                <h1 class="display-4">Photoshop</h1>
                <p class="lead">Bilder.</p>
                <p class="lead"></p>
                <hr class="my-4">
            </div>
            <div class="photoset"> <!--Can also do portrait or square, remove the "-" prefix-->
                <!--Add or remove some of these-->
                <a href="/images/Photoshop/photoshop1.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop1.jpg)" ></a>
                <a href="/images/Photoshop/photoshop2.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop2.jpg)"></a>
                <a href="/images/Photoshop/photoshop3.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop3.jpg)"></a>
                <a href="/images/Photoshop/photoshop4.jpg" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop4.jpg)"></a>
                <a href="/images/Photoshop/photoshop5.png" target="_blank" class="photo" style="background-image:url(/images/Photoshop/photoshop5.png)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/c62c2379b7fc2c16b0bc3c9efcc915ac/tumblr_p773r1ugkd1wd32uro6_400.jpg)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/ea9fe77f480a5328eb81335847cb711f/tumblr_p773r1ugkd1wd32uro7_400.jpg)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/470e6d187709ee3ecd0b1c71a287adc6/tumblr_p773r1ugkd1wd32uro8_400.png)"></a>
                <a href="https://blog.tumblr.com/image/0000000000" target="_blank" class="photo" style="background-image:url(https://78.media.tumblr.com/b5f5d5705000bf45b6f8903222bcba8d/tumblr_p773r1ugkd1wd32uro9_400.jpg)"></a>
            </div>
            <div class="row">
                <div class="col-xl-4">
                    <div class="psresponsive">
                        <div class="contentBox">
                            <a target="_blank" href="/images/Photoshop/photoshop1.jpg">
                            <img src="/images/Photoshop/photoshop1.jpg" alt="Photoshop1" class="img-fluid">
                            </a>
                            <div class="content">
                                <p class="desc">Star Wars</p>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="col-xl-4">
                    <div class="psresponsive">
                        <div class="contentBox">
                            <a target="_blank" href="/images/Photoshop/photoshop2.jpg">
                            <img src="/images/Photoshop/photoshop2.jpg" alt="Photoshop2" class="img-fluid">
                            </a>
                            <div class="content">
                                <p class="desc">Space</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="col-xl-4">
                    <div class="psresponsive">
                        <div class="contentBox">
                            <a target="_blank" href="/images/Photoshop/photoshop3.jpg">
                            <img src="/images/Photoshop/photoshop3.jpg" alt="Photoshop3" class="img-fluid">
                            </a>
                            <div class="content">
                                <p class="desc">Mars</p>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="col-xl-4">
                    <div class="psresponsive">
                        <div class="contentBox">
                            <a target="_blank" href="/images/Photoshop/photoshop4.jpg">
                            <img src="/images/Photoshop/photoshop4.jpg" alt="Photoshop4" class="img-fluid">
                            </a>
                            <div class="content">
                                <p class="desc">Avatar</p>
                            </div>
                        </div>
                    </div>
                </div> 	    
                <div class="col-xl-4">
                    <div class="psresponsive">
                        <div class="contentBox">
                            <a target="_blank" href="/images/Photoshop/photoshop5.png">
                            <img src="/images/Photoshop/photoshop5.png" alt="Photoshop4" class="img-fluid">
                            </a>
                            <div class="content">
                                <p class="desc">Stein</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="text/javascript">


export default {
  
    template: '<Photoshop/>',
    transition: 'slide-bottom'
}


</script>

