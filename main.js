import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js";
import { createScene } from "./gallery/scene.js";

const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);
camera.position.set(0,0,8);

const controls = new OrbitControls(camera, renderer.domElement);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const overlay = document.getElementById("overlay");

function showOverlay(data){
  overlay.classList.remove("hidden");
  document.getElementById("title").textContent = data.title;
  document.getElementById("artist").textContent = data.artist;
  document.getElementById("year").textContent = data.year;
}

overlay.onclick = ()=>overlay.classList.add("hidden");

const { scene, clickable } = createScene(showOverlay);

window.addEventListener("click",(event)=>{

  mouse.x = (event.clientX / window.innerWidth)*2-1;
  mouse.y = -(event.clientY / window.innerHeight)*2+1;

  raycaster.setFromCamera(mouse,camera);

  const intersects = raycaster.intersectObjects(clickable,true);

  if(intersects.length){
    const obj = intersects[0].object.parent;
    showOverlay(obj.userData);
  }

});

function animate(){
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene,camera);
}

animate();
