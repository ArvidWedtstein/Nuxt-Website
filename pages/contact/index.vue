<template>
    <div id="contact">
        <Navbar/>
        <div class="container-fluid">
            <div class="contactFormBx">
                <form id="form" action="mail.php" method="POST">
                        <h5></h5>
                        <div class="inputBox">
                            <input type="text" id="name" name="name" required="required">
                            <span class="kontakt" for="name">Name</span>
                        </div>
                        <div class="inputBox">
                            <span class="indicator"></span>
                            <input type="text" id="email" name="email" required="required">
                            <span class="kontakt" for="name">Email</span>
                        </div>
                        <div class="inputBox2">
                                <h5 class="kontakt2">Get a copy</h5>
                            <input type="checkbox" name="test" class="copy check" value="value1">
                        </div>
                        <br>
                        <div class="inputBox">
                            <input type="text" id="subject" name="subject" required="required">
                            <span class="kontakt" for="name">Subject</span>
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

<script lang="text/javascript">

export default {
    template: '<contact/>',
    transition: 'slide-bottom'
}
</script>