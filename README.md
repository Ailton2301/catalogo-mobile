📱 Catálogo Interativo Mobile

Aplicativo mobile desenvolvido com React Native e Expo para apresentação de produtos de uma loja online.
O aplicativo permite que usuários visualizem produtos organizados por categorias, consultem detalhes dos itens e naveguem entre diferentes telas de forma intuitiva.

Este projeto foi desenvolvido como atividade da disciplina Mobile Development do curso de Análise e Desenvolvimento de Sistemas – UNIFECAF.

🎯 Objetivo do Projeto

O objetivo do projeto é demonstrar o desenvolvimento de um aplicativo mobile capaz de:

consumir dados de uma API REST

organizar produtos por categorias

navegar entre telas de forma intuitiva

apresentar detalhes de produtos

simular login e logout de usuário

🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

React Native

Expo

Axios

Redux Toolkit

React Navigation

JavaScript

📂 Estrutura do Projeto

A aplicação foi organizada seguindo boas práticas de desenvolvimento:

catalogo-mobile
│
├── src
│   ├── components
│   │   ├── ProductCard.js
│   │   ├── Loading.js
│   │   └── ErrorMessage.js
│   │
│   ├── screens
│   │   ├── LoginScreen.js
│   │   ├── MaleProductsScreen.js
│   │   ├── FemaleProductsScreen.js
│   │   └── ProductDetailsScreen.js
│   │
│   ├── navigation
│   │   ├── AppRoutes.js
│   │   ├── AuthRoutes.js
│   │   └── MainTabs.js
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── store
│   │   ├── authSlice.js
│   │   └── index.js
│   │
│   └── utils
│       ├── categories.js
│       └── validators.js
│
├── App.js
├── app.json
└── package.json
📦 API Utilizada

O aplicativo consome dados da API pública:

https://dummyjson.com

Endpoints utilizados:

Listagem por categoria
https://dummyjson.com/products/category/{categoria}
Detalhes do produto
https://dummyjson.com/products/{id}
📱 Funcionalidades do Aplicativo

O aplicativo possui as seguintes funcionalidades:

🔐 Tela de Login

validação de campos

armazenamento temporário do usuário

controle de autenticação

🛍️ Listagem de Produtos

organização por categorias

abas Masculino e Feminino

exibição de produtos com imagem, preço e desconto

🔎 Tela de Detalhes

nome do produto

descrição

imagem

preço

desconto

🚪 Logout

limpeza do estado do usuário

retorno para tela de login

⚙️ Como Executar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/SEU_USUARIO/catalogo-mobile.git
2️⃣ Entrar na pasta do projeto
cd catalogo-mobile
3️⃣ Instalar dependências
npm install
4️⃣ Iniciar o projeto
npx expo start
5️⃣ Executar no celular

Instale o Expo Go

Escaneie o QR Code

📚 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos importantes como:

Consumo de APIs REST

Navegação entre telas

Organização de componentes

Gerenciamento de estado com Redux Toolkit

Estruturação de aplicações React Native

👨‍💻 Autor

Ailton Silva

Estudante de Análise e Desenvolvimento de Sistemas – UNIFECAF

📄 Licença

Este projeto foi desenvolvido para fins educacionais.

