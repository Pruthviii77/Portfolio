// THREE JS SCENE

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.setZ(40)

renderer.render(scene,camera)


// 3D SPHERE

const geometry = new THREE.IcosahedronGeometry(10,1)

const material = new THREE.MeshStandardMaterial({
color:0x00ffff,
wireframe:true
})

const sphere = new THREE.Mesh(geometry,material)

scene.add(sphere)


// LIGHT

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)

scene.add(pointLight)


// PARTICLES

const particlesGeometry = new THREE.BufferGeometry()

const particlesCount = 3000

const posArray = new Float32Array(particlesCount * 3)

for(let i=0;i<particlesCount*3;i++){

posArray[i] = (Math.random()-0.5) * 200

}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray,3)
)

const particlesMaterial = new THREE.PointsMaterial({
size:0.2,
color:0xffffff
})

const particlesMesh = new THREE.Points(
particlesGeometry,
particlesMaterial
)

scene.add(particlesMesh)


// MOUSE MOVEMENT INTERACTION

document.addEventListener("mousemove",(event)=>{

const x = (event.clientX / window.innerWidth - 0.5) * 2
const y = (event.clientY / window.innerHeight - 0.5) * 2

sphere.rotation.y = x
sphere.rotation.x = y

})


// ANIMATION LOOP

function animate(){

requestAnimationFrame(animate)

sphere.rotation.y += 0.003
sphere.rotation.x += 0.002

particlesMesh.rotation.y += 0.0005

renderer.render(scene,camera)

}

animate()


// TYPING EFFECT

const text = "Software Developer | Data Analyst | MCA Student"

let i = 0

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i)

i++

setTimeout(typing,60)

}

}

typing()