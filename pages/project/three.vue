<template>
   <div id="threecontainer">
    <canvas id="threejs"></canvas>
    <div style="margin-top: 50vh; color: #fff !important;" class='jumbotron threejs'>
     <h1 class='display-4'>hehe</h1>
     <p class='lead'>hehe</p>
     <hr class='my-4'>
     <p class='lead'></p>
    </div>
    <div class='jumbotron threejs'>
     <h1 class='display-4'>hehe</h1>
     <p class='lead'>hehe</p>
     <hr class='my-4'>
     <p style="color: #fff;" class='lead'>aaaaaaaaa</p>
    </div>
    <div class='jumbotron threejs'>
     <h1 class='display-4'>hehe</h1>
     <p class='lead'>hehe</p>
     <hr class='my-4'>
     <p class='lead'></p>
    </div>
    <div class='jumbotron threejs'>
     <h1 class='display-4'>hehe</h1>
     <p class='lead'>hehe</p>
     <hr class='my-4'>
     <p class='lead'></p>
    </div>
   </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import THREEx from "three/examples/jsm/interactive/InteractiveGroup";
import { Lensflare, LensflareElement } from "three/examples/jsm/objects/Lensflare";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper.js';
//import THREEx from "~/threex.domevents";
//import { initializeDomEvents } from "threex.domevents";


export default {
  name: 'three',
  transition: 'slide-bottom',
  methods: {
    three() {
      let scene, pointer, raycaster, camera, renderer, controls, model, hemiLight, light, manager, gridHelper, stats, container, clock;
      let gltfloader, objloader, textureLoader, roughnessMipmapper, effect;
      let house, cabinet, sword;
      async function init() {

        // Define Loaders
        manager = new THREE.LoadingManager();
        textureLoader = new THREE.TextureLoader( manager );
        gltfloader = new GLTFLoader( manager );
        objloader = new OBJLoader( manager );

        clock = new THREE.Clock();
        manager.onProgress = function ( item, loaded, total ) {     
          console.log( item, loaded, total );
        };

        container = document.getElementById('threecontainer');
        scene = new THREE.Scene();
        //scene.background = new THREE.Color().setHSL( 0.51, 0.4, 0.01 );
        scene.fog = new THREE.Fog( scene.background, 500, 1500 );
        

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.setZ(20);
        camera.position.setY(-10);

        stats = new Stats();
				container.appendChild( stats.dom );


  

        /* Lights */
        /*hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        hemiLight.position.setZ(20);
        hemiLight.position.setX(30);
        scene.add(hemiLight);*/

        /*const dirLight = new THREE.DirectionalLight( 0xffffff, 0.05 );
        dirLight.position.set( 3, - 1, 0 ).normalize();
        dirLight.color.setHSL( 0.1, 0.7, 0.5 );
        scene.add( dirLight )*/

        const textureFlare0 = textureLoader.load( '/scene/lensflare0.png' );
        const textureFlare3 = textureLoader.load( '/scene/lensflare3.png' );

        //addLight( 0.08, 0.8, 0.5, 0, 60, - 300 );
        addLight( 0.295, 0.3, 0.9, 0, 100, 100 );

        function addLight ( h, s, l, x, y, z ) {
          const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
          light.color.setHSL( h, s, l );
          light.position.set( x, y, z );
          light.castShadow = true;
          light.target = house
          scene.add( light );
          const lensflare = new Lensflare();
          lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
          light.add( lensflare );
        }
        new RGBELoader().setPath('/scene/').load('park_2k.hdr', async (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;

          scene.background = texture;
          scene.environment = texture;
        });
      

        gridHelper = new THREE.GridHelper(200, 50);
        //scene.add(gridHelper);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          outputEncoding: THREE.sRGBEncoding,
        });

        //renderer.toneMapping = THREE.ReinhardToneMapping;
        //renderer.toneMapping = THREE.NoToneMapping;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.domElement.id = "threejs";
        container.appendChild( renderer.domElement );

        /*effect = new AsciiEffect(renderer, ' `:-+*=%@#{}[]()', { invert: true } );
        effect.setSize(window.innerWidth, window.innerHeight);
        effect.domElement.style.color = "white";
        effect.domElement.style.backgroundColor = "black";

        container.appendChild(effect.domElement);*/



        

        
        /*gltfloader.load("/scene/House.glb", async (glb) => {
          house = glb.scene;
          glb.scene.traverse(async (child) => {
            if (child.isMesh) {
              roughnessMipmapper.generateMipmaps(child.material);
            }
          })
          house.scale.set(1,1,1);
          house.position.set(0,0,0);
          scene.add(house);
          roughnessMipmapper.dispose();
        }, onProgress, onError);*/

        /*gltfloader.load("/scene/cabinet.glb", async (glb) => {
          roughnessMipmapper = new RoughnessMipmapper( renderer );
          cabinet = glb.scene;
          glb.scene.traverse(async (child) => {
            if (child.isMesh) {
              roughnessMipmapper.generateMipmaps(child.material);
            }
          })
          cabinet.scale.set(2,2,2);
          cabinet.position.set(0,-2,0);
          scene.add(cabinet);
          roughnessMipmapper.dispose();
        })*/
        
        objloader.load('/sword/LOTRSword.obj', async (obj) => {
          roughnessMipmapper = new RoughnessMipmapper( renderer );
          const material = new THREE.MeshStandardMaterial({
            map: textureLoader.load('/sword/Sting_Base_Color.PNG'),
            bumpMap: textureLoader.load('/sword/Sting_Height.PNG'),
            aoMap: textureLoader.load('/sword/Sting_Mixed_AO.PNG'),
            emissiveMap: textureLoader.load('/sword/Sting_Emissive.PNG'),
            emissiveIntensity: 1,
            envMap: scene.environment,
            envMapIntensity: 5,
            metalnessMap: textureLoader.load('/sword/Sting_Metallic.PNG'),
            metalness: 2,
            roughnessMap: textureLoader.load('/sword/Sting_Roughness.PNG'),
            normalMap: textureLoader.load('/sword/Sting_Normal.PNG'),
            premultipliedAlpha: true
          })
          obj.traverse(async (child) => {
            if (child.isMesh) {
              child.material = material
              roughnessMipmapper.generateMipmaps(child.material);
            }
          })
          obj.rotateX(Math.PI / 2);
          obj.position.set(0, 0, 0);
          sword = obj;
          scene.add(obj);
          roughnessMipmapper.dispose();
        })
      

        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2();


        controls = new OrbitControls(camera, renderer.domElement);

        //controls.minDistance = 500;
        //camera.lookAt(100, 800, 0);
        controls.enabled = true;
        controls.enableDamping = true;
        controls.autoRotate = false; 
        controls.maxDistance = 1500;
        
        animate()
        window.addEventListener( 'resize', onWindowResize );
      }

      const animate = () => {
        requestAnimationFrame( animate );
        render();
        stats.update();
      }
      const render = () => {
        const delta = clock.getDelta();
        sword.rotateZ(0.01);
				controls.update( delta );
				renderer.render( scene, camera );
        //effect.render( scene, camera );
      }

      function onWindowResize() {
        renderer.setSize( window.innerWidth, window.innerHeight );

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      init();



      function addStar() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({color: 0xffffff})
        const star = new THREE.Mesh( geometry, material );

        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
        star.position.set(x, y, z);
        scene.add(star);
      }

      //Array(200).fill().forEach(addStar);

     

      function onProgress( xhr ) {
        if ( xhr.lengthComputable ) {
          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
        } else {
          return
        }
      }

      function onError() {}
     
      const _VS = `

      varying vec3 v_Normal;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        v_Normal = normal;
      }
      `;

      const _FS = `
      uniform vec3 sphereColor;

      varying vec3 v_Normal;

      void main() {
        //gl_FragColor = vec4(v_Normal, 1.0);
        gl_FragColor = vec4(sphereColor, 1.0);
      }
      `;


      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 10, 10),
        new THREE.MeshPhongMaterial({
          map: textureLoader.load("/sword/forest.jpg"),
          specular: 0xffffff, 
          shininess: 0
        })
      )
      ground.rotateX(Math.PI * -0.5);
      ground.position.set(0, -2, 0);
      ground.castShadow = true;
      ground.recieveShadow = true;
      //scene.add(ground)
     
  
      function moveCamera() {
        const t = document.body.getBoundingClientRect().top;
        //object.rotation.x += 0.05;
        //object.rotation.z += 0.075;
        //object.rotation.z += 0.05;
        

        // camera.position.z = t * -0.01;
        //camera.position.x = t * -0.0002;
        let pos = camera.position.z;
        camera.position.y = t * 0.02;
        
      }
      //renderer.render( scene, camera );

      document.body.onscroll = moveCamera
      }
    },
  mounted() {
    this.three()
  },

}
</script>
<style lang="scss">
#threejs {
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  //user-select: none;
  z-index: 1;
}

</style>