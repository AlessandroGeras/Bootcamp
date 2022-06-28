import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Lobster", "JetBrains Mono"],
  },
});

/* Forms "Cadastrar" and "Login"
 * new_username is the new user from "Cadastrar" form
 * new_user_password is the password from "Cadastrar" form
 * login_username is the username from "Login" form
 * login_password is the password from "Login" form
 * new_username_regex is a boolean new_username_lenght to define if regex tooltips will be showing
 * new_username_lenght is for use with regex
 *
 * Api variables
 * api_newuser is the new user to be registered
 * api_newuser_password is the password for the new user to be registered
 * api_login_username is the username to be logged
 * api_login_password is the password to be logged
 *
 * Store
 * show_store is a boolean to active the store after login
 * store_css_active, store_js_active, store_react_active and store_sql_active are booleans to trigger what itens are selected to make the total price from
 * transaction is a boolean to hide the store itens after purchase to show only the total paid price
 * got_css, got_js, got_reactjs and got_sql are booleans to show to the user, whether or not, these itens are available in store to be purchased
 */
function Forms(props) {
  const [new_username, new_usernameSet] = useState("Usuário");
  const [new_user_password, new_user_passwordSet] = useState("Senha");
  const [login_username, login_usernameSet] = useState("Usuário");
  const [login_password, login_passwordSet] = useState("Senha");
  const [new_username_regex, new_username_regexSet] = useState(false);
  const [new_username_lenght, newuserLenght] = useState(0);

  const api_newuser_path = "https://bootcamp-api-backend.herokuapp.com/users";
  const api_login_path = "https://bootcamp-api-backend.herokuapp.com/login";
  const [api_newuser, api_newuserSet] = useState("");
  const [api_newuser_password, api_newuser_passwordSet] = useState("");
  const [api_login_username, api_login_usernameSet] = useState("");
  const [api_login_password, api_login_passwordSet] = useState("");
  const [show_store, show_storeSet] = useState(false);
  const [store_css_active, store_css_activeSet] = useState(false);
  const [store_css_price, store_css_priceSet] = useState(0);
  const [store_js_active, store_js_activeSet] = useState(false);
  const [store_js_price, store_js_priceSet] = useState(0);
  const [store_react_active, store_react_activeSet] = useState(false);
  const [store_reactjs_price, store_reactjs_priceSet] = useState(0);
  const [store_sql_active, store_sql_activeSet] = useState(false);
  const [store_sql_price, store_sql_priceSet] = useState(0);
  const [transaction, transactionSet] = useState(false);
  const [got_css, got_cssSet] = useState(false);
  const [got_js, got_jsSet] = useState(false);
  const [got_reactjs, got_reactjsSet] = useState(false);
  const [got_sql, got_sqlSet] = useState(false);

  const newuseronFocus = () => {
    new_usernameSet("");
  };

  const newuserpasswordonFocus = () => {
    new_user_passwordSet("");
  };

  const loginonFocus = () => {
    login_usernameSet("");
  };

  const loginpasswordonFocus = () => {
    login_passwordSet("");
  };

  const inputnewuser = (event) => {
    const regex = /[^a-zA-Z0-9]/g.test(event.target.value);
    const regexlenght = event.target.value;
    new_username_regexSet(regex);
    newuserLenght(regexlenght.length);
    api_newuserSet(event.target.value);
  };

  const inputnewuserpassword = (event) => {
    api_newuser_passwordSet(event.target.value);
  };

  const inputlogin = (event) => {
    api_login_usernameSet(event.target.value);
  };

  const inputloginpassword = (event) => {
    api_login_passwordSet(event.target.value);
  };

  const hidelogin = () => {
    props.disablelogin(true);
    show_storeSet(true);
  };

  const storeCSS = () => {
    store_css_activeSet(!store_css_active);
    if (store_css_active) {
      store_css_priceSet(0);
    } else {
      store_css_priceSet(500);
    }
  };

  const storeJS = () => {
    store_js_activeSet(!store_js_active);
    if (store_js_active) {
      store_js_priceSet(0);
    } else {
      store_js_priceSet(750);
    }
  };

  const storeReactJS = () => {
    store_react_activeSet(!store_react_active);
    if (store_react_active) {
      store_reactjs_priceSet(0);
    } else {
      store_reactjs_priceSet(930);
    }
  };

  const storeSQL = () => {
    store_sql_activeSet(!store_sql_active);
    if (store_sql_active) {
      store_sql_priceSet(0);
    } else {
      store_sql_priceSet(1280);
    }
  };

  const registernewuser = (event) => {
    event.preventDefault();

    const backendForm = {
      username: api_newuser,
      password: api_newuser_password,
    };

    fetch(api_newuser_path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendForm),
    })
      .then((response) => response.json())
      .then((showjson) => {
        console.log(showjson);
        if (showjson.Sucesso === "Usuário Criado") {
          alert("Sucesso: Usuário Criado");
        }
        if (showjson.Erro === "Usuário Existente") {
          alert("Erro: Usuário Existente");
        }
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  };

  const login = (event) => {
    if (event) {
      event.preventDefault();
    }
    const backendForm = {
      username: api_login_username,
      password: api_login_password,
    };

    fetch(api_login_path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendForm),
    })
      .then((response) => response.json())
      .then((showjson) => {
        if (showjson.css === true) {
          got_cssSet(true);
        }
        if (showjson.js === true) {
          got_jsSet(true);
        }
        if (showjson.reactjs === true) {
          got_reactjsSet(true);
        }
        if (showjson.sql === true) {
          got_sqlSet(true);
        }
        if (showjson.css && showjson.js && showjson.reactjs && showjson.sql) {
          alert(
            "Você comprou tudo, Game Over =D\n\nEste servidor usa autenticação de rotas por token. Se quiser experimentar tente acessar o seguinte endereço por até 1 minuto depois do seu login. Depois de 1 minuto seu acesso será bloqueado e será requerido logar na conta novamente. Fiz isso apenas para fins de teste pois é a primeira vez que implanto esta tecnologia. O endereço está no console do DevTools do seu navegador, basta apenas clicar ou copiar e colar. Abraço."
          );
          console.log(
            "https://bootcamp-api-backend.herokuapp.com/secureusers?token=" +
              showjson.Token
          );
        } else {
          if (showjson.Sucesso === "Usuário Logado") {
            hidelogin();
            transactionSet(false);
            store_css_priceSet(0);
            store_js_priceSet(0);
            store_reactjs_priceSet(0);
            store_sql_priceSet(0);
            store_css_activeSet(false);
            store_js_activeSet(false);
            store_react_activeSet(false);
            store_sql_activeSet(false);
          }
        }

        if (showjson.Erro === "Usuário Não Cadastrado") {
          console.log(showjson.Erro);
          alert("Usuário Não Cadastrado");
        }
        if (showjson.Erro === "Senha Inválida") {
          console.log(showjson.Erro);
          alert("Senha Inválida");
        }
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  };

  const insert = (event) => {
    event.preventDefault();

    const backendForm = {
      username: api_login_username,
      css: store_css_active,
      js: store_js_active,
      reactjs: store_react_active,
      sql: store_sql_active,
    };
    fetch(api_newuser_path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendForm),
    })
      .then((response) => response.json())
      .then((showjson) => {
        console.log(showjson.Sucesso);
        transactionSet(true);
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  };

  /* 
  const search = (event) => {
    event.preventDefault();

    fetch("https://bootcamp-api-backend.herokuapp.com/secureusers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkVsaXNhIiwiaWF0IjoxNjQ0Mzc5OTk1fQ.o3bkp-P7Zp65EU0xCo_u0zs1_G-D5Z8Nu2OY5f2-MlY",
      },
    })
      .then((response) => response.json())
      .then((showjson) => {
        console.log(showjson);
        if (showjson.Sucesso === "Usuário Cadastrado") {
          alert("Sucesso: Usuário Cadastrado");
        }
        if (showjson.Erro === "Usuário Existente") {
          alert("Erro: Usuário Existente");
        }
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  };
  */

  return (
    <div>
      <Container
        className={
          props.counter === 0
            ? null
            : props.newuser
            ? "backgroundorange"
            : "backgroundblue"
        }
      >
        <FormsContainer
          className={
            props.logoff
              ? "hidestore"
              : show_store === true
              ? "showstore"
              : "hidestore"
          }
        >
          <ContainerForm
            className={
              props.counter === 0
                ? "hideform"
                : props.newuser
                ? "showformanimation"
                : "hideformanimation"
            }
          >
            <form>
              <ContainerFormTitle>Cadastrar Usuário</ContainerFormTitle>
              <ContainerInput
                className={new_username === "Usuário" ? null : "showregex"}
              >
                <div key={new_username}>
                  <input
                    className="inputbox"
                    type="text"
                    defaultValue={new_username}
                    onFocus={newuseronFocus}
                    onChange={inputnewuser}
                  />
                  <br />
                </div>
                <Regex
                  className={new_username === "Usuário" ? null : "showregex"}
                >
                  <RegexItem
                    className={
                      new_username_lenght >= 8 ? "itemlistchecked" : "itemlist"
                    }
                    new_username_regex
                  >
                    Mínimo 8 caracteres
                  </RegexItem>
                  <RegexItem
                    className={
                      new_username_regex === false
                        ? "itemlistchecked"
                        : "itemlist"
                    }
                  >
                    Apenas letras ou números (sem caracteres especiais)
                  </RegexItem>
                </Regex>
              </ContainerInput>
              <ContainerFormTitle
                className={
                  new_username === "Usuário" ? "hideregex" : "showregex"
                }
              >
                Senha
              </ContainerFormTitle>
              <ContainerInput>
                <div key={new_user_password}>
                  <input
                    className="inputbox"
                    type="text"
                    defaultValue={new_user_password}
                    onFocus={newuserpasswordonFocus}
                    onChange={inputnewuserpassword}
                  />
                  <br />
                  <br />
                </div>
              </ContainerInput>
              <SubmitButton>
                <input
                  type="submit"
                  value="Cadastrar"
                  onClick={registernewuser}
                  className={
                    new_username_lenght < 8
                      ? "hidebutton"
                      : new_username_regex
                      ? "hidebutton"
                      : null
                  }
                />
              </SubmitButton>
            </form>
          </ContainerForm>
          <ContainerForm
            className={
              props.counter === 0
                ? "showform"
                : props.newuser
                ? "hideformanimation"
                : "showformanimation"
            }
          >
            <form>
              <ContainerFormTitle>Login Usuário</ContainerFormTitle>
              <ContainerInput>
                <div key={login_username}>
                  <input
                    className="inputbox"
                    type="text"
                    defaultValue={login_username}
                    onFocus={loginonFocus}
                    onChange={inputlogin}
                  />
                  <br />
                </div>
              </ContainerInput>
              <ContainerFormTitle>Senha</ContainerFormTitle>
              <ContainerInput>
                <div key={login_password}>
                  <input
                    className="inputbox"
                    type="text"
                    defaultValue={login_password}
                    onFocus={loginpasswordonFocus}
                    onChange={inputloginpassword}
                  />
                  <br />
                  <br />
                </div>
              </ContainerInput>
              <SubmitButton>
                <input type="submit" value="Login" onClick={login} />
              </SubmitButton>
            </form>
          </ContainerForm>
        </FormsContainer>
        <Title
          className={
            props.logoff
              ? "hidestore"
              : show_store === true
              ? "showstore"
              : "hidestore"
          }
        >
          Bootcamp
          <br />
          Front-End Dev
        </Title>
        <IframeVideo
          className={
            props.logoff
              ? "hidestore"
              : show_store === true
              ? "showstore"
              : "hidestore"
          }
        >
          <iframe
            width="350"
            height="225"
            src="https://www.youtube.com/embed/KtoWtBqvaJk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </IframeVideo>
        <Store
          className={
            props.logoff
              ? "hidestore"
              : show_store === true
              ? "showstore"
              : "hidestore"
          }
        >
          <StoreTitle className={transaction ? "transactionhide" : null}>
            <StoreTitleEffect className="EffectOne">
              Atualize-se
            </StoreTitleEffect>
            <StoreTitleEffect className="EffectTwo">
              Atualize-se
            </StoreTitleEffect>
          </StoreTitle>
          <StoreText className={transaction ? "transactionhide" : null}>
            <br />
            Escolha os cursos em que você deseja se aperfeiçoar e vamos a luta.
          </StoreText>

          <StoreItems className={transaction ? "transactionhide" : null}>
            <StoreCheckBox className={got_css ? "hideitemshop" : null}>
              <input type="checkbox" onChange={storeCSS} />
              <div>
                CSS
                <br />
                R$ 500,00
              </div>
            </StoreCheckBox>

            <StoreCheckBox className={got_js ? "hideitemshop" : null}>
              <input type="checkbox" onChange={storeJS} />
              <div>
                JS
                <br />
                R$ 750,00
              </div>
            </StoreCheckBox>

            <StoreCheckBox className={got_reactjs ? "hideitemshop" : null}>
              <input type="checkbox" onChange={storeReactJS} />
              <div>
                ReactJS
                <br />
                R$ 930,00
              </div>
            </StoreCheckBox>

            <StoreCheckBox className={got_sql ? "hideitemshop" : null}>
              <input type="checkbox" onChange={storeSQL} />
              <div>
                SQL
                <br />
                R$ 1280
              </div>
            </StoreCheckBox>
          </StoreItems>

          <StoreText className={transaction ? "transactionhide" : "descont"}>
            15% de desconto só hoje
          </StoreText>
          <StoreText className={transaction ? null : "transactionhide"}>
            Transação completa! Você comprou os cursos: <br />
            {store_css_active ? "CSS   " : null}
            {store_js_active ? "JS   " : null}
            {store_react_active ? "ReactJS   " : null}
            {store_sql_active ? "SQL   " : null}
          </StoreText>

          <a
            href="#"
            onClick={insert}
            className={
              transaction
                ? "transactionhide"
                : store_css_active
                ? "buy"
                : store_js_active
                ? "buy"
                : store_react_active
                ? "buy"
                : store_sql_active
                ? "buy"
                : "transactionforbidden"
            }
          >
            Comprar Cursos
          </a>
          <a
            href="#"
            onClick={login}
            className={transaction ? "buy" : "transactionhide"}
          >
            Fazer outra compra
          </a>
          <ValorTotal>
            Valor Total: R${" "}
            {store_css_price +
              store_js_price +
              store_reactjs_price +
              store_sql_price}
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
  background-position: 0% 0%;
  width: 100%;
  display: flex;
  padding: 20px 0 20px 0;
  background-size: 100% 200%;
  background-color: #1e90ff; /* Para navegadores que não suportam gradientes */
  background-image: linear-gradient(rgb(255, 115, 0), #ffd8b3, #1e90ff);

  &.backgroundorange {
    animation-name: ${OrangeBackground};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  &.backgroundblue {
    animation-name: ${BlueBackground};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  /*########## Mobile ##########*/
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const FormsContainer = styled.div`
  display: flex;
  width: 250px;
  margin: auto;
  padding: 0px;

  &.showstore {
    display: none;
  }
`;

const Title = styled.div`
font-size:32px;
color:white;
text-shadow: 2px 2px 4px #000000;
font-family:Lobster;
margin:auto;
padding:0;

&.showstore{display:none}

.hidestore{display:block;
text-align:center;
margin-top:25px;}

/*########## Mobile ##########*/    
@media screen and (max-width: 900px) {
display:block;
text-align:center;
margin-top:25px;
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
  margin: auto;

  &.showform {
    width: 100%;
    height: 100%;
  }

  &.hideform {
    width: 0%;
    height: 0%;
    visibility: hidden;
  }

  &.hideformanimation {
    position: relative;
    width: 100%;
    height: 100%;
    animation-name: ${FormMoveOut};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  &.showformanimation {
    position: relative;
    left: -1000px;
    width: 0%;
    height: 0%;
    visibility: hidden;
    animation-name: ${FormMoveIn};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
`;

const ContainerFormTitle = styled.h2`
  color: white;
  text-shadow: 0px 2px 3px #555;
  font-size: 14px;
  margin-bottom: 5px;
  padding: 0;

  &.showregex {
    margin-top: 50px;
  }
`;

const ContainerInput = styled.div`
  height: 25px;
  overflow: hidden;

  &.showregex {
    overflow: visible;
  }

  .inputbox {
    width: 97%;
    border-radius: 6px;
    border: 1px solid black;
  }
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
  opacity: 0;

  &.showregex {
    animation-name: ${UserFormTranslate};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

const RegexItem = styled.li`
  &.itemlist {
    text-decoration: none;
    color: red;
  }

  &.itemlistchecked {
    text-decoration: line-through;
    color: green;
  }
`;

const SubmitButton = styled.div`
  input {
    align-items: center;
    appearance: none;
    background-image: radial-gradient(
      100% 100% at 100% 0,
      #5adaff 0,
      #5468ff 100%
    );
    border: 0;
    border-radius: 6px;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: "JetBrains Mono", monospace;
    height: 24px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    top: 5px;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 12px;
    display: block;
    margin: auto;
  }

  &:hover {
    transform: translateY(-2px);
  }

  .hidebutton {
    display: none;
  }
`;

const IframeVideo = styled.div`
  display: block;
  width: 350px;
  margin: auto;
  padding: 0px;

  &.showstore {
    display: none;
  }

  &.hidestore {
    display: block;
  }

  /*########## Mobile ##########*/
  @media screen and (max-width: 900px) {
    margin-top: 25px;
  }

  @media screen and (max-width: 350px) {
    width: 280px;

    iframe {
      width: 280px;
    }
  }
`;

const Store = styled.div`
  max-width: 300px;
  margin: auto;
  display: none;

  &.showstore {
    display: initial;
  }

  &.hidestore {
    display: none;
  }

  a {
    display: block;
    margin: 30px auto;
    width: 200px;
    padding: 10px 20px;
    border: 2px solid #50bcf2;
    border-radius: 50px;
    color: #f5f5f5;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    transition: 0.3s ease;
  }

  .buy:hover {
    background-color: #50bcf2;
  }

  .transactionhide {
    display: none;
  }

  .transactionforbidden {
    pointer-events: none;
  }
`;

const StoreTitle = styled.div`
  display: grid;
  grid-template-areas: "overlap";

  &.transactionhide {
    display: none;
  }
`;

const StoreTitleEffect = styled.div`
  color: #363832;
  font-family: "poppins", sans-serif;
  font-size: 40px;
  font-weight: bold;
  background-clip: text;
  -webkit-background-clip: text;
  grid-area: overlap;
  letter-spacing: 1px;
  -webkit-text-stroke: 3px transparent;
  text-align: center;

  &.EffectOne {
    background-image: repeating-linear-gradient(
      105deg,
      #ffb338 0%,
      #3e2904 5%,
      #ffb338 12%
    );
    color: transparent;
    filter: drop-shadow(5px 15px 15px black);
    transform: scaleY(1.07);
    transform-origin: top;
  }

  &.EffectTwo {
    background-image: repeating-linear-gradient(
      5deg,
      #ffb338 0%,
      #77571d 23%,
      #ffb338 81%
    );
    color: #1e2127;
    filter: drop-shadow(5px 15px 15px black);
    transform: scaleY(1.05);
    transform-origin: top;
    transform: scale(1);
  }
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
  position: relative;
  width: 140px;
  height: 100px;
  margin: 5px;
  float: left;
  border: 2px solid #50bcf2;
  box-sizing: border-box;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;
    transition: 0.5s ease;
    text-align: center;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
  }

  input[type="checkbox"]:checked ~ div {
    background: #50bcf2;
  }

  &.hideitemshop {
    background: #50bcf2;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StoreItems = styled.div`
  &.transactionhide {
    display: none;
  }
`;

const ValorTotal = styled.h3`
  color: black;
  text-align: center;
`;

export default Forms;
