import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import WebFont from 'webfontloader';


WebFont.load({
    google: {
      families: ["Lobster","JetBrains Mono"]
    }
  });
 

function Forms(props) {    
    const [newuserformValue, newusersetValue] = useState("Usuário");
    const [newuserpasswordformValue, newuserpasswordsetValue] = useState("Senha");
    const [loginformValue, loginsetValue] = useState("Usuário");
    const [loginpasswordformValue, loginpasswordsetValue] = useState("Senha");
    const [newuserinputValue, newuserInput] = useState(false);
    const [newuserinputLenght, newuserLenght] = useState(0);

    const backendusersurl = "http://localhost:5000/users";
    const backendloginurl = "http://localhost:5000/login";
    const [backendnewuserformValue, backendnewusersetValue] = useState("");
    const [backendnewuserpasswordformValue, backendnewuserpasswordsetValue] = useState("");
    const [backendloginformValue, backendloginsetValue] = useState("");
    const [backendloginpasswordformValue, backendloginpasswordsetValue] = useState("");
    const [showstore, showstoresetValue] = useState(false);
    const [storecssactive, storecsssetActive] = useState(false);
    const [storecssvalue, storecsssetValue] = useState(0);
    const [storejsactive, storejssetActive] = useState(false);
    const [storejsvalue, storejssetValue] = useState(0);
    const [storereactjsactive, storereactjssetActive] = useState(false);
    const [storereactjsvalue, storereactjssetValue] = useState(0);
    const [storesqlactive, storesqlsetActive] = useState(false);
    const [storesqlvalue, storesqlsetValue] = useState(0);
    const [transaction, transactionActive] = useState(false);
    const [gotcss, gotcssActive] = useState(false);
    const [gotjs, gotjsActive] = useState(false);
    const [gotreactjs, gotreactjsActive] = useState(false);
    const [gotsql, gotsqlActive] = useState(false);

    
const newuseronFocus = () => {
    newusersetValue("");
};

const newuserpasswordonFocus = () => {
    newuserpasswordsetValue("");
};

const loginonFocus = () => {
    loginsetValue("");
};

const loginpasswordonFocus = () => {
    loginpasswordsetValue("");
};

const inputnewuser = (event) => {
    const regex = (/[^a-zA-Z0-9]/g.test(event.target.value));
    const regexlenght = event.target.value;
    newuserInput(regex);
    newuserLenght(regexlenght.length);
    backendnewusersetValue(event.target.value);
};

const inputnewuserpassword = (event) => {
    backendnewuserpasswordsetValue(event.target.value);
};

const inputlogin = (event) => {
    backendloginsetValue(event.target.value);
};

const inputloginpassword = (event) => {
    backendloginpasswordsetValue(event.target.value);
};

const hidelogin = () => {
   props.disablelogin(true);
   showstoresetValue(true);
};

const storeCSS = () => {
    storecsssetActive(!storecssactive);
    if(storecssactive){
        storecsssetValue(0);
    }
    else{
        storecsssetValue(500);
    }
 };

 const storeJS = () => {
    storejssetActive(!storejsactive);
    if(storejsactive){
        storejssetValue(0);
    }
    else{
        storejssetValue(750);
    }
 };

 const storeReactJS = () => {
    storereactjssetActive(!storereactjsactive);
    if(storereactjsactive){
        storereactjssetValue(0);
    }
    else{
        storereactjssetValue(930);
    }
 };

 const storeSQL = () => {
    storesqlsetActive(!storesqlactive);
    if(storesqlactive){
        storesqlsetValue(0);
    }
    else{
        storesqlsetValue(1280);
    }
 };


const registernewuser = (event) => {
    event.preventDefault();

    const backendForm = {
        username: backendnewuserformValue,
        password: backendnewuserpasswordformValue,
    }

    fetch(backendusersurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(backendForm)        
    })
    .then((response) => response.json())
    .then(showjson => {
        console.log(showjson); 
        if(showjson.Sucesso===("Usuário Criado")){
            alert("Sucesso: Usuário Criado");
        }
        if(showjson.Erro===("Usuário Existente")){
            alert("Erro: Usuário Existente");
        }
    }
    )
    .catch((error)=>{
        console.log("Erro",error);
    }
    )
}


const login = (event) => {
    if(event){
        event.preventDefault();
    }
    const backendForm = {
        username: backendloginformValue,
        password: backendloginpasswordformValue,
    }

    fetch(backendloginurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(backendForm)        
    })
    .then((response) => response.json())
    .then(showjson => {     
            if(showjson.css===true){
                gotcssActive(true);
            }
            if(showjson.js===true){
                gotjsActive(true);
            }
            if(showjson.reactjs===true){
                gotreactjsActive(true);
            }
            if(showjson.sql===true){
                gotsqlActive(true);
            }
            if(showjson.css && showjson.js && showjson.reactjs && showjson.sql){
                alert("Você comprou tudo, Game Over =D\n\nEste servidor usa autenticação de rotas por token. Se quiser experimentar tente acessar o seguinte endereço por até 1 minuto depois do seu login. Depois de 1 minuto seu acesso será bloqueado e será requerido logar na conta novamente. Fiz isso apenas para fins de teste pois é a primeira vez que implanto esta tecnologia. O endereço está no console do DevTools do seu navegador, basta apenas clicar ou copiar e colar. Abraço.");
                console.log("http://localhost:5000/secureusers?token="+showjson.Token)
            }
            else{
            
                if(showjson.Sucesso==="Usuário Logado"){
                    hidelogin();    
                    transactionActive(false);
                    storecsssetValue(0);
                    storejssetValue(0);
                    storereactjssetValue(0);
                    storesqlsetValue(0);
                    storecsssetActive(false);
                    storejssetActive(false);
                    storereactjssetActive(false);
                    storesqlsetActive(false);
                }            
            }
        
        if(showjson.Erro==="Usuário Não Cadastrado"){
            console.log(showjson.Erro);
            alert("Usuário Não Cadastrado");
        }
        if(showjson.Erro==="Senha Inválida"){
            console.log(showjson.Erro);
            alert("Senha Inválida");
        }
        }
    )
    .catch((error)=>{
        console.log("Erro",error);
        }
    )
}


const insert = (event) => {
    event.preventDefault();    

    const backendForm = {
        username: backendloginformValue,
        css: storecssactive,
        js: storejsactive,
        reactjs: storereactjsactive,
        sql: storesqlactive
    }
    fetch(backendusersurl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(backendForm)          
    })
    .then((response) => response.json())
    .then(showjson => {
        console.log(showjson.Sucesso);
        transactionActive(true);
        }
    )
    .catch((error)=>{
        console.log("Erro",error);
         }
    )
}

const search = (event) => {
    event.preventDefault(); 

    fetch("http://localhost:5000/secureusers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization":"Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkVsaXNhIiwiaWF0IjoxNjQ0Mzc5OTk1fQ.o3bkp-P7Zp65EU0xCo_u0zs1_G-D5Z8Nu2OY5f2-MlY"
        },      
    })
    .then((response) => response.json())
    .then(showjson => {
        console.log(showjson); 
        if(showjson.Sucesso===("Usuário Cadastrado")){
            alert("Sucesso: Usuário Cadastrado");
        }
        if(showjson.Erro===("Usuário Existente")){
            alert("Erro: Usuário Existente");
        }
    }
    )
    .catch((error)=>{
        console.log("Erro",error);
    }
    )
}



    return (   
<div>      
<Container className={props.counter ===0 ? null : props.newuser ? "backgroundorange" : "backgroundblue"}>
    <FormsContainer className={props.logoff ? "hidestore" : showstore===true ? "showstore" : "hidestore"}>
        <ContainerForm className={props.counter ===0 ? "hideform" : props.newuser ? "showformanimation" : "hideformanimation"}>
            <form>
                <ContainerFormTitle>
                    Cadastrar Usuário
                </ContainerFormTitle>
                <ContainerInput className={newuserformValue ==="Usuário" ? null : "showregex"}>
                    <div key={newuserformValue}>
                        <input className="inputbox" type="text" defaultValue={newuserformValue} onFocus={newuseronFocus} onChange={inputnewuser} /><br />
                    </div>
                    <Regex className={newuserformValue ==="Usuário" ? null : "showregex"}>
                        <RegexItem className={newuserinputLenght >=8 ? "itemlistchecked" : "itemlist"}>
                            Mínimo 8 caracteres
                        </RegexItem>
                        <RegexItem className={newuserinputValue === false ? "itemlistchecked" : "itemlist"}>
                            Apenas letras ou números (sem caracteres especiais)
                        </RegexItem>
                    </Regex>
                </ContainerInput>
                <ContainerFormTitle className={newuserformValue ==="Usuário" ? "hideregex" : "showregex"}>
                    Senha
                </ContainerFormTitle>
                <ContainerInput>
                    <div key={newuserpasswordformValue}>
                        <input className="inputbox" type="text" defaultValue={newuserpasswordformValue} onFocus={newuserpasswordonFocus} onChange={inputnewuserpassword} /><br /><br />
                    </div>
                </ContainerInput>
                <SubmitButton>
                    <input type="submit" value="Cadastrar" onClick={registernewuser} className={newuserinputLenght <8 ? "hidebutton" : newuserinputValue ? "hidebutton" : null}/>
                </SubmitButton>
            </form> 
            </ContainerForm>
            <ContainerForm className={props.counter ===0 ? "showform" : props.newuser ? "hideformanimation" : "showformanimation"}>
            <form>
                <ContainerFormTitle>
                    Login Usuário
                </ContainerFormTitle>
                <ContainerInput>
                    <div key={loginformValue}>
                        <input className="inputbox" type="text" defaultValue={loginformValue} onFocus={loginonFocus} onChange={inputlogin} /><br />
                    </div>                    
                </ContainerInput>
                <ContainerFormTitle>
                    Senha
                </ContainerFormTitle>
                <ContainerInput>
                    <div key={loginpasswordformValue}>
                        <input className="inputbox" type="text" defaultValue={loginpasswordformValue} onFocus={loginpasswordonFocus} onChange={inputloginpassword} /><br /><br />
                    </div>
                </ContainerInput>
                <SubmitButton>
                    <input type="submit" value="Login" onClick={login} />
                </SubmitButton>
            </form> 
        </ContainerForm>
    </FormsContainer>
    <Title className={props.logoff ? "hidestore" : showstore===true ? "showstore" : "hidestore"}>
        Bootcamp Inter<br />
        Front-End Dev
    </Title>
    <IframeVideo className={props.logoff ? "hidestore" : showstore===true ? "showstore" : "hidestore"}>
        <iframe width="350" height="225" src="https://www.youtube.com/embed/KtoWtBqvaJk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </IframeVideo>
    <Store className={props.logoff ? "hidestore" : showstore===true ? "showstore" : "hidestore"}>  
        <StoreTitle className={transaction ? "transactionhide" : null}>            
            <StoreTitleEffect className="EffectOne">  
                Atualize-se          
            </StoreTitleEffect>
            <StoreTitleEffect className="EffectTwo">   
                Atualize-se                 
            </StoreTitleEffect>
        </StoreTitle>
        <StoreText className={transaction ? "transactionhide" : null}>
            <br />Escolha os cursos em que você deseja se aperfeiçoar e vamos a luta.
        </StoreText>
  
        <StoreItems className={transaction ? "transactionhide" : null}>
        <StoreCheckBox className={gotcss ? "hideitemshop" : null}>
    <input type="checkbox" onChange={storeCSS}/>
    <div>
        CSS<br/>
        R$ 500,00
    </div>
         </StoreCheckBox>
  
         <StoreCheckBox className={gotjs ? "hideitemshop" : null}>
    <input type="checkbox" onChange={storeJS}/>
    <div>
        JS<br/>
        R$ 750,00
    </div>
         </StoreCheckBox>
  
         <StoreCheckBox className={gotreactjs ? "hideitemshop" : null}>
    <input type="checkbox" onChange={storeReactJS}/>
    <div>
        ReactJS<br/>
        R$ 930,00
    </div>
          </StoreCheckBox>
  
          <StoreCheckBox className={gotsql ? "hideitemshop" : null}>
    <input type="checkbox" onChange={storeSQL}/>
    <div>
        SQL<br/>
        R$ 1280
    </div>
          </StoreCheckBox>
          </StoreItems>
  
          <StoreText className={transaction ? "transactionhide" : "descont"}>
                15% de desconto só hoje
          </StoreText>  
          <StoreText className={transaction ? null : "transactionhide"}>
          Transação completa! Você comprou os cursos: <br />
          {storecssactive ? "CSS   ":null}
          {storejsactive ? "JS   ":null}
          {storereactjsactive ? "ReactJS   ":null}
          {storesqlactive ? "SQL   ":null}
          </StoreText>         
  
          <a href="#" onClick={insert} className={transaction ? "transactionhide" : storecssactive ? "buy" : storejsactive ? "buy" : storereactjsactive ? "buy" : storesqlactive ? "buy" : "transactionforbidden"}>Comprar Cursos</a>
          <a href="#" onClick={login} className={transaction ? "buy" : "transactionhide"}>Fazer outra compra</a>
          <ValorTotal>
              Valor Total: R$ {storecssvalue+storejsvalue+storereactjsvalue+storesqlvalue}
          </ValorTotal>
    </Store>    
</Container>  
</div> 
);
}

const OrangeBackground = keyframes`
0%   {background-position:0% 0%}
100% {background-position:100% 100%}
`;

const BlueBackground = keyframes`
0%   {background-position:100% 100%}
100% {background-position:0% 0%}
`;

const Container = styled.div`
background-position:0% 0%;
width:100%;
display:flex;
padding:20px 0 20px 0;
background-size:100% 200%;
background-color: #1E90FF; /* Para navegadores que não suportam gradientes */
background-image: linear-gradient(rgb(255, 115, 0),  #ffd8b3, #1E90FF);  

&.backgroundorange{animation-name: ${OrangeBackground};
animation-duration: 1s;
animation-fill-mode: forwards;}

&.backgroundblue{animation-name: ${BlueBackground};
animation-duration: 1s;
animation-fill-mode: forwards;}

/*########## Mobile ##########*/    
@media screen and (max-width: 900px) {
display:block;
}
`;

const FormsContainer = styled.div`
display:flex;
width:250px;
margin:auto;
padding:0px;

&.showstore{display:none};
`;

const Title = styled.div`
font-size:32px;
color:white;
text-shadow: 2px 2px 4px #000000;
font-family:Lobster;
margin:auto;
padding:0;

&.showstore{display:none}

&.hidestore{display:initial}

/*########## Mobile ##########*/    
@media screen and (max-width: 900px) {
text-align:center;
margin-top:5%;
}
`;

const FormMoveOut = keyframes`
0%   {left:0;width:100%;height:100%}
100% {left:-1000px;width:0%;height:0%}
`;

const FormMoveIn = keyframes`
0%   {left:-1000px;width:100%;height:100%;visibility:visible}
100% {left:0;width:100%;height:100%;visibility:visible}
`;

const ContainerForm = styled.div`
margin:auto;

&.showform{width:100%;height:100%;}

&.hideform{width:0%;height:0%;visibility:hidden}

&.hideformanimation{position:relative;
width:100%;
height:100%;
animation-name: ${FormMoveOut};
animation-duration: 1s;
animation-fill-mode: forwards;}

&.showformanimation{position:relative;
left:-1000px;
width:0%;
height:0%;
visibility:hidden;
animation-name: ${FormMoveIn};
animation-duration: 1s;
animation-fill-mode: forwards;
animation-delay:0.5s}
`;

const ContainerFormTitle = styled.h2`
color:white;
text-shadow:0px 2px 3px #555;
font-size:14px;
margin-bottom:5px;
padding:0;

&.showregex {
margin-top:50px}
`;

const ContainerInput = styled.div`
height:25px;
overflow:hidden;

&.showregex {overflow:visible;}

.inputbox{width:97%;
border-radius: 6px;
border: 1px solid black;}
`;

const UserFormTranslate = keyframes`
0%   {opacity: 0.01}
100% {opacity: 1}
`;

const Regex = styled.ul`
font-size: 13px;
font-style: italic;
text-align: left;
list-style: disc;
list-style-position: inside;
max-width: 400px;
margin: 10px 0 0 -38px;
opacity:0;

&.showregex {
animation-name: ${UserFormTranslate};
animation-duration:2s;
animation-fill-mode: forwards;}
`;

const RegexItem = styled.li`
&.itemlist {text-decoration: none;
color:red;}

&.itemlistchecked {text-decoration: line-through;
color:green;}
`;

const SubmitButton = styled.div`
input {
align-items: center;
appearance: none;
background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
border: 0;
border-radius: 6px;
box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
box-sizing: border-box;
color: #fff;
cursor: pointer;
font-family: "JetBrains Mono",monospace;
height: 24px;
justify-content: center;
line-height: 1;
list-style: none;
overflow: hidden;
padding-left: 16px;
padding-right: 16px;
position: relative;
top:5px;
text-align: left;
text-decoration: none;
transition: box-shadow .15s,transform .15s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
will-change: box-shadow,transform;
font-size: 12px;
display:block;
margin:auto;}

&:hover{transform: translateY(-2px)};

.hidebutton{display:none};
`;

const IframeVideo = styled.div`
display:block;
width:350px;
margin:auto;
padding:0px;

&.showstore{display:none}

&.hidestore{display:block}

/*########## Mobile ##########*/    
@media screen and (max-width: 900px) {
margin-top:50px;
}
`;

const Store = styled.div`
max-width: 300px;
margin: auto;
display:none;

&.showstore{display:initial}

&.hidestore{display:none} 
  
a {
display:block;
margin:30px auto;
width:200px;
padding:10px 20px;
border:2px solid #50bcf2;
border-radius:50px;
color:#f5f5f5;
font-size:18px;
font-weight:600;
text-decoration:none;
text-align:center;
transition:.3s ease;
}
  
.buy:hover {
background-color: #50bcf2;
}

.transactionhide{display:none};

.transactionforbidden{pointer-events:none};
`;

const StoreTitle = styled.div`
display:grid;
grid-template-areas: "overlap";

&.transactionhide{display:none};
`;

const StoreTitleEffect = styled.div`
color:#363832;
font-family: "poppins",sans-serif;
font-size: 40px;
font-weight: bold;
background-clip: text;
-webkit-background-clip: text;
grid-area: overlap;
letter-spacing: 1px;
-webkit-text-stroke: 3px transparent;
text-align:center;

&.EffectOne{background-image: repeating-linear-gradient(105deg,#ffb338 0%,#3e2904 5%,#ffb338 12%);
color:transparent;
filter:drop-shadow(5px 15px 15px black);
transform:scaleY(1.07);
transform-origin: top;}

&.EffectTwo{background-image: repeating-linear-gradient(5deg,#ffb338 0%,#77571d 23%,#ffb338 81%);
color:#1e2127;
filter:drop-shadow(5px 15px 15px black);
transform:scaleY(1.05);
transform-origin: top;
transform:scale(1)}
`;

const StoreText = styled.h3`
color:black;
text-align:center;

&.descont{
color: #50bcf2;
}

&.transactionhide{display:none}
}
`;

const StoreCheckBox = styled.div`
position:relative;
width:140px;
height:100px;
margin:5px;
float:left;
border:2px solid #50bcf2;
box-sizing:border-box;

div{
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
line-height:25px;
transition:.5s ease;
text-align:center;
}

input{
position:absolute;
top:0;
left:0;
width:140px;
height:100px;
opacity:0;
cursor:pointer;
}
  
input[type=checkbox]:checked ~ div {
background: #50bcf2;
}

&.hideitemshop{background:#50bcf2;
pointer-events:none;
opacity:0.5};
`;

const StoreItems = styled.div`
&.transactionhide{display:none};
`;

const ValorTotal = styled.h3`
color:black;
text-align:center;
`;






  export default Forms;