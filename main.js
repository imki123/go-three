import { Scene } from 'three'

const scene = new Scene()
console.log(scene)
const controls = new OrbitControls(camera, renderer.domElement)
