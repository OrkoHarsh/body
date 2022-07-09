import React from 'react'
import styled from 'styled-components'
import Dproduct from '../component/Dproduct'
import Feature from '../component/Feature'


import Header from '../component/Header'

const Container =styled.div`
background-color:#1E1E1E;
min-height:100vh;
`

const Title =styled.h1`
margin:20px;
color:white;
font-weight:800;
font-family: 'Syne';
font-size:111.3px;
`
const Wrapper =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Image =styled.img`
width:100%;
height:80vh;
object-fit:cover;
`



const Home1 = () => {
  return (
    <Container>
      <Header/>
      <Wrapper>
        <Title>  DOOT MK 1 </Title>

        <Image src="https://cdn.discordapp.com/attachments/891025496601661504/994699816590389288/unknown.png"/>
      </Wrapper>
      <Dproduct/>
      <Feature/>
    </Container>
  )
}

export default Home1