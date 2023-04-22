import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';


const Section= styled.div` 
   height: 100vh;
   scroll-snap-align: center;
`


const Container= styled.div` 
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   gap: 50px;
`

const Left= styled.div` 
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
   
`

const Title= styled.h1` 
   font-weight: 200;
`

const Form= styled.form` 
   width: 500px;
   display: flex;
   flex-direction: column;
   gap: 20px;
`

const Input= styled.input` 
   padding: 20px;
   background-color: #e6e6e6;
   border: none;
   border-radius: 5px;
`


const TextArea= styled.textarea` 
  padding: 20px;
     border: none;
   border-radius: 5px;
   background-color: #e6e6e6;
`

const Button= styled.button`  
  background-color: #da4ea2; 
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;

`



const Right= styled.div`  
  flex:1;
`
 

const Contact = () => {
  const ref = useRef()
const  [sucess,setSuccess] = useState(false)


const handleSubmit = e =>{
  e.preventDefault()

  emailjs.sendForm('service_e7x9snj', 'template_zyk1se8', ref.current, 'DU1Ad8pHXz8TL4kRw')
      .then((result) => {
          console.log(result.text);
          setSuccess(true) 
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name='name' /> 
            <Input placeholder='Email' name='email' /> 
            <TextArea placeholder='Write your message' name='message' rows={15}/> 
            <Button type='submit'>Send Us</Button>
            {sucess && "Your message was sent.We will get back to you"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact