import React from 'react'
import styled from 'styled-components'


const Container =styled.div`


`
const Product1 =styled.div`
display:flex;
width:100%;
height:60%;
align-items:center;
justify-content:center;
`
const ImageContainer1 =styled.div`
// width:30%;

`
const Wrapper =styled.div`
display:flex;
flex-direction:column;
margin-top:20px;

`
const Image =styled.img`
width:90%;
height:80vh;
object-fit:cover;
`
const InfoContainer1 =styled.div``

const Product2=styled.div`
background-color:#1E1E1E;
display:flex;
flex-direction:row-reverse;
align-items:center;
justify-content:center;
width:100%;
height:50%;
`

const ImageContainer2 =styled.div`

`

const InfoContainer2=styled.div``
const Desc =styled.p`
color:white;
display:flex;
flex-direction:column;
font-weight:600;
font-size:36px;
line-height:150%;
`



const Dproduct = () => {
  return (
    <Container>
        

            <Wrapper>
                <Product1>
                <ImageContainer1>
        
                    <Image src="https://cdn.discordapp.com/attachments/891025527312384070/995037511799799868/unknown.png" />
                </ImageContainer1>
                
                <InfoContainer1>
                    <Desc>
                        <span>Day and Night Military Survilleance</span>
                        <span>Artificial Intelligence Based</span>
                        <span>Intelligence Gathering</span> 
                        <span>100% Indigenously designed and </span>
                        <span>manufactured shell</span>
                    </Desc> 
                </InfoContainer1>

                </Product1>

                <Product2>
                <ImageContainer2>
                    <Image src="https://cdn.discordapp.com/attachments/891025527312384070/995037569421156382/unknown.png" />
                </ImageContainer2>
                
                <InfoContainer2>
                    <Desc>
                        <span>Maximum Speed :- 50KM/H </span>
                        <span>Wind Resistance :- 25KM/H </span> 
                        <span>Gps assisted flight modes for outdoor</span>
                    </Desc> 
                </InfoContainer2>

                </Product2>
            </Wrapper>


        

    </Container>
  )
}

export default Dproduct;