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
    <li><a href="#main">Dia 1</a></li>
    <li><a href="#carrousel">Carrousel</a></li>
    <li><a href="#mobile">Mobile</a></li>
    <li><a href="#conclusão">Conclusão</a></li>
  </ol>
</details>
<h2 name="projeto"> Sobre o projeto  </h2>
Fiz este projeto em 7 dias, sem saber nada de React. Peguei o projeto final do bootcamp que foi dado como referência e não entendi muita coisa do que foi feito 😠 Como adoro resolver problemas resolvi me desafiar fazendo um site completo como eu achava que deveria ser em 7 dias, como meta pessoal. Embora nunca tenha feito um site complexo antes porque a maioria dos recursos que eu adotaria, usavam javascript e até o momento eu só tinha feito apenas um único site em javascript. Então foi um senhor desafio, foi muito tapa na cara até aprender as coisas mas consegui. Fiz muitas coisas além do proposto.<br /> Fiz um sistema <strong>RESTFUL</strong> com login usando <strong>regex</strong>, fiz um <strong>CRUD</strong>, mas sem o delete porque achei que não ia ficar bem na minha proposta de site, fiz autenticação por <strong>token</strong>, fiz senhas com <strong>criptografia</strong>, configurei o banco de dados para usar <strong>hash</strong>, configurei o <strong>CORS</strong> para aceitar a comunicação por token pois estava bloqueando as conexões de mesmo domínio, criei um sistema de <strong>cache</strong> para guardar as requisições de leitura para não sobrecarregar o servidor e criei animações bem legais em CSS para deixar o site bem atraente. Depois disso tudo olhei o projeto final do bootcamp e parecia fácil demais. Valeu o esforço 👊
<br /><br />

Comentários sobre o meu próprio projeto: O site estava seguindo o padrão normal, usando pequenos componentes. Devido ao grande número de efeitos visuais e validações, houve um grande número de props criadas e comecei a ver que o site começou a travar e dar umas congeladas rápidas. Então resolvi criar os componentes por setor, como seria a ideia original do HTML semântico. E resolveu o problema, embora tenha gerado componentes absurdos de grande e causado um código não clean. Criei até um jargão pra isso e quem estiver lendo pode procurar, não existe. Criei a expressão <strong>PROPCORN</strong>, porque foi quase 60 props indo e vindo de pai pra filho e filho pra pai e pareciam que pulavam que nem pipoca 😆 Com a manutenção em grande componentes o número total de props caiu pra uns 6 e tudo voltou ao normal.
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>
 
<h2 name="estrutura"> Estrutura do site  </h2>
Navbar com 3 botões funcionais, Login, Cadastrar e Logoff. <br />
Forms com 1 formulário com regex, 1 formulário normal e a store que teve que ser integrada aqui para reduzir as chamadas de props.<br />
Bootcamps com imagens e textos. <br />
Advertising com imagem e texto. <br />
Footer com links não funcionais. <br />
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="main"> Main (Backdrop) </h2>
Fiz integração com o site The Movie Database https://www.themoviedb.org/ pois eles tem api pública e uma boa documentação. Tive que estudar muito para entender o que são promises no javascript pra usar o fetch mas quando foi, era só alegria. Puxei uma lista de 20 filmes da top rated deles e integrei o filme dois deles no meu Main. O primeiro era um filme de baixo orçamento com uma arte pobre e optei por fazer a do segundo que tinha uma arte descente. O que senti falta é que o The Movie Database não tinha no seu acervo o logo dos filmes para botarmos nos posters, eles só retornavam o nome do título e a imagem (outras coisas também, mas não o logo). Então resolvi criar um efeito em CSS para receber o nome do título. Ficou showwww.  
Outra coisa que faltou era um breve resumo do filme, como a Netflix tem, para ser usada no botão "Mais Informações". O The Movie Database só tinha a descrição do filme que era gigante e como fiz uma integração para receber essas informações, dependendo do filme a descrição variava muito de tamanho e o campo destinado a esta parte ficava muito irregular. Criei então uma função para detectar o primeiro parágrafo e jogar só ele no meu frontend. Foi sucesso total, pois o tamanho era próximo a de outros filmes testados. Essa foi a parte que mais brilhou no meu frontend 👏  
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="carrousel"> Carrousel </h2>
Eu estava criando o meu próprio Carrousel, ia ser um desafio pessoal pois eu amo desafios, mas um colega me disse uma vez, pra que reinventar a roda? Tanta gente usa Bootstrap e templates, faz o mesmo :thinking:  
Com tristeza no coração peguei um template na internet. Só não fiquei totalmente triste porque tive que adaptar quase todo ele pros meus fins e quase senti que eu estava criando, eu mesmo, o Carrousel. Ele tinha sido feito em SCSS e eu não manjo nada de SCSS, mas vi que a semântica não é drasticamente tão diferente do CSS, então resolvi transformar tudo pra CSS só pelo desafio mesmo de manter o padrão do meu trabalho que era tudo CSS e estudar o SCSS. E por fim como esperado, fiz a integração no Carrousel.
<p align="right">(<a href="#indice">voltar ao indice</a>)</p>

<h2 name="mobile">Mobile </h2>
#Testado em todas as configurações padrões mobile do DevTools.  
<br />
#Personalizado alguns layouts exclusivos para certas configurações.
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

