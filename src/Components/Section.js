import Fade from 'react-reveal/Fade';
import React from 'react'
import styled from 'styled-components'

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Container bgImg={backgroundImg}>
            <Fade bottom>
                <TextItem>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </TextItem>

                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Buttons>
            </Fade>
        </Container>
    )
}

export default Section
const Container = styled.div`
height:100vh;
width:100vw;
display:flex;
align-items:top;
justify-content:space-between;
line-height:1.5;
padding-top:13vh;
flex-direction:column;
//background:url('/images/model-s.jpg');
background-repeat:no-repeat;
background-position:center;
background-size:cover;
background-image: ${props => `url("${props.bgImg}")`};




`
const TextItem = styled.div`
text-align:center;
h1{
    letter-spacing:1.45px;
    font-size:40px;
    font-weight:600;
    
}
p{
    font-size:16px;
}
`
const Buttons = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-bottom:2vh;


`
const ButtonGroup = styled.div`
@media(max-width:768px){
    flex-direction:column;
}
display:flex;
justify-content:center;
align-items:bottom;

`
const LeftButton = styled.div`
border-radius:150px;
width:300px;
text-align:center;
font-weight:bold;
font-size:15px;
border:none;
background:#000;
color:white;
padding:10px 5px;
opacity:0.5;
margin-right:20px;
margin-bottom:10px;
text-transform:uppercase;
cursor:pointer;

`
const RightButton = styled(LeftButton)`
background:white;
color:#000;

`
const DownArrow = styled.img`
 width:50px;
 height:50px;
 display:flex;
 justify-content:center;
 margin-right:17px;
 animation:animateDown infinite 0.5s;
 
 `

