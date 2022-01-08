<template>
  <div>
    <Navbar/>
    <Nuxt/>
    <slot/>
    <Snackbar></Snackbar>
  </div>
</template>

<script>
//import Editor from '@tinymce/tinymce-vue'
import Snackbar from '~/components/snackbar.vue'
export default {
  template: "default",
  transition: "slide-bottom",
  components: { 
    Snackbar,
  },
  methods: {
    /*scroll() {
      let lastKnownScrollPosition = 0;
      let ticking = false;
      function doSomething(scrollPos) {
        const newPos = (scrollPos / 32)
        document.body.style.setProperty("-webkit-transform", `rotate(${newPos}deg) rotate3d(0, 0, 0.5, 3.142rad)`, null);
        //document.body.style.setProperty("-webkit-transform", `scale(${newPos}) translate(-100%, -100%);`, null);
      }

      document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(lastKnownScrollPosition);
            ticking = false;
          });

          ticking = true;
        }
      });
    }*/
  },
  mounted() {
    //this.scroll()
  },
  computed: {
    
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=MedievalSharp');
@import url("https://use.typekit.net/gyz4ina.css");
@import url("https://use.typekit.net/gyz4ina.css");
@font-face {
  font-family: "medieval";
  src: url('https://fonts.gstatic.com/s/unifrakturmaguntia/v7/7KWy3ymCVR_xfAvvcIXm3wh3zWhftzIdHBsuU0JwdCQ.woff2');
}
@font-face {
  font-family: "medieval-bodytext";  
  src: url('https://fonts.gstatic.com/s/unifrakturcook/v8/ASwh69ykD8iaoYijVEU6RpMdj8Gkv7ccSfgBBVtwm5Y.woff2');
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  height: 100%;
  /*& > * {
    //transform: rotate3d(0, 0, 0.5, 3.142rad) !important;
  }*/
  --titlefont: "Montserrat";
  --textfont: "Quicksand";
}
.rad-shadow {
  border: 1px solid hsl(200 10% 50% / 15%);
  box-shadow: 0 1rem .5rem -.5rem;
  box-shadow:
    0 2.8px 2.2px hsl(200 50% 3% / calc(.3 + .03)),
    0 6.7px 5.3px hsl(200 50% 3% / calc(.3 + .01)),
    0 12.5px 10px hsl(200 50% 3% / calc(.3 + .02)),
    0 22.3px 17.9px hsl(200 50% 3% / calc(.3 + .02)),
    0 41.8px 33.4px hsl(200 50% 3% / calc(.3 + .03)),
    0 100px 80px hsl(200 50% 3% / .3)
  ;
}
body {
  height: 100%;
  background: #212529;
}
a {
  &.column {
    color: #2f2f2f;
  }
  transition: all 0.2s ease;
  &:hover {
    &:not(.link), &:not(.rgb-link) {
      text-decoration: underline;
    }
    color: #7FCD8A;
    &.column {
      text-decoration: none;
      color: #2f2f2f;
    }
    
  }
  color: #7FCD8A;
  text-decoration: none;
  background-color: none !important;
  &.link {
    &.active, &.nuxt-link-exact-active {
      background-size: 300% 2px;
    }
    background: linear-gradient(90deg, #7FCD8A, #7FCD8A, #7FCD8A, #7FCD8A);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: left bottom;
    text-decoration: none;
    //font-weight: 900;
    transition: background-size 600ms ease-in-out;
    &:hover {
      color: #7FCD8A;
      background-size: 300% 2px;
      text-decoration: none;
    }
  }
  &.rgb-link {
    background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-repeat: no-repeat;
    background-size: 0% 3px;
    background-position: left bottom;
    text-decoration: none;
    font-weight: 900;
    transition: background-size 600ms ease;
    &:hover {
      background-size: 300% 3px;
      -webkit-animation: rgb-link 10s ease infinite;
      animation: rgb-link 3s linear infinite;
    }
  }
}

/*Egen Scrollbar*/
/*::-webkit-scrollbar {
	width: 1rem;
}
::-webkit-scrollbar-track {
	background: $rainbow-grad0;
}
::-webkit-scrollbar-thumb {
	background: transparent;
	border-radius: 10px;
	box-shadow: 0px 0px 0px 100000vh black;
}*/

$maincolors: (
  "grey": #212529,
  "darkblue": #192D40,
  "blue": #21303A,
  "cyan": #375D72,
  "lime": #7FCD8A,
  "white": #F4F0E7,
  "lightblue": #5DACB6
);
@function colorscheme($color) {
    @return map-get($maincolors, $color);
}
$rainbow-grad0: linear-gradient(0deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
$rainbow-grad90: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
$titlefont: "Montserrat";
$textfont: "Quicksand";
$border-radius: 0.25rem;
.jumbotron {
  background: none;
  text-align: center;
  margin: 2rem;
  &.newspost {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    text-transform: uppercase;
  }
  .my-4 {
    background: #ffffff;
  }
}

.nav-link, .nav-tabs {
  color: colorscheme('white');
  &.show, &:hover, &:active, &:focus {
    color: colorscheme('lime');
  }
}
/* Define buttons here */

.btn-group {
  &.space > .btn:first-child {
    margin-right: 0.4rem;
  }
}
.btn {
  &.btn-download {
    position: relative;
    bottom: 0;
    width: 50%;
    font-size: 1rem;
    background: rgba(colorscheme('white'),0.3);
    text-decoration: none;
    padding: 1rem 1rem;
    color: colorscheme('white');
    transition: 0.5s;
    &:hover {
      background: colorscheme('lime') url("/images/pixel.png");
      background-size: 180px;
      text-decoration: none;
      transition-delay: 0.8s;
      color: colorscheme('white');
      animation: pixel 0.4s steps(8) forwards;
    }
  }
  &.btn-rgb {
    --rgbshadowsize: -1px;
    position: relative;
    text-align: center;
    line-height: 30px;
    color: colorscheme('white');
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: sans-serif;
    box-sizing: border-box;
    background: $rainbow-grad90;
    background-size: 400%;
    border-radius: 0.25rem;
    cursor: pointer;
    box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px
      rgba(0,0,0,1), 0 5px 20px rgba(0,0,0,.5), inset 0 0 15px rgba(0,0,0,.2);
    &::before {
      content: '';
      position: absolute;
      top: var(--rgbshadowsize);
      left: var(--rgbshadowsize);
      right: var(--rgbshadowsize);
      bottom: var(--rgbshadowsize);
      z-index: -1;
      background: $rainbow-grad90;
      background-size: 400%;
      box-shadow: 0 0 2px #13b3ff, 0 0 4px #13b3ff;
      border-radius: 0.25rem;
      opacity: 0;
      transition: 0.3s;
    }
    &:hover {
      animation: rgbscroll 8s linear infinite;
	    filter: blur;
      &::before {
        filter: blur(calc(var(--rgbshadowsize) + 10px));
        opacity: 1;
        animation: rgbscroll 8s linear infinite;
      }
    }
  }
  $btncolors: (
    "red": #ff0000,
    "main": colorscheme('lightblue'),
    "success": colorscheme('lime'),
    "🤯": colorscheme("darkblue"),
    "github": #333333
  );
  @each $item, $color in $btncolors {
    &.btn-#{$item} {
      background: map-get($btncolors, $item);
      position: relative;
      margin: 0.2rem;
      color: colorscheme('white');
      border-radius: 0.25rem;
      border: 2px solid transparent;
      box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px
        rgba(0,0,0,0.5), 0 5px 20px rgba(0,0,0,.5), inset 0 0 15px rgba(0,0,0,.2);
      box-sizing: border-box;
      &:hover {
        @if map-get($btncolors, $item) == #ff0000 {
          i {
            transform: rotate(45deg);
          }
        }
        box-shadow: 0 0 0 4px #353535, 
          0 0 0 5px #3e3e3e, 
          inset 0 0 0px rgba(0,0,0,1), 
          0 5px 20px rgba(0,0,0,.5), 
          inset 0 0 15px rgba(0,0,0,.2);
      }
    }
  }
}
@keyframes rgbscroll {
	0%
	{
		background-position: 0%;
	}
	100%
	{
		background-position: 400%;
	}
}
@keyframes pixel {
  0% {
      background-position-y: 0px;
  }
  100% {
      background-position-y: -480px;
  }
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: colorscheme('white');
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: colorscheme('white');
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: colorscheme('white');
}
.rgbline {
    background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    height: 3px;
    border: 0;
    background-size: 200% 200%;
    box-shadow: 0px 1px 10px #23d5ab;
}
@keyframes rgb-link {
    0% {
        background-position-x: left;
    }
    50% {
        background-position-x: right;
    }
    100% {
        background-position-x: left;
    }
}
/*InputBox*/
.form-floating {
  &.custom {
    margin: 1rem;
    color: colorscheme('white');
    background: none;
    outline: none !important;
    .form-control, .form-select {
      &.form-select > * {
        background: none !important;
        color: lime;
        
      }
      border: 1px solid #ced4da !important;
      color: colorscheme('white');
      box-shadow: none;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-box-shadow: 0 0 0px 1000px #fff inset;
          -webkit-text-fill-color: colorscheme('white');
      }
      background: none !important;
      &.is-valid {
        box-shadow: inset 0 0 1px #00ff00, inset 0 0 2px #00ff00, inset 0 0 3px #00ff00 !important;
      }
      &.is-invalid {
        border-color: initial;
        box-shadow: inset 0 0 1px #ff0000, inset 0 0 2px #ff0000, inset 0 0 3px #ff0000 !important;
      }
    }
  }
}
/* Old Input Box */
.inputBox {
  position: relative;
  vertical-align: middle;
  margin-bottom: 40px;
  width: 100%;
  //background: colorscheme('cyan');
  border-radius: calc(0.25rem - 1px);
  input, textarea {
    &::placeholder {
      color: colorscheme('white');
    }
    position: relative;
    background: transparent;
    text-align: left;
    vertical-align: middle;
    outline: none;
    width: 100%;
    border: none;
    color: colorscheme('white');
    padding-bottom: 10px;
    font-size: 1rem;
    letter-spacing: 1px;
    border-bottom: 2px solid colorscheme('white');
    &[type="submit"] {
      padding: 1rem;
      margin-top: 10px;
      cursor: pointer;
      background: colorscheme('lightblue');
      font-size: 1rem;
      width: 30%;
      align-items: center;
      text-align: center;
      align-content: center;
      &:focus, &:focus-within {
          background: colorscheme('lime');
          color: #111111;
      }
    }
    &[type="file"] {
      display: none;
    }
    &[type="checkbox"] {
      opacity: 0;
      position: absolute;
      height: 0;
      width: 0;
      &:hover ~ .checkBox {
        background: red;
      }
      &:checked ~ .checkBox {
        border: 3px solid colorscheme('lime');
      }
      &:checked ~ .checkBox:after {
        display: block;
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
      -webkit-text-fill-color: colorscheme('white');
      background: rgba(0,0,0,0);
      transition: background-color 5000s ease-in-out 0s;
    }
    &:focus ~ .spantxt,
    &:focus-within ~ .spantxt,
    &:active ~ .spantxt,
    &:not(:placeholder-shown) ~ .spantxt {
      transform: translateY(-24px);
    }
  }
  .checkBox {
    position: absolute;
    left: 0;
    padding: 0.5rem;
    background: gold;
    &::after {
      position: absolute;
      display: none;
      content: '';
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  .custom {
    display: inline-block;
    border-bottom: 2px solid colorscheme('white');
    padding: 6px 12px;
    cursor: progress !important;
  }
  .spantxt {
    position: absolute;
    font-size: auto;
    left: 0px;
    display: inline-block;
    pointer-events: none;
    letter-spacing: 1px;
    color: lighten(colorscheme('lime'), 20);
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
    &.valid {
      background: #00ff00;
      box-shadow: 0 0 0.25rem #00ff00, 0 0 0.50rem #00ff00, 0 0 1rem #00ff00;
    }
    &.invalid {
      background: #ff0000;
      box-shadow: 0 0 0.25rem #ff0000, 0 0 0.50rem #ff0000, 0 0 1rem #ff0000;
    }
  }
}

.card {
  &.project {
    font-family: $titlefont;
    background-color: colorscheme('darkblue') !important;
    img {
      mix-blend-mode: normal;
      object-fit: cover;
      filter: grayscale(100);
      border-radius: $border-radius;
      transition: all 0.2s ease-in-out !important;
      //object-position: 0% 0%;
      &.maskimage {
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
        mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0));
      }
    }
    &:hover {
      transition: all 0.2s ease-in-out !important;
      //filter: drop-shadow(4px 4px 10px black);
      img {
        filter: grayscale(0);
        /*transform: matrix3d(
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1.1
        );*/
      }
    }
  }
  &.newspost {
    &:hover {
      .topleft {
        display: block;
      }
    }
    .topleft {
      position: absolute;
      top: 0;
      left: 16px;
      display: none;
    }
    .bottomleft {
      position: absolute;
      bottom: 0;
      left: 16px;
    }
    list-style-type: none;
    margin: 0rem 0rem;
    //background: gradientscheme("moonlit");
    transition: all 0.3s ease;
    background: colorscheme('blue');
    width: 100%;
    .card-img-top {
      object-fit: cover;
      object-position: top;
      //clip-path: polygon(0% 10%, 100% calc(20% - 1px), 100% 100%, 0% calc(90% - 1px));  
      &::before {
        border-style: solid;
        border-width: 0 401px 55px 0;
        border-color: transparent #1e1e1e transparent transparent;
      }
    }
    .card-title {
      border-bottom: 1px solid colorscheme('white');
      padding-bottom: 0.5rem;
      font-family: 'MedievalSharp';
    }
    .card-text {
      &.description {
        font-family: 'MedievalSharp';
        &::first-letter {
          position: relative;
          font-size: 3ch;
          color: #f05053;
          text-transform: uppercase;
        }
      }
    }
    .card-header {
      display: flex;
      flex-direction: row;
      width: 100%;
      background: colorscheme('darkblue');
      .profileImg {
        position: absolute;
        align-self: flex-end;
        background-repeat: no-repeat;
        float: right;
        object-fit: cover;
        right: 10px;
        border-radius: 50%;
        //mix-blend-mode: multiply;
        overflow:hidden
      }
    }
  }
}
 /* About Me link bar */
$iconcolors: (
  "facebook":#3B5998,
  "twitter":#55ACEE,
  "twitch": rgba(145, 71, 255, 0.9),
  "discord": #8697F6,
  "github": #333333,
  "steam": #173e58,
  "linkedin":#007bb5,
  "cv": #009bb5,
  "js": #EFD81D,
  "javascript": #EFD81D,
  "html": #D84B24,
  "css": #3492CB,
  "sass": #C45F92,
  "scss": #C45F92,
  "vue": #49B180,
  "ubuntu": #D24413,
  "python": #dddddd,
  "aspdotnet": #3460A6,
  "csharp": #652076,
  "assembly": #E11F48,
  "makefile": #F27C26,
  "objective-c": #1876D8,
  "cplusplus": #6092C7,
  "c": #5766B6,
  "php": #687AAD,
  "hack": #808080
);
@each $item, $color in $iconcolors {
  .bg-#{$item} {
    background: map-get($iconcolors, $item) !important;
  }
}
.icon-bar {
  &.icons {
    font-size: 1.8rem;
    opacity: 1;
    & > * {
      @each $color, $value in $iconcolors {
          &.#{$color}  {
              color: $value;
              border: 1mm outset $value;
          }
      }
      &:hover {
          opacity: 1;
      }
    }
  }
  &.social {
    font-size: 1.3rem;
    & > * {
      border-radius: 30% 30%;
      opacity: 0.7;
      color: colorscheme('white');
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,5.2);
      &:hover {
        box-shadow: none;
        font-size: 1.8rem;
      }
    }
  }
  & > * {
    justify-content: center;
    align-items: center;
    display: inline-flex;
    align-items: center;
    align-content: center;
    vertical-align: middle;
    -webkit-transition: all 0.5s ease-in-out;
    text-align: center;
    border: 1px solid transparent;
    padding: 1rem;
    width: 4rem;
    height: 4rem;
    transition: all 0.3s ease;
    margin: 5px 2px;
    line-height: 4rem;
    position: relative;
  }
}

/* Roles colors */
$rolecolor: (
  "Peasant": #42210C,
  "Tradesman": #279e00,
  "Knight": #727272,
  "Nobles": #6d0821,
  "Preast": #87049b,
  "Admin": #dc3545
);
@each $item, $color in $rolecolor {
  .bg-#{$item} {
    background: map-get($rolecolor, $item) !important;
  }
}


</style>