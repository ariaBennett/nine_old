var startTime = Date.now();
var container;
var camera, scene, renderer, stats;
var cube;

init();
animate();

function init() {

  camera = new THREE.Camera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.y = 150;
  camera.position.z = 350;
  camera.target.position.y = 150;

  scene = new THREE.Scene();

  cube = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
  cube.position.y = 150;

  scene.addObject(cube);

  container = document.createElement('div');
  document.body.appendChild(container);

  renderer = new THREE.WebGLRenderer();
  renderer.serSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  
  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  container.appendChild(stats.domElement);
}

function animate() {
  render();

  requestAnimationFrame(animate);

  stats.update();
}

function render() {
  renderer.render(scene, camera);
}
