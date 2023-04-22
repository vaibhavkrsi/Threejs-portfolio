import React from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls } from '@react-three/drei';
import Atom from './Atom';

const Development = () => {
  return (
    <Canvas camera={{position:[0,0,10]}}>  
    <ambientLight intensity={1} /> 
    
      <Atom/>     
     <OrbitControls enableZoom= {false} autoRotate= {true} />
    </Canvas>
  );
};

export default Development;