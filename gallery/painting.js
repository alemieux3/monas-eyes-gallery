import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

export function createPainting(painting, position) {

  const group = new THREE.Group();
  group.position.set(...position);
  group.userData = painting;

  // frame
  const frameGeo = new THREE.BoxGeometry(2.4,3.2,0.2);
  const frameMat = new THREE.MeshStandardMaterial({ color:0x222222 });
  const frame = new THREE.Mesh(frameGeo, frameMat);

  // canvas
  const planeGeo = new THREE.PlaneGeometry(2,3);
  const planeMat = new THREE.MeshStandardMaterial({ color:0x333333 });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.position.z = 0.12;

  group.add(frame);
  group.add(plane);

  return group;
}
