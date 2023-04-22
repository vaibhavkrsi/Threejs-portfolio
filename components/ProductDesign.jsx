import React from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Stage } from '@react-three/drei';
import Shape from './Shape';

const ProductDesign = () => {
  return (
    <Canvas camera={{position:[0,2,10]}}>  
    <ambientLight intensity={1} />  
      <Shape/>     
    <OrbitControls enableZoom= {false} autoRotate= {false} />
    </Canvas>
  );
};

export default ProductDesign;