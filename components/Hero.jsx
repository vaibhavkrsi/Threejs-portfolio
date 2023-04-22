import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { MeshDistortMaterial, OrbitControls,Sphere } from '@react-three/drei';
import {Canvas} from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between; 
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px; 
`;

const Title = styled.h1`
  font-size: 74px; 
  color:#ffffff;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #ffffff; 
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 4;
  position: relative; 
 
`;

const Img = styled.img`
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto; 
  animation: animate 3s infinite ease alternate;
  @keyframes animate {
    to{
        transform: translateY(20px);
    }
    
  }
`; 


const Hero = () => {
  return (
    <Section> 
        <Navbar/>
        <Container>
            <Left>
                <Title>Think. Make. Solve.</Title>
                <WhatWeDo>
                    <Line src="./img/line.png" />
                    <Subtitle></Subtitle>
                </WhatWeDo>
                <Desc> we enjoy creating delightful, human-centered digital experiences.</Desc>
                <Button>Learn More</Button>
            </Left>
            <Right>
                    <Canvas> 
                           <OrbitControls enableZoom={false} autoRotate />  
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[3, 3, 3]} />
                         <Sphere args={[1,100,200]} scale={2.5} >
                            <MeshDistortMaterial
                              color={"#db96d0"} 
                              attach={"material"}
                              distort={0.5}
                              speed={2}
                            />
                          </Sphere>
                    </Canvas> 
                     <Img src='./img/moon.png'/> 
            </Right>
        </Container>
    </Section>
  )
}

export default Hero