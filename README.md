
# Garcia Exercises

Uma breve descrição sobre o que esse projeto faz e para quem ele é

Sure! Here's the image resized to a smaller version:

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Icon" width="200">
<img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="200">

### Bibliotecas Utilizadas:


 **@emotion/styled**
   ![npm](https://img.shields.io/npm/v/@emotion/styled?label=%40emotion%2Fstyled)

**@mui/icons-material**
   ![npm](https://img.shields.io/npm/v/@mui/icons-material?label=%40mui%2Ficons-material)

 **@mui/material**
   ![npm](https://img.shields.io/npm/v/@mui/material?label=%40mui%2Fmaterial)

 **@mui/styled-engine-sc**
   ![npm](https://img.shields.io/npm/v/@mui/styled-engine-sc?label=%40mui%2Fstyled-engine-sc)

 **axios**
   ![npm](https://img.shields.io/npm/v/axios)

 **prop-types**
   ![npm](https://img.shields.io/npm/v/prop-types)

 **react-dom**
   ![npm](https://img.shields.io/npm/v/react-dom)

 **react-hook-form**
    ![npm](https://img.shields.io/npm/v/react-hook-form)

 **react-leaflet**
    ![npm](https://img.shields.io/npm/v/react-leaflet)

 **react-leaflet-cluster**
    ![npm](https://img.shields.io/npm/v/react-leaflet-cluster)

 **react-router-dom**
    ![npm](https://img.shields.io/npm/v/react-router-dom)

 **react-toastify**
    ![npm](https://img.shields.io/npm/v/react-toastify)

 **styled-components**
    ![npm](https://img.shields.io/npm/v/styled-components)

 **json-server**
   ![npm](https://img.shields.io/npm/v/json-server)


## Documentação de Apis usada


[JSON Server](https://github.com/typicode/json-server)

[ApiViaCep](https://viacep.com.br/)

[ApiNominatim](https://nominatim.org/release-docs/latest/)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/glautonOsorio/Garcia-Exercises.git

```
Entre no diretório do projeto

```bash
  cd  Garcia-Exercises
```

Instale as dependências

```bash
  npm install ou npm i
```

Inicie a aplicação

```bash
  npm run start
```

Inicie o json-server

```bash
  npm run json
```

## Funcionalidades

## 1. Fluxo de Provedores de Contexto

O aplicativo utiliza a API de Contexto do React para gerenciar o estado global da aplicação. Os principais provedores de contexto são:

- **ThemeProvider:** Fornece o tema global para a aplicação.
- **AuthContextProvider:** Gerencia a autenticação do usuário.
- **LocationContextProvider:** Gerencia o estado das localizações na aplicação.
- **LoginContextProvider:** Gerencia o estado do login do usuário.
- **ToastContainer:** Componente para exibir mensagens de toast na aplicação.

## 2. Roteamento de Aplicativos

O roteamento é gerenciado pela biblioteca `createBrowserRouter`, que oferece uma maneira fácil de definir rotas e renderizar componentes correspondentes. As rotas principais são:

- **/login:** Rota para a página de login.
- **/:** Rota padrão para a página inicial.
- **/location-list:** Rota para exibir a lista de localizações.
- **/location-list/:id:** Rota para exibir detalhes de uma localização específica (necessita autenticação).
- **/register-locations:** Rota para registrar novas localizações (necessita autenticação).
- **/register-locations/:id:** Rota para editar uma localização existente (necessita autenticação).
- **/config-user/:id:** Rota para configurar o perfil do usuário (necessita autenticação).

## 3. Funcionalidades Adicionais

- **Autenticação de Usuário:** Os usuários podem fazer login para acessar funcionalidades restritas.
- **Registro e Edição de Localizações:** Os usuários autenticados podem registrar e editar informações de localizações.
- **Configuração de Perfil:** Os usuários autenticados podem configurar seu perfil, como nome, e-mail, senha, etc.
- **Gerenciamento de Estado:** O estado global da aplicação é gerenciado de forma eficiente usando a API de Contexto do React.
- **Roteamento Protegido:** Algumas rotas só estão acessíveis para usuários autenticados.

---
## Organização de pastas

- node_modules/...
- public/...
- src/
    - /assets/...    
    - /components/...   
    - /contexts/...    
    - /helpers/...    
    - /hooks/...    
    - /layout/...
    - /pages/...    
    - /routes/...
    - /server/...
    - /services/...    
    - AllProvider.jsx
    - GlobalStyles.js
    - main.jsx
    - Themes.js
- .eslintrc.cjs
- .gitignore
- index.html
- package-lock.json
- package.json
- README.md
- vite.config.js

## Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc


## Autor e Professor
-**Autor**
[Glauton Osório](https://github.com/glautonOsorio)
-**Gato do Autor**
[Uni](https://github.com/glautonOsorio)

-**Professor**
[Bruno Costa](https://github.com/Bruno-Costa-fig)