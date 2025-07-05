//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


// Create a scene
const scene = new THREE.Scene();
// Create camera
const camera = new THREE.PerpectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 3D object has a global variable
let object;

// Allows camera movement on the scene
let controls;

// Object to render

let objToRender = 'computer';
