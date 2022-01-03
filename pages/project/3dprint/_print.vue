<template>
  <div id="3dprintview" class="container">
    <div class="jumbotron">
      <h1 class="display-4">3D Print</h1>
      <p class="lead">{{ print }}</p>
      <hr class="my-4">
    </div>
  </div>
</template>

<script lang="text/javascript">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
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
  name: 'print',
  transition: 'slide-bottom',
  data() {
    return {
      images: null,
      filter: 'all',
      print: null,
      scene: null
    }
  },
  async asyncData({ $content, params, $axios, $config }) {
    let baseURL = $config.baseURL;
    console.log(params)
    
    // Midlertidig tatt vekk siden jeg ikke har fått 3d printene opp på database enda
    /*await $axios({
      method: "get",
      url: "/api/project/getPrint" + params.print
    }).then(async (res) => {

    })*/
    return {
      baseURL,
      params
    }
  },
  mounted() {
    this.three(require.context('~/static/images/3D-Icons/', true, /\.(jpg|png|PNG)\b/))
    //this.load3Dobjects(require.context('~/static/images/3D-Icons/', true, /\.(jpg|png|PNG)\b/))
  },
  methods: {
    async load3Dobjects(r) {
      const prints = await this.$content('3dprint').fetch();
        
      r.keys().forEach(async (key) => {
        let name = key.split('./').join('').replace('.png', '').replace('.PNG', '').replace('Fan-Cover/', '');

        if (name === this.params.print) {
          let stl = await prints[name.toLowerCase()].path;
          let description = await prints[name.toLowerCase()].description;
          let category = await prints[name.toLowerCase()].category;
          //let stl = `~/assets/3D-Object/${name}.stl`
          this.print = new Print(
            name,
            description,
            category,
            stl,
            r(key),
          );
        }
      });
    },
    async three(r) {
      let camera, cameraTarget, scene, renderer, container;
      const prints = await this.$content('3dprint').fetch();
        
      r.keys().forEach(async (key) => {
        let name = key.split('./').join('').replace('.png', '').replace('.PNG', '').replace('Fan-Cover/', '');

        if (name === this.params.print) {
          let stl = await prints[name.toLowerCase()].path;
          let description = await prints[name.toLowerCase()].description;
          let category = await prints[name.toLowerCase()].category;
          //let stl = `~/assets/3D-Object/${name}.stl`
          this.print = new Print(
            name,
            description,
            category,
            stl,
            r(key),
          );
          init();
        }
      });
      const init = async () => {
        
        camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
				camera.position.set( 3, 0.15, 3 );

				cameraTarget = new THREE.Vector3( 0, - 0.25, 0 );

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x72645b );
			  scene.fog = new THREE.Fog( 0x72645b, 2, 15 );


        container = document.getElementById('3dprintview');
				// Ground

				const plane = new THREE.Mesh(
					new THREE.PlaneGeometry( 40, 40 ),
					new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
				);
				plane.rotation.x = - Math.PI / 2;
				plane.position.y = - 0.5;
				scene.add( plane );

				plane.receiveShadow = true;

        const loader = new STLLoader();
        let link = this.print.stl.replace("~/", "../../../");
        const material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );

				loader.load(link, function ( geometry ) {

					const mesh = new THREE.Mesh( geometry, material );

					mesh.position.set( 0, - 0.37, - 0.6 );
					mesh.rotation.set( - Math.PI / 2, 0, 0 );
					mesh.scale.set( 2, 2, 2 );

					mesh.castShadow = true;
					mesh.receiveShadow = true;

					scene.add( mesh );

				});



        // Light
        
        scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

				addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
				addShadowedLight( 0.5, 1, - 1, 0xffaa00, 1 );
				// renderer

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.domElement.id = "threejs";
				renderer.shadowMap.enabled = true;

				container.appendChild( renderer.domElement );
        window.addEventListener( 'resize', onWindowResize );

        animate();
      }
      
			
      function addShadowedLight( x, y, z, color, intensity ) {

				const directionalLight = new THREE.DirectionalLight( color, intensity );
				directionalLight.position.set( x, y, z );
				scene.add( directionalLight );

				directionalLight.castShadow = true;

				const d = 1;
				directionalLight.shadow.camera.left = - d;
				directionalLight.shadow.camera.right = d;
				directionalLight.shadow.camera.top = d;
				directionalLight.shadow.camera.bottom = - d;

				directionalLight.shadow.camera.near = 1;
				directionalLight.shadow.camera.far = 4;

				directionalLight.shadow.bias = - 0.002;

			}
      function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				const timer = Date.now() * 0.0005;

				camera.position.x = Math.cos( timer ) * 3;
				camera.position.z = Math.sin( timer ) * 3;

				camera.lookAt( cameraTarget );

				renderer.render( scene, camera );

			}
    }
  },
}
</script>
<style lang="scss">
$colorpalette: (
  "moonlit": linear-gradient(45deg, #0f2027, #203a43, #2c5364),
  "argon": linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9),
  "velvet-sun": linear-gradient(to top, #e1eec3, #f05053),
  "meridian": linear-gradient(45deg, #283c86, #45a247)
);

// Website colorscheme
$maincolors: (
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
@function gradientscheme($color) {
  @return map-get($colorpalette, $color);
}
.printcard {
  .box {
    position: relative;
    overflow: hidden;
    width: 350px;
    height: 280px;
    border-radius: 20px;
    background: gradientscheme('moonlit');
    margin-top: 2rem;
    .icon {
      position: absolute;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.5s;
      border-radius: 20px;
      background: colorscheme('blue');
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
  position: sticky;
  bottom: 30px;
  right: 30px;
  z-index: 5;
  font-size: 2ch;
  border: none;
  outline: none;
  background: colorscheme('cyan');
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