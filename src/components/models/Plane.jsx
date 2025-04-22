import React,{  useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import PlaneScene from '../../assets/3d/plane.glb';

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene,animations}= useGLTF(PlaneScene);
    const {actions} = useAnimations(animations,ref);

    useEffect(()=>{
        
            console.log('Available actions:', actions);
            const takeAction = actions['Take 001'];
            if (!takeAction) {
              console.warn('Take 001 animation not found!');
              return;
            }
          
            if (isRotating) {
              console.log('Playing animation');
              takeAction.play();
            } else {
              console.log('Stopping animation');
              takeAction.stop();
            }
          }, [actions, isRotating]);
          

        


        /*
        const takeAction = actions['Take 001'];
  if (!takeAction) return; // <- Safely exit if animation isn't ready

  if (isRotating) {
    takeAction.play();
  } else {
    takeAction.stop();
  }
}, [actions, isRotating]);*/




        /*
        if(isRotating){
            actions['Take 001'].play();
        }else{
            actions['Take 001'].stop();
        }
    },[actions, isRotating])*/





  return (
    <mesh{...props}>
        <primitive object={scene}  />;

    </mesh>
    
    
    
  )
}

export default Plane
