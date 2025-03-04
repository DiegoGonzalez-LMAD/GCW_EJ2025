import * as THREE from 'three';

const loader = new THREE.TextureLoader();

// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Add ambient light (for general scene illumination)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Lower intensity for ambient light
scene.add(ambientLight);

// Add directional light (important for toon shading)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize(); // Adjust position of the light
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create geometries and materials
const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshToonMaterial({ color: 0xff2200 });

const edges = new THREE.EdgesGeometry(geometry); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));

const cube = new THREE.Mesh(geometry, material);

const ConeGeometry = new THREE.ConeGeometry(1, 3, 8); 
const material2 = new THREE.MeshToonMaterial({ color: 0xbf1dca,emissive:0xbf1dca });
const cone = new THREE.Mesh(ConeGeometry, material2); 

const TorusKnot = new THREE.TorusKnotGeometry(1.558, 0.6336, 121, 5); 

// Load the texture asynchronously
let texture;
loader.load(
  'image.png',
  function (loadedTexture) {
    texture = loadedTexture;
    
    // Only apply the texture to the Torus Knot after it is loaded
    const material3 = new THREE.MeshToonMaterial({ map: texture });
    torusKnot.material = material3;
  },
  undefined,
  function (err) {
    console.error('An error happened while loading the texture.');
  }
);

const torusKnot = new THREE.Mesh(TorusKnot, new THREE.MeshToonMaterial({ color: 0xaaaaaa })); // Default color until texture loads

// Add objects to the scene
scene.add(cube, cone, torusKnot);

// Move the objects along the x-axis
cone.translateX(5);
cube.translateX(2);
torusKnot.translateX(-3);

// Animation function
function animate() {
  cube.rotateY(0.005);
  cone.rotateY(0.005);
  torusKnot.rotateY(0.005);
  cone.rotateX(0.005);
  torusKnot.rotateX(0.005);

  renderer.render(scene, camera);
  requestAnimationFrame(animate); // Request the next frame
}

animate(); // Start the animation loop
