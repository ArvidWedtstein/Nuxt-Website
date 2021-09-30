<template>
    <div id="contact">
        <nav class="navbar navbar-expand-lg navbar-light"> <a href="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px;filter: contrast(200%);" src="~assets/images/ArvidLogo.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav mr-auto">
                    <!-- Hjem knapp i navigeringslinjen på toppen-->
                    <li class="nav-item"> 
                        <a class="nav-link" href="../" id="hometab" aria-controls="home" aria-expanded="true">Home</a> 
                    </li>
                    <li class="nav-item"> 
                        <a class="nav-link" href="../about/">Om Meg</a> 
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
                        <a class="nav-link active" href="Contact/" id="contact1" aria-controls="contacttab" aria-expanded="true">Kontakt</a> 
                    </li>
                </ul>
            </div>
        </nav>
	  
        <!--Breadcrumb-->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="../">Hjem</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a>Kontakt</a></li>
            </ol>
        </nav>
        <div class="container-fluid">
            <div class="contactFormBx">
                <form id="form" action="mail.php" method="POST">
                        <h5></h5>
                        <div class="inputBox">
                            <input type="text" id="name" name="name" required="required">
                            <span class="kontakt" for="name">Navn</span>
                        </div>
                        <div class="inputBox">
                            <span class="indicator"></span>
                            <input type="text" id="email" name="email" required="required">
                            <span class="kontakt" for="name">Email</span>
                        </div>
                        <div class="inputBox2">
                                <h5 class="kontakt2">Få tilsendt en kopi</h5>
                            <input type="checkbox" name="test" class="copy check" value="value1">
                        </div>
                        <br>
                        <div class="inputBox">
                            <input type="text" id="subject" name="subject" required="required">
                            <span class="kontakt" for="name">Emne</span>
                        </div>
                        <div class="inputBox">
                            <span class="indicator2"></span>
                            <textarea required="required" id="text" name="message" onkeyup="countChar(this)" maxlength="400"></textarea>
                            <span class="kontakt" for="name">Melding</span>
                            <div id="charNum"></div>
                        </div>
                        <div class="inputBox">
                            <input type="submit" value="Send">
                        </div>
                </form>
            </div>
	    </div>
    </div>
</template>