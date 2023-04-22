import React from 'react';
import { Canvas } from "@react-three/fiber";
import {RoundedBox} from "@react-three/drei";
import { OrbitControls,Stars } from "@react-three/drei";

const Illustration = () => {
  return (
    <Canvas>
      <mesh>
        <Stars />
        <ambientLight intensity={1} /> 
        <RoundedBox
          args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          creaseAngle={0.4} // All THREE.Mesh props are valid 

        >
          <meshPhongMaterial color="#1cdf7d" wireframe />
        </RoundedBox>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </mesh>
    </Canvas>
  );
}

export default Illustration;