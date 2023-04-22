import styled from "styled-components"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Who from "../components/Who"
import Works from "../components/Works" 


const Container= styled.div`
  height:100vh; 
  scroll-snap-type: y mandatory; //all the way down it is relling us 
  scroll-behavior: smooth;  
  overflow-y: auto;
  overflow-x: auto;
  justify-content: center; 
  scrollbar-width: none; //no scroll bar 
  color: white;
  background-image: url(./img/bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  } ` 

function App() {

  return (
    
    <Container> 
      <Hero />
      <Who/>
      <Works/>
      <Contact/> 
    </Container>
    
  )
}

export default App;
