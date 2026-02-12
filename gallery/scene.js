import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
import { periods } from "./data.js";
import { createPainting } from "./painting.js";

export function createScene(onSelect) {

  const scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xffffff,1);
  light.position.set(5,5,5);
  scene.add(light);

  scene.add(new THREE.AmbientLight(0xffffff,0.7));

  const clickable = [];

  periods.forEach(period => {

    period.works.forEach((painting,index)=>{

      const x = (index % 4) * 3 - 4;
      const y = Math.floor(index/4) * -4;

      const obj = createPainting(painting,[x,y,period.z]);
      scene.add(obj);
      clickable.push(obj);

    });

  });

  return { scene, clickable };

}
