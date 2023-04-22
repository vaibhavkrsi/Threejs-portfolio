import React, { useState } from 'react';
import styled from 'styled-components';
import WebDesign from './WebDesign';
import ProductDesign from './ProductDesign';
import Development from './Development';
import Illustration from './Illustration'; 
import SocialMedia from "./SocialMedia";


const data=[
  "Web Design",
  "Development",
  "Product Design",
  "Illustration",
  "Social Media", 
]

const Section= styled.div` 
  height:100vh; 
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`
const Container= styled.div` 
  width: 1400px;
  display: flex;
  justify-content: space-between;

`


const Left= styled.div` 
  flex: 1;
  display: flex;
  align-items: center; 

`
const List= styled.ul`  
  list-style: none;
  display: flex; 
  flex-direction: column;
  gap: 20px;

`
const ListItems= styled.li`  
  font-size: 90px;
  font-weight: bold;
  cursor: pointer; // so, to click on them
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative; // if you are using position absoulte then we have position relative

  ::after{
    content:"${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color:pink;
    width:0;
    overflow: hidden;
    white-space: nowrap; // remove it from secound line.
 }
  &:hover {
    ::after{
      animation: moveText 0.5s linear both;// not go in initial position so we add  both
      @keyframes moveText {
            to{
              width: 100%;
            }        
      }
    }
  }  

   

`
const Right= styled.div` 
  flex: 1;
  position: relative;

`


const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (
    <Section> 
      <Container>
        <Left>
          <List>
            {data.map((item) =>( 
              <ListItems key={item} text= {item} onClick={()=>setWork(item)} > {item} </ListItems>
            ))} 
          </List>
        </Left>
        <Right>
          {work == "Web Design"? (<WebDesign/>): work=="Development" ? (<Development/>) : work=="Product Design" ? (<ProductDesign/>): work=="Illustration" ?(<Illustration/>) : (<SocialMedia/>) }
        </Right>
      </Container>
    </Section>
  )
}

export default Works