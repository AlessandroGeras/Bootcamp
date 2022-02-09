import React, { useState } from "react";
import styled from "styled-components";
import Forms from "./Forms";


function NavBar() {
    const [menuisActive, setmenuActive] = useState(false);
    const [newuserisActive, setnewuserActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const [hidelogin, setloginActive] = useState(false);
    const [logoff, setlogoffActive] = useState(false);

const showmenu = () => {
    setmenuActive(!menuisActive);
};

const shownewuser = () => {
    setnewuserActive(!newuserisActive);
    setCounter(counter+1);
};

const setlogoff = () => {
    setlogoffActive(!logoff);
    setloginActive(!hidelogin);
    window.location.reload();
};

    return (
<div>
  <Lista>
  <ListaInicial className={menuisActive ? "hidelist" : "showlist"}><a href="#">PÁGINA INICIAL</a></ListaInicial>
  <ListaEsquerda className={menuisActive ? "hidelist" : "showlist"}><a href="#">NOVIDADES</a></ListaEsquerda>
  <ListaEsquerda className={menuisActive ? "hidelist" : "showlist"}><a href="#">CONTATO</a></ListaEsquerda>
  <ListaEsquerda className={menuisActive ? "hidelist" : "showlist"}><a href="#">SOBRE NÓS</a></ListaEsquerda>
  <ListaDireita className={menuisActive ? "hidelist" : "showlist"}><hr /> </ListaDireita>
  <ShowLogin className={hidelogin ? "hide" : null}>
  <ListaDireita className={menuisActive ? "hidelist" : "showlist"}><a href="#" onClick={shownewuser}>{newuserisActive ? "LOGIN" : "CADASTRAR"}</a></ListaDireita>
  </ShowLogin>
  <ShowLogin className={hidelogin ? null : "hide"}>
  <ListaDireita className={menuisActive ? "hidelist" : "showlist"}><a href="#" onClick={setlogoff}>LOGOFF</a></ListaDireita>
  </ShowLogin>
  <UniCode className={menuisActive ? "hidelist" : "showlist"}><a href="#" onClick={showmenu}>&#9776;</a></UniCode>
</Lista>

<Forms newuser={newuserisActive} counter={counter} logoff={logoff} disablelogin={hidelogin=>setloginActive(hidelogin)}/>
</div>
);
}


const Lista = styled.ul`
overflow:hidden;      
background:#eee;
list-style-type:none;
padding:0px;
margin:0px;
font-size:15px;

a {display:block;
padding:8px;
color:#666;
text-decoration:none;}

a:hover {background-color:#0080ff;
color:white;}

hr { border: 0;
height: 1px;
background: #333;
background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;

const ListaInicial = styled.li`
float:left;

/*########## Mobile ##########*/    
@media screen and (max-width: 680px) {
&.showlist{display:block;float:none}
}
`;

const ListaEsquerda = styled.li`
float:left;

/*########## Mobile ##########*/    
@media screen and (max-width: 680px) {
&.hidelist{display:none}
&.showlist{display:block;float:none}
}
`;

const ListaDireita = styled.li`
float:right;

/*########## Mobile ##########*/    
@media screen and (max-width: 680px) {
&.hidelist{display:none}
&.showlist{display:block;float:none}
}
`;

const UniCode = styled.li`
float:left;
display:none;

/*########## Mobile ##########*/    
@media screen and (max-width: 680px) {
display:block;
float:right;
position:absolute;
top:0;
right:0;
}
`;

const ShowLogin = styled.div`
display:initial;

&.hide{display:none};
`;



export default NavBar;