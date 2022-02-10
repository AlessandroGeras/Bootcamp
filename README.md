<h1> Bootcamp</h1>
<h3> Projeto final realizado para o bootcamp do banco Inter
  <br />
Início - 02/02/2022 - Conclusão - 09/02/2022 </h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary name="indice">Índice</summary>
  <ol>   
    <li><a href="#projeto">Sobre o projeto</a></li>
    <li><a href="#estrutura">Estrutura do site</a></li>
    <li><a href="#dia1">Dia 1</a></li>
    <li><a href="#dia2">Dia 2</a></li>
    <li><a href="#dia3">Dia 3</a></li>
    <li><a href="#dia4">Dia 4</a></li>
    <li><a href="#dia5">Dia 5</a></li>
    <li><a href="#conclusão">Conclusão</a></li>
  </ol>
</details>
<h2 name="projeto"> Sobre o projeto  </h2>
Fiz este projeto em 7 dias, sem saber nada de React. Peguei o projeto final do bootcamp que foi dado como referência e não entendi muita coisa do que foi feito 😠 Como adoro resolver problemas resolvi me desafiar fazendo um site completo como eu achava que deveria ser em 7 dias, como meta pessoal. Embora nunca tenha feito um site complexo antes porque a maioria dos recursos que eu adotaria, usavam javascript e até o momento eu só tinha feito apenas um único site em javascript. Então foi um senhor desafio, foi muito tapa na cara até aprender as coisas mas consegui. Fiz muitas coisas além do proposto.<br /> Fiz um sistema <strong>RESTFUL</strong> com login usando <strong>regex</strong>, fiz um <strong>CRUD</strong>, mas sem o delete porque achei que não ia ficar bem na minha proposta de site, fiz autenticação por <strong>token</strong>, fiz senhas com <strong>criptografia</strong>, configurei o banco de dados para usar <strong>hash</strong>, configurei o <strong>CORS</strong> para aceitar a comunicação por token pois estava bloqueando as conexões de mesmo domínio, criei um sistema de <strong>cache</strong> para guardar as requisições de leitura para não sobrecarregar o servidor, implantado o <strong>Sequelize</strong> para fazer as queries de um jeito diferente do que foi feito no projeto oficial, criei animações bem legais em CSS para deixar o site bem atraente. Depois disso tudo olhei o projeto final do bootcamp e parecia fácil demais. Valeu o esforço 👊
<br /><br />

Comentários sobre o meu próprio projeto: O site estava seguindo o padrão normal, usando pequenos componentes. Devido ao grande número de efeitos visuais e validações, houve um grande número de props criadas e comecei a ver que o site começou a travar e dar umas congeladas rápidas. Então resolvi criar os componentes por setor, como seria a ideia original do HTML semântico. E resolveu o problema, embora tenha gerado componentes absurdos de grande e causado um código não clean. Criei até um jargão pra isso e quem estiver lendo pode procurar, não existe. Criei a expressão <strong>PROPCORN</strong>, porque foi quase 60 props indo e vindo de pai pra filho e filho pra pai e pareciam que pulavam que nem pipoca 😆 Com a manutenção em grande componentes o número total de props caiu pra uns 6 e tudo voltou ao normal.
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>
 
<h2 name="estrutura"> Estrutura do site  </h2>
Navbar com 3 botões funcionais, login, cadastrar e logoff. <br />
Forms com 1 formulário com regex, 1 formulário normal e a store que teve que ser integrada aqui para reduzir as chamadas de props.<br />
Bootcamps com imagens e textos. <br />
Advertising com imagem e texto. <br />
Footer com links não funcionais. <br />
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="dia1"> Dia 1</h2>
Criado toda a estrutura do site, responsividade, CSS e animações. Pouco para o primeiro dia? Diz isso pras 600 linhas de CSS que foram criadas. Isso só de CSS puro. Sim, eu amo CSS 😍
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="dia2"> Dia 2</h2>
Dia de aprender regex!!! Eu não sabia o que era regex, pra mim era autenticação de caracteres em formulários. Foram 5 minutos só para descobrir que aquilo se chamava regex 😆
Meio confuso, levei metade do dia pra entender, e a outra metade do dia da implantar e fazer os efeitos visuais no formulário.
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="dia3">Dia 3</h2>
Express instalado e configurado com as rotas, e só. Resto do dia estudando como o banco de dados do projeto final, Sqlite, funcionava e como fazer as queries. Achei difícil e tentei usar o PostgreSQL. Achei que eu estava fugindo do meu desafio e prometi que iria ter sucesso no outro dia com o Sqlite. ☹️
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

h2 name="di4">Dia 4</h2>
Implantado o Sequelize para integrar o Sqlite. Deu vários problemas nas queries de update que me levaram a querer voltar pra ideia do PostgreSQL. Mais uma vez me xinguei por querer fugir do desafio e fui novamente a luta. Problema que o Sequelize não dava retorno nas promises que tinham múltiplas queries do Sqlite, só no PostgreSQL segundo a documentação oficial. Recomendado fazer uma sequência de promises par resolver o problema. Pesquisei mais um pouco porque não estava afim de fazer as queries, uma a uma, quando alguém disse ter achado um exploit de enviar as queries em Json, em vez de criar as queries em Json diretamente no Sequelize. Não tinha sentido trocar 6 por meia dúvia mas funcionou. Ufa! 🤡
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

h2 name="dia5">Dia 5</h2>
Implantado o Sequelize para integrar o Sqlite. Deu vários problemas nas queries de update que me levaram a querer voltar pra ideia do PostgreSQL. Mais uma vez me xinguei por querer fugir do desafio e fui novamente a luta. Problema que o Sequelize não dava retorno nas promises que tinham múltiplas queries do Sqlite, só no PostgreSQL segundo a documentação oficial. Recomendado fazer uma sequência de promises par resolver o problema. Pesquisei mais um pouco porque não estava afim de fazer as queries, uma a uma, quando alguém disse ter achado um exploit de enviar as queries em Json, em vez de criar as queries em Json diretamente no Sequelize. Não tinha sentido trocar 6 por meia dúvia mas funcionou. Ufa! 🤡
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>







<h2 name="conclusão">Conclusão</h2>
Foi bem divertido fazer o projeto, queria ter feito mais coisas mas a essência já está montada. Fazer mais, seria fazer mais do mesmo. Agora, rumo à outros projetos 💪  

<h3>Tecnologias usadas:</h3>
#html
<br />
#css
<br />
#js
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>






















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

