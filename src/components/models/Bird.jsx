import { useGLTF,useAnimations } from '@react-three/drei'
import React, { use } from 'react'
import birdScene from '../../assets/3d/bird.glb';
import {useRef,useEffect} from 'react';
import {useFrame} from '@react-three/fiber'

const Bird = () => {
    const {scene,animations}= useGLTF(birdScene);
    const birdRef = useRef();
    const {actions} = useAnimations(animations,birdRef);


    useEffect(() => {
      actions['Take 001'].play();

    },[]);

    useFrame(({clock,camera}) =>{

      //Update the Y position to simulate bird-like motion using a sine wave
      birdRef.current.position.y  = Math.sin(clock.elapsedTime) * 0.2 + 2;

      //Check if bird reached a certain endpoint relative to the camera 
      if(birdRef.current.position.x > camera.position.x+10){

        //change direction to backward and rotate the bird 180 degree on the y-axis 
        birdRef.current.rotation.y = Math.PI;
      } else if(birdRef.current.position.x < camera.position.x-10){
        //change direction to forward and rotate the bird 0 degree on the y-axis
        birdRef.current.rotation.y = 0;
      }

      //Update the X and Z position of the bird based on its rotation

      if(birdRef.current.rotation.y ===0){
        //move the bird forward and right
        birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
      }else{
        //move the bird backward and left
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }



    })


  return (
    <mesh position = {[-5,2,1]}
     scale = {[0.003,0.003,0.003]}
     ref = {birdRef}>

        <primitive object = {scene}  />;

    </mesh>
      
    
  )
}

export default Bird
