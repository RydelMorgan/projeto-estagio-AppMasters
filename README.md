<h3 align="center"><img src="public/favicon.png" width=200 height=200></h3>

<h1 align="center">Projeto Estágio App Masters</h1>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#requisitos">Requisitos</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#funcionamento">Funcionamento</a>
</p>

## Sobre

Este é um projeto para participar do projeto de seleção da empresa App Masters.

A ideia é implementar o frontend para apresentar uma lista de jogos, que será fornecida por uma API. 

Porém, essa API é estranha… não tem documentação, dá uns erros, ora responde, ora falha, pede um `header`.

Lidar com os erros é especialmente importante neste projeto.

## Requisitos

> **Note**
> A url base da API é [https://games-test-api-81e9fb0d564a.herokuapp.com/api/](https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/)

- [x] O projeto deve ser feito usando React ou Next.JS
- [x] Obter a lista de jogos em `/data`
- [x] Apresentar um loader enquanto os dados são obtidos
- [x] Apresentar os jogos em três colunas (no computador)
- [x] Em cada card apresentar o título e imagem pelo ao menos
- [x] Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular
- [x] Quando a API retornar o `status code` 500, 502, 503, 504, 507, 508 ou 509 apresentar ao usuário `O servidor fahou em responder, tente recarregar a página`
- [x] Caso a API retorne outros erros, apresentar `O servidor não conseguirá responder por agora, tente voltar novamente mais tarde`
- [x] Ao realizar uma chamada, não esperar mais que 5 segundos pelo retorno. Se os dados demorarem mais de 5 segundos para retornar apresentar `O servidor demorou para responder, tente mais tarde`
- [x] Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader
- [x] Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive
- [x] Uma vez que tenha os dados em mãos, veja quais `genre` foram retornados e permita ao usuário selecionar um deles, e então filtre para exibir apenas jogos do gênero selecionado

### Algumas dicas e informações extras

- É bom saber usar o **DevTools**, a API pode pedir algo que não foi falado acima
- É bom saber o que é `header`, e como se envia um dado via `header`
- Use TypeScript se já tiver prática com ele, senão, faça com JavaScript mesmo
- Adicione um ou dois prints do seu projeto no readme do seu repositório
- Se quiser ganhar pontos extras, publique o projeto online para facilitar nossa verificação
- Se quiser usar biblioteca visual, use, só não pegue um projeto pronto e modifique
- A beleza importa
- O tal `dev-email-address` pode ser qualquer email válido, não precisa ser exatamente o seu (se não quiser ele público no seu repositório)


## Instalação

Este é um projeto [Next.js](https://nextjs.org/) feito com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Primeiro, instale as dependências:

```bash
npm install
```

Depois, rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.


## Funcionamento

![Alt text](intera%C3%A7%C3%A3o.gif)