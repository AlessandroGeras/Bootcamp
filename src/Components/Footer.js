import React from "react";
import styled from "styled-components";


function Footer() {

    return (
<div>
<FooterContainer>
    <Information>
        <Title>
            Empresa
        </Title>
        <Link>
            Sobre Nós
        </Link>
        <Link>
            Blog
        </Link>
        <Link>
            Carreiras
        </Link>
    </Information>

    <Information>
        <Title>
            Serviços
        </Title>
        <Link>
            Bootcamp
        </Link>
        <Link>
            Palestras
        </Link>
        <Link>
            Seminários
        </Link>
    </Information>

    <Information>
        <Title>
            Aprenda Mais
        </Title>
        <Link>
            Desenvolvedores
        </Link>
        <Link>
            Designers
        </Link>
        <Link>
            Hackers
        </Link>    
    </Information>

    <Information>
        <Title>
            Suporte
        </Title>
        <Link>
            Ajuda
        </Link>
        <Link>
            FAQ
        </Link>
        <Link>
            Contato
        </Link>
    </Information>    
</FooterContainer>
<WebMaster>
    Webmaster Alessandro Geras - Futuro sangue laranja =D
</WebMaster>
</div>
    );
}


const FooterContainer = styled.div`
width:100%;
display:flex;
justify-content: space-between;
background: #5a5a5a;
background: linear-gradient(#5a5a5a 0%, #3b3b3b 100%);
`;

const Information = styled.div`
margin: -10px auto -5px auto;
text-align:center;
`;

const Title = styled.h1`
font-size:22px;
color:#dedede;

/*########## Mobile ##########*/  
@media screen and (max-width: 350px) {
font-size:14px;
}
`;

const Link = styled.h2`
font-size:16px;
color:#aba9a9;

/*########## Mobile ##########*/  
@media screen and (max-width: 350px) {
font-size:10px;
}
`;

const WebMaster = styled.div`
width:100%;
text-align:center;
font-size:14px;
font-weight:bold;
background:rgb(255, 115, 0);
color:black;
`;



export default Footer