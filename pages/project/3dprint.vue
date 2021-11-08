<template>
    <div id="3d-print">
        <div id="preview" class="container-fluid">
            <div class="jumbotron">
                <h1 class="display-4">3D Print</h1>
                <p class="lead">Here can you download some of my 3d models</p>
                <hr class="my-4">
            </div>
        </div>
    <div class="container-fluid">
        
        <!--Søkefeltet-->
        <input type="text" v-model="search" id="searchbar" placeholder="Search for 3D Objects" title="Type in a 3D object"/>
        <ul id="category" class="nav nav-tabs">
            <li class="nav-item"> 
                <a class="nav-link" v-on:click="setFilter('all')">Vis Alle</a> 
            </li>
            <li class="nav-item"> 
                <a class="nav-link" v-on:click="setFilter('pc')">PC</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" v-on:click="setFilter('steampunk')">Steampunk</a>
            </li>
            <!-- Dropdown -->
            <!-- Sort Icons: -->
            <!--
            <i class="fa-solid fa-arrow-down-a-z"></i>
            <i class="fa-solid fa-arrow-down-z-a"></i>


            -->   
            <li class="nav-item dropdown"> 
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button">Fan Cover</a>
            <div class="dropdown-menu"> 
                <a class="dropdown-item" v-on:click="filterSelection('fancover')">Alle størrelser</a>
                <a class="dropdown-item" v-on:click="filterSelection('40mm')">40mm</a> 
                <a class="dropdown-item" v-on:click="filterSelection('80mm')">80mm</a> 
                <a class="dropdown-item" v-on:click="filterSelection('120mm')">120mm</a>
                <a class="dropdown-item" v-on:click="filterSelection('14cm')">140mm</a> 
                <a class="dropdown-item" v-on:click="filterSelection('200mm')">200mm</a> 
            </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-on:click="setFilter('other')">Andre</a>
            </li>
        </ul>
    </div>

 <!--SEARCH FILTER: https://codepen.io/AndrewThian/pen/QdeOVa-->

    <div class="container-fluid">
        <ul class="row" id="items">
            <transition-group name="filteredList"></transition-group>
            <li v-for="object in filteredList" v-bind:key="object">
                <div class="printcard col-md-4" v-if="filter === 'all' || filter === object.category">
                    <div class="printcard-body">
                        <div class="printcard2">
                            <img class="printcard-img-top" v-bind:src="object.image" :alt="object.name">
                            <h5 class="printcard-title">{{ object.name }}</h5>
                            <p class="printcard-text">{{ object.description }}</p>
                            <a v-bind:href="object.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="printcard col-md-4">
                <div class="box">
                    <div class="icon"><i class="fas fa-code"/></div>
                    <div class="content">Content</div>
                </div>
            </li>
            <!--<li class="printcard col-md-4 filterDiv pc">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/PCIbracketSquare.png" alt="PCI Bracket">
                    <h5 class="printcard-title">PCI Bracket</h5>
                    <p class="printcard-text"></p>
                    <a href="~assets/3D-Object/PCIbracketSquare.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a></div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/PCIbracketSquare2.png" alt="PCI Bracket">
                    <h5 class="printcard-title">PCI Bracket</h5>
                    <p class="printcard-text"></p>
                    <a href="~assets/3D-Object/PCIbracketSquare2.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
                </li>
            <li class="printcard col-md-4 filterDiv other">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Koppunderlag.png" alt="Koppunderlag">
                    <h5 class="printcard-title">Koppunderlag</h5>
                    <p class="printcard-text"></p>
                    <a href="~assets/3D-Object/KoppUnderlag.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv other">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Sjakkbrikke.png" alt="Sjakkbrikker">
                    <h5 class="printcard-title">Sjakkbrikker</h5>
                    <p class="printcard-text"></p>
                    <a href="~assets/3D-Object/Sjakkbrikke.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv other">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/WoWkeychain.png" alt="WoW nøkkelanheng">
                    <h5 class="printcard-title">WoW Nøkkelanheng</h5>
                    <p class="printcard-text"></p>
                    <a href="~assets/3D-Object/WoWkeychain.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc">
            <div class="printcard-body">
                <div class="printcard2">
                <img class="printcard-img-top" src="/images/3D-Icons/CDromCover.PNG" alt="CD rom cover">
                <h5 class="printcard-title">CD rom cover</h5>
                <p class="printcard-text"></p>
                <a href="~assets/3D-Object/CDromCover.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
            </div>
                </li>
            <li class="printcard col-md-4 filterDiv steampunk">
            <div class="printcard-body">
                <div class="printcard2">
                <img class="printcard-img-top" src="/images/3D-Icons/SteampunkGear.PNG" alt="printcard image cap">
                <h5 class="printcard-title">Steampunk Tannhjul</h5>
                <p class="printcard-text"></p>
                <a href="~assets/3D-Object/SteampunkGear.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
            </div>
                </li>
            <li class="printcard col-md-4 filterDiv other">
            <div class="printcard-body">
                <div class="printcard2">
                <img class="printcard-img-top" src="/images/3D-Icons/PepperkakeformUnity.PNG" alt="printcard image cap">
                <h5 class="printcard-title">Pepperkakeform Unity</h5>
                <p class="printcard-text"></p>
                <a href="~assets/3D-Object/PepperkakeformUnity.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
            </div>
                </li>
            <li class="printcard col-md-4 filterDiv pc">
            <div class="printcard-body">
                <div class="printcard2">
                <img class="printcard-img-top" src="/images/3D-Icons/headsett.PNG" alt="printcard image cap">
                <h5 class="printcard-title">Headsett Holder vegg</h5>
                <p class="printcard-text"></p>
                <a href="~assets/3D-Object/headsett.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
            </div>
                </li>
            <li class="printcard col-md-4 filterDiv pc fancover 14cm">
            <div class="printcard-body">
                <div class="printcard2">
                <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/AsusROG140mm.PNG" alt="printcard image cap">
                <h5 class="printcard-title">Asus ROG</h5>
                <p class="printcard-text">Størrelse: 140mm</p>
                <a href="~assets/3D-Object/Fan-Cover/AsusROG140mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
            </div>
                </li>
            <li class="printcard col-md-4 filterDiv pc fancover 40mm">
            <div class="printcard-body">
                <div class="printcard2">
                <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/Jagermeister40mm.PNG" alt="printcard image cap">
                <h5 class="printcard-title">Jagermeister</h5>
                <p class="printcard-text">Størrelse: 40mm</p>
                <a href="~assets/3D-Object/Fan-Cover/Jagermeister40mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
            </div>
                </li>
            <li class="printcard col-md-4 filterDiv pc fancover 120mm">
            <div class="printcard-body">
                <div class="printcard2">
                <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/Jagermeister120mm.PNG" alt="printcard image cap">
                <h5 class="printcard-title">Jagermeister</h5>
                <p class="printcard-text">Størrelse: 120mm</p>
                <a href="~assets/3D-Object/Fan-Cover/Jagermeister120mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
            </div>
                </li>
            <li class="printcard col-md-4 filterDiv pc fancover 80mm">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/Hexagon80mm.PNG" alt="printcard image cap">
                    <h5 class="printcard-title">Hexagon</h5>
                    <p class="printcard-text">Størrelse: 80mm</p>
                    <a href="~assets/3D-Object/Fan-Cover/Hexagon80mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc fancover 120mm">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/AsusROG120mm.PNG" alt="printcard image cap">
                    <h5 class="printcard-title">Asus ROG</h5>
                    <p class="printcard-text">Størrelse: 120mm</p>
                    <a href="~assets/3D-Object/Fan-Cover/AsusROG120mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc fancover 120mm">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/Mercedes120mm.PNG" alt="printcard image cap">
                    <h5 class="printcard-title">Mercedes</h5>
                    <p class="printcard-text">Størrelse: 120mm</p>
                    <a href="~assets/3D-Object/Fan-Cover/Mercedes120mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc fancover 120mm">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/MSI120mm.PNG" alt="printcard image cap">
                    <h5 class="printcard-title">MSI</h5>
                    <p class="printcard-text">Størrelse: 120mm</p>
                    <a href="~assets/3D-Object/Fan-Cover/MSI120mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc fancover 120mm">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/MSI120mmV2.PNG" alt="printcard image cap">
                    <h5 class="printcard-title">MSI</h5>
                    <p class="printcard-text">Størrelse: 120mm</p>
                    <a href="~assets/3D-Object/Fan-Cover/MSI120mmV2.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc fancover 120mm">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/WoW120mm.PNG" alt="printcard image cap">
                    <h5 class="printcard-title">WoW</h5>
                    <p class="printcard-text">Størrelse: 120mm</p>
                    <a href="~assets/3D-Object/Fan-Cover/WoW120mm.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc fancover 200mm">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" src="/images/3D-Icons/Fan-Cover/MSI200mm.PNG" alt="printcard image cap">
                    <h5 class="printcard-title">MSI</h5>
                    <p class="printcard-text">Størrelse: 200mm</p>
                    <a href="~assets/3D-Object/Fan-Cover/MSI200mm.STL" class="pixelbutton" download><i class="fas fa-download"></i> Download</a> </div>
                </div>
            </li>-->
            </ul>
        </div>
        <button @click="topFunction()" id="scrollToTopBtn" title="Go to top">Top</button>
    </div>
</template>

<script lang="text/javascript">
const axios = require('axios');
import Modal from '~/components/Modal.vue';
const path = require('path');
class Print {
    constructor(name, description, category, stl, image) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.stl = stl;
        this.image = image;
    }
}
export default {
    template: '<3d-print/>',
    components: { Modal },
    transition: 'slide-bottom',
    data() {
        return {
            images: null,
            filter: 'all',
            search: '',
            printList: null,
            showModal: false
        }
    },
    mounted() {
        this.load3Dobjects(require.context('~/static/images/3D-Icons/', true, /\.(jpg|png|PNG)\b/))
    },
    methods: {
        async load3Dobjects(r) {
            this.printList = [];
            const content = await this.$content('3dprint').fetch();
                
            r.keys().forEach(async (key) => {
                //this.images.push({ pathLong: r(key), pathShort: key, name: key.split('/') })
                let name = key.split('./').join('').replace('.png', '').replace('.PNG', '').replace('Fan-Cover/', '');
                let stl = content[name.toLowerCase()].path;
                let description = content[name.toLowerCase()].description;
                let category = content[name.toLowerCase()].category;
                //let stl = `~/assets/3D-Object/${name}.stl`
                //name = name.replace('Fan-Cover/', '');
                let print = new Print(
                    name,
                    description,
                    category,
                    stl,
                    r(key),
                );
                this.printList.push(print);
            });
        },
        setFilter: function(filter) {
			this.filter = filter;
            console.log(this.filter)
		},
        scroll(event) {
            var scrollToTop = document.getElementById("scrollToTopBtn");
            
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                scrollToTop.style.display = "block";
            } else {
                scrollToTop.style.display = "none";
            }
        },
    },
    created() {
        window.addEventListener('scroll', this.scroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scroll);
    },
    computed: {
        filteredList() {
            if (!this.printList) return;
            return this.printList.filter(post => {
                return post.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>
<style lang="scss">

.printcard {
    list-style-type: none;
    min-height: 1px;
    flex: 1 1 auto;
    .box {
        position: relative;
        overflow: hidden;
        width: 350px;
        height: 280px;
        border-radius: 20px;
        background: #51446e;
        .icon {
            position: absolute;
            top: 0%;
            left: 0;
            width: 100%;
            height: 100%;
            transition: 0.5s;
            border-radius: 20px;
            background: red;
            z-index: 2;
            text-align: center;
            vertical-align: middle;
            i {
                font-size: 4ch;
                transform: translateY(50%);
            }
        }
        &:hover {
            .icon {
                top: 30px;
                left: calc(50% - 40px);
                width: 80px;
                height: 80px;
                border: 50%;
            }
        }
        .content {
            position: relative;
            padding: 20px;
            color: #fff;
            margin-top: 100px;
            text-align: center;
            z-index: 1;
        }
    }
}
#scrollToTopBtn {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 5;
  font-size: 2ch;
  border: none;
  outline: none;
  background: linear-gradient(45deg, #ff7272, #ff0000, #7f0000);
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: calc(0.25rem - 1px);
  transition: all 0.5s ease;
  &:hover {
      transform: scale(1.1);
  }
}
#items {
    list-style-type: none;
}


</style>