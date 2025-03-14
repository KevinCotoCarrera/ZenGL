import * as THREE from 'three';

export default function createCustomRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
return renderer;
}