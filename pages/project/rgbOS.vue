<template>
   <div id='rgbOS'>
      <Navbar/>
      <div class="jumbotron">
         <p class="display-4"><span style="color: red;">R</span><span style="color: green;">G</span><span style="color: blue;">B</span>os</p>
         <p class="lead">Linux distro test</p>
      </div>
      <ul class="rgbOS">
         <li><span class="caret">rgbOS Files</span>
            <ul class="nested">
               <li><span class="caret">build</span>
                  <ul class="nested">
                     <li><span class="caret">kernel</span>
                        <ul class="nested">
                           <li>main.o</li>
                        </ul>
                     </li>
                     <li><span class="caret">x86_64</span>
                        <ul class="nested">
                           <li><span class="caret">boot</span>
                              <ul class="nested">
                                 <li>header.o</li>
                                 <li>main.o</li>
                                 <li>main64.o</li>
                              </ul>
                           </li>
                           <li>print.o</li>
                        </ul>
                     </li>
                  </ul>
               </li>
               <li><span class="caret">buildenv</span>
                  <ul class="nested">
                     <li><span class="caret">x86_64</span>
                        <ul class="nested">
                           <li>kernel.bin</li>
                           <li>kernel.iso</li>
                        </ul>
                     </li>
                     <li>Dockerfile</li>
                  </ul>
               </li>
               <li><span class="caret">dist</span>
                  <ul class="nested">
                     <li><span class="caret">x86_64</span>
                        <ul class="nested">
                           <li>kernel.bin</li>
                           <li>kernel.iso</li>
                        </ul>
                     </li>
                  </ul>
               </li>
               <li><span class="caret">src</span>
                  <ul class="nested">
                     <li><span class="caret">impl</span>
                        <ul class="nested">
                           <li><span class="caret">kernel</span>
                              <ul class="nested">
                                 <li>main.c</li>
                              </ul>
                           </li>
                           <li><span class="caret">x86_64</span>
                              <ul class="nested">
                                 <li><span class="caret">boot</span>
                                    <ul class="nested">
                                       <li>header.asm</li>
                                       <li>main.asm</li>
                                       <li>main64.asm</li>
                                    </ul>
                                 </li>
                                 <li>print.c</li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                     <li><span class="caret">intf</span>
                        <ul class="nested">
                           <li>keyboard.h</li>
                           <li>print.h</li>
                        </ul>
                     </li>
                  </ul>
               </li>
               <li><span class="caret">targets</span>
                  <ul class="nested">
                     <li><span class="caret">x86_64</span>
                        <ul class="nested">
                           <li><span class="caret">iso</span>
                              <ul class="nested">
                                 <li><span class="caret">boot</span>
                                    <ul class="nested">
                                       <li><span class="caret">grub</span>
                                          <ul class="nested">
                                             <li>grub.cfg</li>
                                          </ul>
                                       </li>
                                       <li>kernel.bin</li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li>linker.ld</li>
                        </ul>
                     </li>
                  </ul>
               </li>
               <li>Makefile</li>
            </ul>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   template: 'rgbOS',
   transition: 'slide-bottom',
   methods: {
      fileview() {
         var toggler = document.getElementsByClassName("caret");
         var i;

         for (i = 0; i < toggler.length; i++) {
         toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
         });
         }
      }
   },
   mounted() { 
      this.fileview()
   }
}
</script>
<style lang="scss">
/* Remove default bullets */
ul, .rgbOS {
  list-style-type: none;
}

/* Remove margins and padding from the parent ul */
.rgbOS {
  margin: 0;
  padding: 0;
}

/* Style the caret/arrow */
.caret {
  cursor: pointer;
  user-select: none; /* Prevent text selection */
}

/* Create the caret/arrow with a unicode, and style it */
.caret::before {
  content: "\25B6";
  color: black;
  display: inline-block;
  margin-right: 6px;
}

/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
.caret-down::before {
  transform: rotate(90deg);
}

/* Hide the nested list */
.nested {
  display: none;
}

/* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
.active {
  display: block;
  padding: 0;
  li {
     margin-left: 0.5%;
  }
}
</style>