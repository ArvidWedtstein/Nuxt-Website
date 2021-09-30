<template>
    <div id="3d-print">
        <nav class="navbar navbar-expand-lg navbar-light"> <a href="./" class="navbar-brand animate__animated animate__backInLeft"><img style="width: 60px;filter: contrast(200%);" src="/ArvidLogo.png" alt="logo"></a>
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
                        <a class="nav-link" href="../contact/" id="contact1" aria-controls="contacttab" aria-expanded="true">Kontakt</a> 
                    </li>
                </ul>
            </div>
        </nav>
        <div id="preview" class="container-fluid">
            <div class="jumbotron">
                <h1 class="display-4">3D Print</h1>
                <p class="lead">Her kan du laste ned 3D Modeller jeg har laget.</p>
                <hr class="my-4">
            </div>
        </div>
    <div class="container-fluid">
        <!--Søkefeltet-->
        <input type="text" id="searchbar" onKeyUp="search()" placeholder="Søk for 3D Objekter" title="Skriv inn"/>
        <ul id="category" class="nav nav-tabs">
            <li class="nav-item"> 
                <a class="nav-link" onclick="filterSelection('all')">Vis Alle</a> 
            </li>
            <li class="nav-item"> 
                <a class="nav-link" onclick="filterSelection('pc')">PC</a> 
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
            <button class="btnView" data-toggle="tooltip" data-placement="left" title="List View" onclick="listView()"><i class="fa fa-bars"></i> List</button> 
            <button class="btnView active" data-toggle="tooltip" data-placement="right" title="Grid View" onclick="gridView()"><i class="fa fa-th"></i> Grid</button>	
        </div>
    </div>



    <div class="container-fluid">
        <ul class="row" id="items">
        <li class="col-md-4 card filterDiv pc">
        <div class="card-body">
            <div class="card2">
                <img class="card-img-top" src="/3D-Icons/PCIbracketHexagon.png" alt="PCI Bracket">
                <h5 class="card-title">PCI Bracket</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/PCIbracketHexagon.stl" class="pixelbutton" download><i class="fas fa-download"></i> Last Ned</a></div>
        </div>
            </li>
        <li class="card col-md-4 filterDiv pc">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/PCIbracketSquare.png" alt="PCI Bracket">
                <h5 class="card-title">PCI Bracket</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/PCIbracketSquare.stl" class="pixelbutton"><i class="fas fa-download"></i> Last ned</a></div>
            </div>
            </li>
        <li class="card col-md-4 filterDiv pc">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/PCIbracketSquare2.png" alt="PCI Bracket">
                <h5 class="card-title">PCI Bracket</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/PCIbracketSquare2.stl" class="pixelbutton"><i class="fas fa-download"></i> Last ned</a> </div>
            </div>
            </li>
        <li class="card col-md-4 filterDiv other">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Koppunderlag.png" alt="Koppunderlag">
                <h5 class="card-title">Koppunderlag</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/KoppUnderlag.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
            </li>
            <li class="card col-md-4 filterDiv other">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Sjakkbrikke.png" alt="Sjakkbrikker">
                <h5 class="card-title">Sjakkbrikker</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/Sjakkbrikke.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv other">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/WoWkeychain.png" alt="WoW nøkkelanheng">
                <h5 class="card-title">WoW Nøkkelanheng</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/WoWkeychain.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/CDromCover.PNG" alt="CD rom cover">
                <h5 class="card-title">CD rom cover</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/CDromCover.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv steampunk">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/SteampunkGear.PNG" alt="Card image cap">
                <h5 class="card-title">Steampunk Tannhjul</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/SteampunkGear.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv other">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/PepperkakeformUnity.PNG" alt="Card image cap">
                <h5 class="card-title">Pepperkakeform Unity</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/PepperkakeformUnity.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/headsett.PNG" alt="Card image cap">
                <h5 class="card-title">Headsett Holder vegg</h5>
                <p class="card-text"></p>
                <a href="~assets/3D-Object/headsett.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 14cm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/AsusROG140mm.PNG" alt="Card image cap">
                <h5 class="card-title">Asus ROG</h5>
                <p class="card-text">Størrelse: 140mm</p>
                <a href="~assets/3D-Object/Fan-Cover/AsusROG140mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 40mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/Jagermeister40mm.PNG" alt="Card image cap">
                <h5 class="card-title">Jagermeister</h5>
                <p class="card-text">Størrelse: 40mm</p>
                <a href="~assets/3D-Object/Fan-Cover/Jagermeister40mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 120mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/Jagermeister120mm.PNG" alt="Card image cap">
                <h5 class="card-title">Jagermeister</h5>
                <p class="card-text">Størrelse: 120mm</p>
                <a href="~assets/3D-Object/Fan-Cover/Jagermeister120mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 80mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/Hexagon80mm.PNG" alt="Card image cap">
                <h5 class="card-title">Hexagon</h5>
                <p class="card-text">Størrelse: 80mm</p>
                <a href="~assets/3D-Object/Fan-Cover/Hexagon80mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 120mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/AsusROG120mm.PNG" alt="Card image cap">
                <h5 class="card-title">Asus ROG</h5>
                <p class="card-text">Størrelse: 120mm</p>
                <a href="~assets/3D-Object/Fan-Cover/AsusROG120mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 120mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/Mercedes120mm.PNG" alt="Card image cap">
                <h5 class="card-title">Mercedes</h5>
                <p class="card-text">Størrelse: 120mm</p>
                <a href="~assets/3D-Object/Fan-Cover/Mercedes120mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 120mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/MSI120mm.PNG" alt="Card image cap">
                <h5 class="card-title">MSI</h5>
                <p class="card-text">Størrelse: 120mm</p>
                <a href="~assets/3D-Object/Fan-Cover/MSI120mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 120mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/MSI120mmV2.PNG" alt="Card image cap">
                <h5 class="card-title">MSI</h5>
                <p class="card-text">Størrelse: 120mm</p>
                <a href="~assets/3D-Object/Fan-Cover/MSI120mmV2.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 120mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/WoW120mm.PNG" alt="Card image cap">
                <h5 class="card-title">WoW</h5>
                <p class="card-text">Størrelse: 120mm</p>
                <a href="~assets/3D-Object/Fan-Cover/WoW120mm.stl" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            <li class="card col-md-4 filterDiv pc fancover 200mm">
            <div class="card-body">
                <div class="card2">
                <img class="card-img-top" src="/3D-Icons/Fan-Cover/MSI200mm.PNG" alt="Card image cap">
                <h5 class="card-title">MSI</h5>
                <p class="card-text">Størrelse: 200mm</p>
                <a href="~assets/3D-Object/Fan-Cover/MSI200mm.STL" class="pixelbutton"><i class="fas fa-download"></i> Last Ned</a> </div>
            </div>
                </li>
            </ul>
    </div>
	  <button onclick="topFunction()" id="scrollToTopBtn" title="Go to top">Top</button>
    </div>
</template>