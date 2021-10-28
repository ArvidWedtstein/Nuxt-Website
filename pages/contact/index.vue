<template>
    <div id="contact">
        <Navbar/>
        <div class="container-fluid">
            <div class="contactFormBx">
                <form id="form" action="mail.php" method="POST">
                        <br><br>
                        <div class="inputBox">
                            <input type="text" id="name" name="name" required="required">
                            <span class="spantxt" for="name">Name</span>
                        </div>
                        <div class="inputBox">
                            <span class="indicator"></span>
                            <input type="text" id="email" name="email" required="required">
                            <span class="spantxt" for="email">Email</span>
                        </div>
                        <div style="display: flex; flex-direction: row; align-items: center;">
                            <h5>Get a copy</h5>
                            <input type="checkbox" name="test" class="copy check" value="value1">
                        </div>
                        <br>
                        <div class="inputBox">
                            <input type="text" id="subject" name="subject" required="required">
                            <span class="spantxt" for="subject">Subject</span>
                        </div>
                        <div class="inputBox">
                            <span class="indicator"></span>
                            <textarea required="required" id="text" name="message" onkeyup="countChar(this)" maxlength="400"></textarea>
                            <span class="spantxt" for="message">Message</span>
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

<style lang="scss">
$rainbow-grad90: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
/* Contact Me page form css*/
.contactFormBx {
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
    form {
        width: 100%;
        padding: 0 0 0 0px;
        position: relative;
        h5 {
            position: relative;
            width: 90%;
            text-transform: uppercase;
            letter-spacing: 2px
        }   
        .inputBox {
            position: relative;
            vertical-align: middle;
            margin-bottom: 40px;
            width: 100%;
            input, textarea {
                position: relative;
                background: transparent;
                text-align: left;
                vertical-align: middle;
                outline: none;
                width: 100%;
                border: none;
                color: #ffffff;
                padding-bottom: 10px;
                font-size: 1rem;
                letter-spacing: 1px;
                border-bottom: 2px solid rgba(255, 255, 255, 1);
                &:-webkit-autofill,
                &:-webkit-autofill:hover, 
                &:-webkit-autofill:focus, 
                &:-webkit-autofill:active  {
                    -webkit-text-fill-color: White;
                    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
                    box-shadow: 0 0 0px 1000px #000 inset;
                    transition: background-color 5000s ease-in-out 0s;
                }
                &:focus ~ span,
                &:focus ~ span,
                &:valid ~ span,
                &:valid ~ span {
                    transform: translateY(-24px);
                }
            }
            textarea {
                height: 100px;
            }
            input[type="submit"] {
                padding: 1rem;
                margin-top: 10px;
                cursor: pointer;
                background: #ff5064;
                color: #ffffff;
                font-size: 1rem;
                width: 30%;
                align-items: center;
                text-align: center;
                align-content: center;
                &:focus, &:focus-within {
                    background: #1bfaad;
                    color: #111111;
                }
            }
            .spantxt {
                position: absolute;
                font-size: auto;
                left: 0;
                display: inline-block;
                pointer-events: none;
                letter-spacing: 1px;
                color: rgba(255,255,255,0.5);
                transition: all 0.2s;
                outline: none;
                border: none;
            }
            .indicator {
                position: relative;
                width: 0.75rem;
                height: 0.75rem;
                background: #555555;
                float: right;
                border-radius: 50%;
                display: inline-block;
                pointer-events: none;
                transition: all 0.2s;
                outline: none;
                border: none;
            }
        }
    }
    #form.valid .indicator {
        background: #00ff00;
        box-shadow: 0 0 0.25rem #00ff00, 0 0 0.50rem #00ff00, 0 0 1rem #00ff00;
    }
    #form.invalid .indicator {
        background: #ff0000;
        box-shadow: 0 0 0.25rem #ff0000, 0 0 0.50rem #ff0000, 0 0 1rem #ff0000;
    }
    .check
    {
        position: absolute;
        margin-left: 13rem;
        width: 70px;
        height: 30px;
        float: left;
        vertical-align: middle;
        -webkit-appearance: none;
        background: linear-gradient(0deg, #333, #000);
        outline: none;
        border-radius: 20px;
        box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px
            rgba(0,0,0,1), 0 5px 20px rgba(0,0,0,.5), inset 0 0 15px rgba(0,0,0,.2);
        &:checked[type="checkbox"] {
            transition : .5s;
            background: $rainbow-grad90;
            background-size: 400%;
            animation: animate 8s linear infinite;
            box-shadow: 0 0 2px #6dd1ff,0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0,0,0,1), 0 5px 20px rgba(0,0,0,.5), inset 0 0 15px rgba(0,0,0,.2);
        }
        &:disabled[type="checkbox"] {
            background: linear-gradient(90deg, #000, #6dd1ff, #ff0000);
            box-shadow: 30px #000;
        }
        &[type="checkbox"]::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 45px;
            height: 30px;
            background: linear-gradient(0deg, #000, #6b6b6b);
            border-radius: 20px;
            box-shadow: 0 0 0 1px #232323;
            transform: scale(.98,.96);
            transition: .5s;
        }
        &[type="checkbox"]::after {
            content: '';
            position: absolute;
            top: calc(50% - 2px);
            left: 35px;
            width: 4px;
            height: 4px;
            background: linear-gradient(0deg, #6b6b6b, #000);
            border-radius: 50%;
            transition: .5s;
        }
        &:checked[type="checkbox"]::before
        {
            left: 24px;
        }
        &:checked[type="checkbox"]::after {
            background: #63cdff;
            left: 60px;
            box-shadow: 0 0 5px #13b3ff, 0 0 15px #13b3ff;
            transition: .5s;
        }
    }
}
@media (min-width: 800px) {
	.contactFormBx {
		width: 90%;
        form {
            width: 90%;
            .inputBox {
                width: 80%;
            }
        }
	}
}

</style>