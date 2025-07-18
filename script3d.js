// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for camera controls (we use this for debugging or optional interaction)
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To load .glb or .gltf files
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.js scene
const scene = new THREE.Scene();

// Set up a perspective camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Mouse position tracking (used for interactive rotation after spin)
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Global variables for the loaded object and controls
let object;
let controls;
let objToRender = 'computer';

// Flags for spin animation
let spinning = true;
let spinProgress = 0;

// Instantiate a loader for the .glb file
const loader = new GLTFLoader();

// Load the 3D model
loader.load(
  './stuff/computer.glb',
  function (gltf) {
    object = gltf.scene;

    // Scale up the model
    object.scale.set(10, 10, 10);

    // Add the model to the scene
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error('An error occurred while loading the model:', error);
  }
);

// Create a WebGL renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha:true enables transparency
renderer.setSize(window.innerWidth, window.innerHeight);
const container = document.getElementById("container3D");
container.appendChild(renderer.domElement);

// 🕒 Change z-index after 2 seconds
setTimeout(() => {
  container.style.zIndex = "-10";
}, 500);

// Set initial camera position
camera.position.z = objToRender === "computer" ? 25 : 500;

// Lighting
const topLight = new THREE.DirectionalLight(0xffffff, 3);
topLight.position.set(0, 1000, 100);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "computer" ? 5 : 1);
scene.add(ambientLight);

// Optional: Enable camera orbit controls
if (objToRender === "computer") {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // smoother movement
  controls.enabled = false; // disable manual orbit control (for now)
}

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  if (object && objToRender === "computer") {
    if (spinning) {
      // Spin the model on the Y axis
      object.rotation.y += 0.02;
      spinProgress += 0.02;

      // Stop spinning after 360° (2 * PI radians)
      if (spinProgress >= Math.PI * 2) {
        spinning = false;
      }
    } else {
      // Calculate target rotation based on mouse position
      const targetY = -3 + (mouseX / window.innerWidth) * 3;
      const targetX = -1.2 + (mouseY * 2.5) / window.innerHeight;

      // Smoothly interpolate rotation toward target using lerp
      object.rotation.y = THREE.MathUtils.lerp(object.rotation.y, targetY, 0.02);
      object.rotation.x = THREE.MathUtils.lerp(object.rotation.x, targetX, 0.02);
    }
  }

  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Track mouse position for interaction
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

// Start the render loop
animate();
