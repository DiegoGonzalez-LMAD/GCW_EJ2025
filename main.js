import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

cube.visible = true;

scene.add(cube);


renderer.setAnimationLoop(animate);


function animate() {

	//cube.position.x+=0.05;
	cube.rotateY(0.005);
    //cube.rotateOnAxis(new THREE.Vector3(0,1,1),0.05);
	renderer.render(scene, camera);

}


