# Controle de Acesso - Challenge FIAP

Este projeto é uma aplicação web de controle de acesso desenvolvida como parte do challenge de Front-End. A aplicação permite que usuários se cadastrem, façam login e acessem uma área restrita (painel/dashboard).

## ✨ Funcionalidades

-   **Cadastro de Usuário**: Novos usuários podem se cadastrar com nome, nome de usuário e e-mail.
-   **Validação de Duplicidade**: O sistema verifica em tempo real se o nome de usuário ou e-mail já existem no banco de dados.
-   **Login de Usuário**: Autenticação de usuários com base nas credenciais (nome de usuário e e-mail).
-   **Gerenciamento de Sessão**: A sessão do usuário é simulada e persistida usando o `localStorage` do navegador.
-   **Rotas Protegidas**: Apenas usuários autenticados podem acessar a página do painel (`/painel`).
-   **Layout Responsivo**: Construído com Tailwind CSS para uma experiência agradável em diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

-   **Vite**: Build tool para um desenvolvimento front-end moderno e rápido.
-   **React**: Biblioteca para construção de interfaces de usuário.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
-   **React Router Dom**: Para gerenciamento de rotas e navegação (SPA).
-   **React Hook Form**: Para gerenciamento de formulários e validação.
-   **Tailwind CSS**: Framework de estilização utility-first.
-   **JSON Server**: Para simular uma API RESTful completa para desenvolvimento.
-   **ESLint**: Para linting e padronização do código.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
-   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/controle-de-acesso-cp.git](https://github.com/seu-usuario/controle-de-acesso-cp.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd controle-de-acesso-cp
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Executando a Aplicação

Para executar o projeto, você precisará de **dois terminais abertos** na pasta do projeto.

1.  **Terminal 1: Iniciar a API (JSON Server)**
    ```bash
    npm run server
    ```
    *A API estará disponível em `http://localhost:3001`.*

2.  **Terminal 2: Iniciar a Aplicação React**
    ```bash
    npm run dev
    ```
    *A aplicação estará acessível em `http://localhost:5173` (ou em outra porta, se a 5173 estiver em uso).*

Agora, basta abrir o navegador no endereço `http://localhost:5173` para usar a aplicação.

## 📂 Estrutura do Projeto

A estrutura de pastas principal está localizada em `src/`:

-   **`src/componentes`**: Contém componentes reutilizáveis (`Cabecalho`, `RotaProtegida`).
-   **`src/contextos`**: Contém o `ContextoAutenticacao` para gerenciamento do estado global de autenticação.
-   **`src/rotas`**: Contém os componentes que funcionam como páginas (`Login`, `Cadastro`, `Painel`).

link do repositorio: # Controle de Acesso - Challenge FIAP

Este projeto é uma aplicação web de controle de acesso desenvolvida como parte do challenge de Front-End. A aplicação permite que usuários se cadastrem, façam login e acessem uma área restrita (painel/dashboard).

## ✨ Funcionalidades

-   **Cadastro de Usuário**: Novos usuários podem se cadastrar com nome, nome de usuário e e-mail.
-   **Validação de Duplicidade**: O sistema verifica em tempo real se o nome de usuário ou e-mail já existem no banco de dados.
-   **Login de Usuário**: Autenticação de usuários com base nas credenciais (nome de usuário e e-mail).
-   **Gerenciamento de Sessão**: A sessão do usuário é simulada e persistida usando o `localStorage` do navegador.
-   **Rotas Protegidas**: Apenas usuários autenticados podem acessar a página do painel (`/painel`).
-   **Layout Responsivo**: Construído com Tailwind CSS para uma experiência agradável em diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

-   **Vite**: Build tool para um desenvolvimento front-end moderno e rápido.
-   **React**: Biblioteca para construção de interfaces de usuário.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
-   **React Router Dom**: Para gerenciamento de rotas e navegação (SPA).
-   **React Hook Form**: Para gerenciamento de formulários e validação.
-   **Tailwind CSS**: Framework de estilização utility-first.
-   **JSON Server**: Para simular uma API RESTful completa para desenvolvimento.
-   **ESLint**: Para linting e padronização do código.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
-   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/controle-de-acesso-cp.git](https://github.com/seu-usuario/controle-de-acesso-cp.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd controle-de-acesso-cp
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Executando a Aplicação

Para executar o projeto, você precisará de **dois terminais abertos** na pasta do projeto.

1.  **Terminal 1: Iniciar a API (JSON Server)**
    ```bash
    npm run server
    ```
    *A API estará disponível em `http://localhost:3001`.*

2.  **Terminal 2: Iniciar a Aplicação React**
    ```bash
    npm run dev
    ```
    *A aplicação estará acessível em `http://localhost:5173` (ou em outra porta, se a 5173 estiver em uso).*

Agora, basta abrir o navegador no endereço `http://localhost:5173` para usar a aplicação.

## 📂 Estrutura do Projeto

A estrutura de pastas principal está localizada em `src/`:

-   **`src/componentes`**: Contém componentes reutilizáveis (`Cabecalho`, `RotaProtegida`).
-   **`src/contextos`**: Contém o `ContextoAutenticacao` para gerenciamento do estado global de autenticação.
-   **`src/rotas`**: Contém os componentes que funcionam como páginas (`Login`, `Cadastro`, `Painel`).

--- link do repositorio: https://github.com/Challenge-Hospital-das-Clinicas/front-cp.git