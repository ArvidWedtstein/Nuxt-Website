<template>
   <div id="threecontainer">
    <canvas id="threejs"></canvas>
    <!--<div style="margin-top: 50vh; color: #fff !important;" class='jumbotron threejs'>
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
    </div>-->
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
import { LightProbeGenerator } from "three/examples/jsm/lights/LightProbeGenerator.js";
//import THREEx from "~/threex.domevents";
//import { initializeDomEvents } from "threex.domevents";


export default {
  name: 'three',
  transition: 'slide-bottom',
  methods: {
    three() {
      let scene, camera, renderer, controls, model, hemiLight, spotLight, manager, textureLoader, gridHelper, loader, object, house, stats, container, clock;
      async function init() {

        manager = new THREE.LoadingManager();
        textureLoader = new THREE.TextureLoader( manager );

        clock = new THREE.Clock();
        manager.onProgress = function ( item, loaded, total ) {     
          console.log( item, loaded, total );
        };

        container = document.getElementById('threecontainer');
        scene = new THREE.Scene();
        scene.background = new THREE.Color().setHSL( 0.51, 0.4, 0.01 );
        scene.fog = new THREE.Fog( scene.background, 3500, 15000 );
        

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.setZ(30);
        camera.position.setY(30);

        stats = new Stats();
				container.appendChild( stats.dom );


        const API = {
          lightProbeIntensity: 1.0,
          directionalLightIntensity: 0.2,
          envMapIntensity: 1
        }
        /* Lights */
        hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        hemiLight.position.setZ(20);
        hemiLight.position.setX(30);
        //scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight( 0xffffff, 0.05 );
        dirLight.position.set( 3, - 1, 0 ).normalize();
        dirLight.color.setHSL( 0.1, 0.7, 0.5 );
        scene.add( dirLight )

        const textureFlare0 = textureLoader.load( '/scene/lensflare0.png' );
        const textureFlare3 = textureLoader.load( '/scene/lensflare3.png' );

        addLight( 0.08, 0.8, 0.5, 0, 30, - 300 );
        //addLight( 0.995, 0.5, 0.9, 500, 500, - 100 );

        function addLight( h, s, l, x, y, z ) {
          const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
          light.color.setHSL( h, s, l );
          light.position.set( x, y, z );
          scene.add( light );
          const lensflare = new Lensflare();
          lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
          lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
          light.add( lensflare );
        }

        /*spotLight = new THREE.SpotLight(0xffa95c, 4);
        spotLight.castShadow = true;
        spotLight.shadow.bias = -0.0001;
        spotLight.shadow.mapSize.width = 1024*1;
        spotLight.shadow.mapSize.height = 1024*1;*/
        //scene.add(spotLight);


        gridHelper = new THREE.GridHelper(200, 50);
        //scene.add(gridHelper);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          outputEncoding: THREE.sRGBEncoding,
        });

        //renderer.toneMapping = THREE.ReinhardToneMapping;
        //renderer.toneMapping = THREE.NoToneMapping;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        //renderer.shadowMap.enabled = true;

        container.appendChild( renderer.domElement );

        loader = new GLTFLoader();
        loader.load("/scene/House.glb", async (glb) => {
          house = glb.scene;
          house.scale.set(2,2,2);
          scene.add(house)
          animate();
        }, onProgress, onError);

        // window.addEventListener('click', onDocumentMouseDown, false);
      

        //var raycaster = new THREE.Raycaster();
        //var mouse = new THREE.Vector2();
        function onDocumentMouseDown( event ) {
          event.preventDefault();
          mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
          mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
          raycaster.setFromCamera( mouse, camera );
          //console.log(scene.children);
          //var intersects = raycaster.intersectObjects( scene.children );
          var intersects = raycaster.intersectObjects(scene.children, true);
          console.log(intersects[0]);
          if ( intersects.length > 0 ) {
            //intersects[1].object.callback();
            let selectedObject = intersects[0];
            alert(selectedObject.object.type);
          }
        }

        controls = new OrbitControls(camera, renderer.domElement);
        //controls.addEventListener("change", renderer);
        //controls.minDistance = 500;
        //controls.target.copy(house.position);
        //controls.autoRotate = true; 
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

				controls.update( delta );
				renderer.render( scene, camera );
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


     const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100, 10, 10),
      new THREE.MeshPhongMaterial({
         map: textureLoader.load("/sword/forest.jpg"),
         specular: 0xffffff, 
         shininess: 1
      })
     )
     plane.rotateX(Math.PI * -0.5);
     plane.position.setZ(0);
     plane.position.setY(-1);
     plane.castShadow = true;
     plane.recieveShadow = true;
     scene.add(plane)
      
     /*const ball = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
     );
     ball.position.set(-10, 5, 0);
     ball.castShadow = true;
     scene.add(ball)

     const ball2 = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.ShaderMaterial({
         uniforms: {
          sphereColor: {
           value: new THREE.Vector3(0,0,1)
          }
         },
         vertexShader: _VS,
         fragmentShader: _FS,
      })
     );
     ball2.position.set(10, 5, 0);
     ball2.castShadow = true;
     scene.add(ball2)*/
      // texture
     

     function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      //object.rotation.x += 0.05;
      object.rotation.z += 0.075;
      //object.rotation.z += 0.05;
      

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
     }
     //renderer.render( scene, camera );

     //document.body.onscroll = moveCamera
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
  //z-index: 1;
}

</style>