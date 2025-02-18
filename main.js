import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({ color: 0xff2200 });
const edges = new THREE.EdgesGeometry( geometry ); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); 

const cube = new THREE.Mesh(geometry, material);

const ConeGeometry = new THREE.ConeGeometry(1, 3, 8); 
const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(ConeGeometry, material2 ); 

const TorusKnot = new THREE.TorusKnotGeometry( 1.558, 0.6336, 121, 5 ); 
const material3 = new THREE.MeshBasicMaterial( { color: 0x5bcfc0 } ); 
const torusKnot = new THREE.Mesh( TorusKnot, material3 ); scene.add( torusKnot );



cube.visible = true;
cone.visible=true;
torusKnot.visible=true;

scene.add(cube,cone,torusKnot);

cone.translateX(5);
cube.translateX(2);
torusKnot.translateX(-3);

 


renderer.setAnimationLoop(animate);


function animate() {

	//cube.position.x+=0.05;
	cube.rotateY(0.005);
	cone.rotateY(0.005);
	torusKnot.rotateY(0.005);
	cone.rotateX(0.005);
	torusKnot.rotateX(0.005);
	
    //cube.rotateOnAxis(new THREE.Vector3(0,1,1),0.05);
	renderer.render(scene, camera);
	

}


