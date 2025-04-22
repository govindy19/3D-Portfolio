import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber' // ✅ Important!
import skyScene from '../../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()

  // ✅ Rotate the sky if isRotating is true
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta
    }
  })

  return (
    <mesh ref= {skyRef}>
      <primitive object = {sky.scene}/>



    </mesh>
   // <primitive ref={skyRef} object={sky.scene} />
  )
}

export default Sky
