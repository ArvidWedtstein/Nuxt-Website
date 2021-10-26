<template>
    <div id="3d-print">
        <Navbar/>
        <div id="preview" class="container-fluid">
            <div class="jumbotron">
                <h1 class="display-4">3D Print</h1>
                <p class="lead">Here can you download some of my 3d models</p>
                <hr class="my-4">
            </div>
        </div>
    <div class="container-fluid">
        <!--Søkefeltet-->
        <input type="text" v-model="search" id="searchbar" onKeyUp="search()" placeholder="Søk for 3D Objekter" title="Skriv inn"/>
        <ul id="category" class="nav nav-tabs">
            <li class="nav-item"> 
                <a class="nav-link" onclick="filterSelection('all')">Vis Alle</a> 
            </li>
            <li class="nav-item"> 
                <a class="nav-link"  @click="this.filterData(pc)">PC</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="filterSelection('steampunk')">Steampunk</a>
            </li>
            <!-- Dropdown -->
            <li class="nav-item dropdown"> 
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button">Fan Cover</a>
            <div class="dropdown-menu"> 
                <a class="dropdown-item" onclick="filterSelection('fancover')">Alle størrelser</a>
                <a class="dropdown-item" onclick="filterSelection('40mm')">40mm</a> 
                <a class="dropdown-item" onclick="filterSelection('80mm')">80mm</a> 
                <a class="dropdown-item" onclick="filterSelection('120mm')">120mm</a>
                <a class="dropdown-item" onclick="filterSelection('14cm')">140mm</a> 
                <a class="dropdown-item" onclick="filterSelection('200mm')">200mm</a> 
            </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" onclick="filterSelection('other')">Andre</a>
            </li>
        </ul>
        <!--Knapper til hvordan 3D-Objektene skal vises-->
        <div id="btnContainer">
            <!--<button class="btnView" data-toggle="tooltip" data-placement="left" title="List View" onclick="listView()"><i class="fa fa-bars"></i> List</button>--> 
            <button class="btnView active" data-toggle="tooltip" data-placement="right" title="Grid View" onclick="gridView()"><i class="fa fa-th"></i> Grid</button>	
        </div>
    </div>

 <!--SEARCH FILTER: https://codepen.io/AndrewThian/pen/QdeOVa-->

    <div class="container-fluid">
        <ul class="row" id="items">
            <li v-for="(object, index) in filteredList" v-bind:key="index" class="printcard col-md-4">
                
                <!--<div class="psresponsive">
                    <div class="contentBox">
                        <img v-bind:src="object.image" v-bind:alt="object.name" class="img-fluid">
                        <div class="content">
                            <p class="desc">{{ object.name }}</p>
                            <p class="desc">{{ object.description }}</p>
                            <a v-bind:href="object.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a>
                            
                        </div>
                    </div>
                </div>-->
                
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" v-bind:src="object.image" alt="PCI Bracket">
                    <h5 class="printcard-title">{{ object.name }}</h5>
                    <p class="printcard-text">{{ object.description }}</p>
                    <a v-bind:href="object.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a></div>
                </div>
            </li>
            <!--<li class="col-md-4 rgbcard filterDiv pc">
                <div class="printcard-body">
                    <div class="printcard2">
                        <img class="printcard-img-top" src="/images/3D-Icons/PCIbracketHexagon.png" alt="PCI Bracket">
                        <h5 class="printcard-title">PCI Bracket</h5>
                        <p class="printcard-text"></p>
                        <a href="~assets/3D-Object/PCIbracketHexagon.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </li>
            <li class="printcard col-md-4 filterDiv pc">
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
                <!--<li v-for="(item, index) in images" :key="item.images" class="col-md-4 printcard filterDiv pc">
                <div class="printcard-body">
                    <div class="printcard2">
                        <img class="printcard-img-top" :src="images[index].pathShort" alt="PCI Bracket">
                        <h5 class="printcard-title">PCI Bracket</h5>
                        <p class="printcard-text"></p>
                        <a href="~assets/3D-Object/PCIbracketHexagon.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a>
                    </div>
                </div>
            </li>-->
            </ul>
        </div>
	  <button onclick="topFunction()" id="scrollToTopBtn" title="Go to top">Top</button>
    </div>
</template>

<script lang="text/javascript">
const axios = require('axios');
import Modal from '~/components/Modal.vue';
const path = require('path');
class Print {
    constructor(name, description, stl, image) {
        this.name = name;
        this.description = description;
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
            stl: null,
            search: '',
            printList: null,
            showModal: false
        }
    },
    mounted() {
        this.load3Dobjects(require.context('~/static/images/3D-Icons/', true, /\.(jpg|png|PNG)\b/))
        //this.loadStl()
    },
    methods: {
        async loadStl() {
            this.stl = [];
            const images = (await axios.$get('~/api/carousel/images')).data

            this.stl.push(images)
            console.log(this.stl);
        },
        async load3Dobjects(r) {
            this.printList = [];
            const content = await this.$content('3dprint').fetch();
                
            r.keys().forEach(async (key) => {
                //this.images.push({ pathLong: r(key), pathShort: key, name: key.split('/') })
                let name = key.split('./').join('').replace('.png', '').replace('.PNG', '').replace('Fan-Cover/', '');
                let stl = content[name.toLowerCase()].path;
                let description = content[name.toLowerCase()].description;
                //let stl = `~/assets/3D-Object/${name}.stl`
                //name = name.replace('Fan-Cover/', '');
                let print = new Print(
                    name,
                    description,
                    stl,
                    r(key),
                );
                this.printList.push(print);
            });
        }
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