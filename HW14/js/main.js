var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var shape, shape2;
var modelObject;

function createBox() {
  
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x9D70F9
  });
  shape = new THREE.Mesh(geometry, material);
  shape.position.set(50, 10, 10);
  scene.add(shape);
  shape.scale.x = 25; 
  shape.scale.y = 25; 
  shape.scale.z = 25; 


  animate();
}


function animate() {
  requestAnimationFrame(animate);
  shape.rotation.x += 0.15;
  shape.rotation.y += 0.15;
  createBox2();
  renderer.render(scene, camera);

}



function createBox2() {
  
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x02163B
  });
  shape2 = new THREE.Mesh(geometry, material);
  shape2.position.set(2, 5);
  shape.add(shape2);
  shape2.scale.x = 1; 
  shape2.scale.y = .15; 
  shape2.scale.z = .15; 

  animate2();
}


function animate2() {
  requestAnimationFrame(animate2);
  shape2.rotation.x += 0.15;
  shape2.rotation.y += 0.15;


}


function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x95874);
  return scene;
}


function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(300, 90, 200);
  return camera;
}

/**
 @param {obj} scene: 
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}


function getRenderer() {
  
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * 
 * @param {obj} camera: 
 * @param {obj} renderer: 
 **/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}


function loadModel() {
  loader = new THREE.OBJLoader();
  loader.load('models/Skull.obj', function (object) {
    object.rotation.z = Math.PI;
    modelObject = object;
    scene.add(object);
    animateModel();
  });
}

function animateModel() {
  requestAnimationFrame(animateModel);
  modelObject.rotation.x += 0.100;
  modelObject.rotation.y += 0.100;
}


function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();


loadModel()

render();