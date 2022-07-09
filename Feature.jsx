import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
background-color:#1E1E1E;
min-height:100vh;
`

const Title =styled.h1`
margin:20px;
color:#AFAFAF;
display:flex;
align-item:center;
justify-content:center;

`

const Circle = styled.div`
width:200px;
height:200px;
border-radius: 50%;
box-shadow: 0px 10.3879px 12.6138px rgba(0, 0, 0, 0.25);
background-color:rgba(0, 0, 0, 0.17);
// position:absolute;
display:flex;

`
const Desc= styled.p`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:#AFAFAF;
font-weight: 800;
font-size: 22.2597px;
line-height: 159%;
`


const Feature = () => {
  return (
    <Container>
        
        
        <Title>  FEATURES </Title>
        
        <Circle>
          <Desc>
            <span>30</span>
            <span>Minutes</span>
            <span>Flight Time</span>
          </Desc>
        </Circle>

        <Circle>
          <Desc>
            <span>Compact size & weight </span>
            <span>Minutes</span>
            <span>Flight Time</span>
          </Desc>
        </Circle>

        <Circle>
          <Desc>
            <span>Operational</span>
            <span>Range</span>
            <span>Upto</span>
            <span>10KM</span>
          </Desc>
        </Circle>


        <Circle>
          <Desc>
            <span>BEST FOR </span>
            <span>INDOOR</span>
            <span>Operation</span>
          </Desc>
        </Circle>

    </Container>
  )
}

export default Feature