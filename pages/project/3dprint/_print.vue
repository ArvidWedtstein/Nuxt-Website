<template>
  <div class="container">
    <div class="jumbotron" id="3dprintview">
      <h1 class="display-4" v-if="print" v-cloak>{{ print.name }}</h1>
      <hr class="my-4">
    </div>
  </div>
</template>

<script lang="text/javascript">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
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
  async mounted() {
    await this.three(require.context('~/static/images/3D-Icons/', true, /\.(jpg|png|PNG)\b/))
    //this.load3Dobjects(require.context('~/static/images/3D-Icons/', true, /\.(jpg|png|PNG)\b/))
  },
  methods: {
    async three(r) {
      let camera, cameraTarget, scene, renderer, container, controls;
      const prints = await this.$content('3dprint').fetch();
      r.keys().forEach(async (key) => {
        let name = key.split('./').join('').replace('.png', '').replace('.PNG', '').replace('Fan-Cover/', '');

        //if (name === await this.$route.params.print) {
        if (name === this.$route.params.print) {
          let stl = await prints[name.toLowerCase()].path;
          let description = await prints[name.toLowerCase()].description;
          let category = await prints[name.toLowerCase()].category;
          this.print = new Print(
            name,
            description,
            category,
            stl,
            r(key),
          );
          init();
        }
      })
      
      const init = async () => {
        
        camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 200 );
				camera.position.set( 3, 3.15, 3 );

				cameraTarget = new THREE.Vector3( 0, - 0.25, 0 );
        

				scene = new THREE.Scene();
				//scene.background = new THREE.Color( 0x72645b );
			  scene.fog = new THREE.Fog( 0x72645b, 2, 15 );

        new RGBELoader().setPath('/scene/').load('park_2k.hdr', async (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;

          scene.background = texture;
          scene.environment = texture;
        });

        container = document.getElementById('3dprintview');
        
        let link = this.print.stl.replace("~/assets", "").replace('3D-Object', 'print');
        const loader = new STLLoader();
        const material = new THREE.MeshPhysicalMaterial({
          color: 0x000000,
          envMap: scene.environment,
        });
        loader.load(link, async (geometry) => {
          let mesh = new THREE.Mesh(geometry, material);
          mesh.scale.set(0.02, 0.02, 0.02);
          mesh.rotateX(Math.PI / -2);
          mesh.rotateZ(Math.PI / 2);
          scene.add(mesh);

          cameraTarget = mesh.position
        }, onProgress, onError);



        // Light
  
        scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

				addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
				// renderer

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.domElement.id = "threejs";
				renderer.shadowMap.enabled = true;


        controls = new OrbitControls(camera, renderer.domElement);

        controls.enabled = true;
        controls.enableDamping = true;
        controls.autoRotate = false; 
        controls.maxDistance = 10;

				container.appendChild( renderer.domElement );
        window.addEventListener( 'resize', onWindowResize );

        animate();
      }
      const addShadowedLight = ( x, y, z, color, intensity ) => {

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
      function onProgress( xhr ) {
        
        if ( xhr.lengthComputable ) {
          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
        } else {
          return
        }
      }
      function onError() {}
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

				// const timer = Date.now() * 0.0005;
				const timer = Date.now() * 0.05;

				//camera.position.x = Math.cos( timer ) * 5;
				//camera.position.z = Math.sin( timer ) * 5;
        controls.update( timer );
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
#progressBar {
  width: 500px;
  height: 24px;
  position: relative;
}
#threejs {
  width: auto;
  margin-left: auto;
  padding: 4rem;
  margin-right: auto;
}
</style>