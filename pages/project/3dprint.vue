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
            <li v-for="post in filteredList" :key="post" class="printcard col-md-4">
                <div class="printcard-body">
                    <div class="printcard2">
                    <img class="printcard-img-top" v-bind:src="post.image" alt="PCI Bracket">
                    <h5 class="printcard-title">{{ post.name }}</h5>
                    <p class="printcard-text">{{ post.category }}</p>
                    <a href="~assets/3D-Object/PCIbracketSquare.stl" class="pixelbutton" download><i class="fas fa-download"></i> Download</a></div>
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
const path = require('path');
class Print {
    constructor(name, category, image) {
        this.name = name;
        this.category = category;
        this.image = image;
    }
}
export default {
    template: '<3d-print/>',
    transition: 'slide-bottom',
    data() {
        return {
            images: null,
            stl: null,
            search: '',
            printList: []
        }
    },
    mounted() {
        this.loadImages(require.context('~/static/images/3D-Icons/', true, /\.PNG$/))
        //this.loadStl()
    },
    methods: {
        async loadStl() {
            this.stl = [];
            const images = (await axios.$get('~/api/carousel/images')).data

            this.stl.push(images)
            console.log(this.stl);
        },
        loadImages(r) {
            this.images = [];
            r.keys().forEach(key => {
                //this.images.push({ pathLong: r(key), pathShort: key, name: key.split('/') })
                let category = '';
                if (key.includes('PC')) {
                    category == 'PC'
                } else if (key.includes('40mm')) {
                    category == '80mm'
                } else if (key.includes('80mm')) {
                    category == '80mm'
                } else if (key.includes('120mm')) {
                    category == '120mm'
                } else if (key.includes('140mm')) {
                    category == '140mm'
                } else if (key.includes('200mm')) {
                    category == '200mm'
                }
                let print = new Print(
                    key.split('./').join('').replace('.PNG', '').replace('Fan-Cover/', ''),
                    category,
                    r(key)
                )
                this.printList.push(print);
            });
        },
        async filterData(category) {
            console.log(category);
            //return this.printList.filter(category);
            
        }
    },
    computed: {
        filteredList() {
            return this.printList.filter(post => {
                return post.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>