<template>
   <div class="">
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
//import { initializeDomEvents } from "threex.domevents";
//var THREEx = {}


export default {
   name: 'three',
   transition: 'slide-bottom',
   methods: {
      three() {
         let scene, camera, renderer, controls, model, hemiLight, spotLight, manager, textureLoader, gridHelper, loader, object;
         async function init() {
            scene = new THREE.Scene();
            //scene.background = new THREE.Color(0xdddddd);

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.setZ(30);

            hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
            //hemiLight.position.setZ(20);
            scene.add(hemiLight);


            spotLight = new THREE.SpotLight(0xffa95c, 4);
            spotLight.castShadow = true;
            spotLight.shadow.bias = -0.0001;
            spotLight.shadow.mapSize.width = 1024*2;
            spotLight.shadow.mapSize.height = 1024*2;
            scene.add(spotLight);


            gridHelper = new THREE.GridHelper(200, 50);
            scene.add(gridHelper);

            renderer = new THREE.WebGLRenderer({
               canvas: document.querySelector('#threejs'),
               antialias: true,
               alpha: true
            });

            //renderer.toneMapping = THREE.ReinhardToneMapping;
            renderer.toneMappingExposure = 2.3;
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            renderer.gammaOutput = true;
            renderer.outputEncoding = THREE.sRGBEncoding;



            manager = new THREE.LoadingManager( loadModel );
            textureLoader = new THREE.TextureLoader( manager );

            manager.onProgress = function ( item, loaded, total ) {     
               console.log( item, loaded, total );
            };
            
            

            let exrCubeRenderTarget, exrBackground;
            let newEnvMap;

            loader = new GLTFLoader();
            loader.load("/scene/House.glb", async (glb) => {
               const root = glb.scene;
               root.scale.set(2,2,2);
               scene.add(root)
               animate();
               renderer.render( scene, camera );
            }, onProgress, onError);

            loader = new OBJLoader( manager );
            loader.load( '/sword/Sting-Sword-lowpoly.obj', function ( obj ) {
               object = obj;
               animate();
               renderer.render( scene, camera );
            }, onProgress, onError);


            const baseColor = textureLoader.load("/sword/Sting_Base_Color.PNG");
            const emissiveColor = textureLoader.load("/sword/Sting_Emissive.PNG");
            const heightColor = textureLoader.load("/sword/Sting_Height.PNG");
            const metallicColor = textureLoader.load("/sword/Sting_Metallic.PNG");
            const normalColor = textureLoader.load("/sword/Sting_Normal.PNG");
            const roughnessColor = textureLoader.load("/sword/Sting_Roughness.PNG");
            const mixedAOColor = textureLoader.load("/sword/Sting_Mixed_AO.PNG");

            const diff = textureLoader.load("/images/Unity/Unity12.jpg");

            //https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.map
            function loadModel() {
               THREE.DefaultLoadingManager.onLoad = function () {
                     pmremGenerator.dispose();
               };
               const pmremGenerator = new THREE.PMREMGenerator(renderer);
               pmremGenerator.compileEquirectangularShader();


               new EXRLoader()
                     .setDataType(THREE.UnsignedByteType)
                     .load(
                        "https://threejs.org/examples/textures/piz_compressed.exr",
                        function (texture) {
                           exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
                           exrBackground = exrCubeRenderTarget.texture;
                           newEnvMap = exrCubeRenderTarget ? exrCubeRenderTarget.texture : null;

                           loadObjectAndAndEnvMap(); // Add envmap once the texture has been loaded

                           texture.dispose();
                        }
                     );

               renderer.toneMapping = THREE.ACESFilmicToneMapping;
               console.log(newEnvMap)
               object.traverse(( child ) => {
                  if ( child.isMesh ) {
                     child.castShadow = true;
                     child.recieveShadow = true;
                     child.material.map = baseColor;
                     child.material.aoMap = mixedAOColor;
                     /*child.material.emissiveMap = emissiveColor;
                     child.material.emissiveIntensity = 1;*/
                     child.material.metalnessMap = metallicColor;
                     child.material.metalness = 2.0;                    ;
                     //child.material.bumpMap = heightColor;
                     //child.material.bumpScale = 3;
                     child.material.normalMap = normalColor;
                     child.material.roughnessMap = roughnessColor;
                     child.material.roughness = 0.0;
                     //-child.material.reflectivity = 1;
                     //child.material.glowMap = emissiveColor;
                     //child.material.glowIntensity = 1;
                     child.material.envMap = newEnvMap;
                     child.material.envMapIntensity = 5.0;
                     child.material.needsUpdate = true;
                     if (child.material.map) child.material.map.anisotropy = 16;
                  }
               });

               

               object.rotateX(Math.PI * -0.5);
               object.position.setZ(20);
               scene.add( object );
            }




            /*let skyboxArray = [];
            const skybox_ft = textureLoader.load("skybox/arid2_ft.jpg");
            const skybox_bk = textureLoader.load("skybox/arid2_bk.jpg");
            const skybox_up = textureLoader.load("skybox/arid2_up.jpg");
            const skybox_dn = textureLoader.load("skybox/arid2_dn.jpg");
            const skybox_rt = textureLoader.load("skybox/arid2_rt.jpg");
            const skybox_lf = textureLoader.load("skybox/arid2_lf.jpg");
            skyboxArray.push(new THREE.MeshBasicMaterial({map: skybox_ft}));
            skyboxArray.push(new THREE.MeshBasicMaterial({map: skybox_bk}));
            skyboxArray.push(new THREE.MeshBasicMaterial({map: skybox_up}));
            skyboxArray.push(new THREE.MeshBasicMaterial({map: skybox_dn}));
            skyboxArray.push(new THREE.MeshBasicMaterial({map: skybox_rt}));
            skyboxArray.push(new THREE.MeshBasicMaterial({map: skybox_lf}));
            
            for (let i=0; i < 6; i++) {
               skyboxArray[i].side = THREE.BackSide;
            }
            const skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
            const skybox = new THREE.Mesh(skyboxGeo, skyboxArray);*/
            //scene.add(skybox)

            

            const plane = new THREE.Mesh(
               new THREE.PlaneGeometry(100, 50, 1, 1),
               new THREE.MeshStandardMaterial({
                  map: diff,
               })
            )
            plane.rotateX(Math.PI * -0.5);
            plane.rotateY(Math.PI * -0.5);
            plane.rotateZ(Math.PI * -0.5) + 30;
            plane.position.set(30, 20, 0);
            plane.castShadow = true;
            plane.recieveShadow = true;
            scene.add(plane)


            controls = new OrbitControls(camera, renderer.domElement);
            //controls.addEventListener("change", renderer);
            //controls.minDistance = 500;
            controls.maxDistance = 1500;
            animate()
         }

         function animate() {
            renderer.render( scene, camera );
            spotLight.position.set(
               camera.position.x + 10,
               camera.position.y + 10,
               camera.position.z + 10
            )
            requestAnimationFrame( animate );
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


         /*const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100, 10, 10),
            new THREE.MeshStandardMaterial({
               map: textureLoader.load("/sword/forest.jpg")
            })
         )
         plane.rotateX(Math.PI * -0.5);
         plane.castShadow = true;
         plane.recieveShadow = true;
         scene.add(plane)*/
			
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
   }
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