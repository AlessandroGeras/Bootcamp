import React from "react";
import styled from "styled-components";
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: ["Varela Round"]
  }
});


function Bootcamps() {

    return (
<div>
<TextBox>
  <Title>
    Maratona De Aperfeiçoamento
  </Title>
  <Benefits>
    <Advertising>
      <img src="https://www.igifitness.com/uploads/1/2/7/6/127666360/published/igi-bootcamp-logo.png?1618859705" />
      <TextBoxTitle>
        Compartilhe Experiências
      </TextBoxTitle>
      <Text>
        Maecenas venenatis molestie ex in luctus. Curabitur non egestas dui, non mattis tortor. Ut consequat et lectus vitae iaculis. Donec nec aliquam est. Maecenas cursus tristique tellus ut volutpat.
      </Text>
    </Advertising>
    <Advertising> 
      <img src="https://www.igifitness.com/uploads/1/2/7/6/127666360/published/igi-bootcamp-logo.png?1618859705" />
      <TextBoxTitle>
        Aumente Seu Network
      </TextBoxTitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor condimentum, placerat ipsum ut, ultrices leo. Donec interdum massa mauris. Mauris laoreet sed est sed fermentum. Aliquam quis mauris leo. Morbi et ligula ultrices, elementum sem a, eleifend nisi.
      </Text>
    </Advertising> 
    <Advertising> 
      <img src="https://www.igifitness.com/uploads/1/2/7/6/127666360/published/igi-bootcamp-logo.png?1618859705" />
      <TextBoxTitle>
        Desafie-Se
      </TextBoxTitle>
      <Text>
        Donec nulla turpis, vulputate non quam viverra, iaculis hendrerit purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean aliquet sed est non scelerisque. Vestibulum laoreet consequat venenatis.
      </Text>
    </Advertising> 
  </Benefits>
      <TextButton>
        <a href="https://www.bancointer.com.br/">Aprenda Mais</a>
      </TextButton>
</TextBox>
</div>
    );
}


const TextBox = styled.div`
width:100%;
background-color: #e6e6e6; /* Para navegadores que não suportam gradientes */
background-image: linear-gradient(#ffffff 0%, #ffffff 50%, #b3b3b3 100%);
margin:0;
padding:0;
display:block;
text-align:center; 
`;

const Title = styled.h3`
font-size:30px;
margin-top:5px;
color:black;
font-weight: bold;

/*########## Mobile ##########*/    
@media screen and (max-width: 1050px) {
font-size:24px;
}
`;

const Benefits = styled.div`
display:flex;
justify-content: space-between;
margin-top:-15px;
padding:0px 150px 0 150px;

/*########## Mobile ##########*/    
@media screen and (max-width: 1050px) {
padding:0px 0px 0 0px;
display:block;
}
`;

const Advertising = styled.div`
border: 1px solid   #00CCFF;
border-radius: 6px;
width:85%;
margin:10px;

img {width:50%;
filter: sepia(100%) hue-rotate(1deg) saturate(1000%);}

/*########## Mobile ##########*/    
@media screen and (max-width: 1050px) {
margin:auto;

img{float:left;
width:100px;}
}
`;

const TextBoxTitle = styled.div`
font-size:20px;
font-weight: bold;
margin:5% 0 5% 0;

/*########## Mobile ##########*/    
@media screen and (max-width: 1050px) {
margin:2.5% 0 2.5% 0; 
}
`;

const Text = styled.div`
text-align:justify;
margin-left:10px;
margin-right:10px;
`;

const TextButton = styled.button`
background-color: #1899D6;
border: solid transparent;
border-radius: 16px;
border-width: 0 0 4px;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: Varela Round;
font-size: 13px;
font-weight: 700;
letter-spacing: .8px;
line-height: 20px;
margin-top:25px;
margin-bottom:25px;
outline: none;
overflow: visible;
padding: 13px 6px;
text-align: center;
text-transform: uppercase;
touch-action: manipulation;
transform: translateZ(0);
transition: filter .2s;
user-select: none;
-webkit-user-select: none;
vertical-align: middle;
white-space: nowrap;
width: 125px;

&:after {background-clip: padding-box;
background-color: #1CB0F6;
border: solid transparent;
border-radius: 16px;
border-width: 0 0 4px;
bottom: -4px;
content: "";
left: 0;
position: absolute;
right: 0;
top: 0;
z-index: -1;}

:hover:not(:disabled) {
filter: brightness(1.1);
}

a {text-decoration:none}
`;



export default Bootcamps