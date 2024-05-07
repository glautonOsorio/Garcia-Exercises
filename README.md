# Garcia Exercises

O Garcia Exercises é uma plataforma que visa facilitar o gerenciamento de exercícios e locais para atividades físicas. Com o objetivo de criar uma versão inicial funcional da aplicação, foi desenvolvido o MVP do Front-End utilizando a biblioteca React.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript de código aberto para construir interfaces de usuário, utilizada para desenvolver a aplicação Front-End do Garcia Exercises.

- **JSON Server**: Ferramenta para criar uma API REST fake a partir de um arquivo JSON, utilizada para simular um servidor e fornecer os dados necessários para a aplicação durante o desenvolvimento.

- **ViaCep API**: API pública para consulta de CEP, utilizada para obter informações de endereço a partir do CEP fornecido pelos usuários durante o cadastro de locais de exercícios.

- **Nominatim API**: API de geocodificação gratuita e aberta, utilizada para converter endereços em coordenadas geográficas (latitude e longitude) para exibição no mapa interativo da aplicação.

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

## Funcionalidades

## 0. Funcionalidades Principais

- **Cadastro de Locais de Exercícios**: Os usuários podem cadastrar novos locais de exercícios, fornecendo informações como nome do local, endereço, descrição e tipo de exercício disponível.

- **Visualização de Locais Próximos**: Os usuários podem visualizar os locais de exercícios próximos em um mapa interativo ou em uma lista, facilitando a busca por opções de atividades físicas na região.

- **Detalhes do Local de Exercício**: Ao selecionar um local na lista ou no mapa, os usuários podem visualizar informações detalhadas sobre os exercícios disponíveis, como horários de funcionamento, avaliações de outros usuários e fotos do local.

- **Registro de Atividades**: Os usuários podem registrar suas próprias contribuições para o sistema, como adicionar novos locais de exercícios, avaliar locais existentes e adicionar comentários e fotos.

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

## Melhorias

- **Melhoria da Responsividade:** Reforçar a adaptação da aplicação a diferentes tamanhos de tela, aprimorando as media queries e garantindo uma experiência consistente em dispositivos móveis e desktops.

- **Aprimoramento do Design da Página Principal:** Investir em um design mais atraente e intuitivo para a página inicial, utilizando técnicas de design visual, como paletas de cores harmoniosas, tipografia adequada e layout bem estruturado.

- **Componentização Avançada:** Componentizar ainda mais partes do código para promover a reutilização e a manutenção, reduzindo a duplicação de código e facilitando a escalabilidade do projeto.

- **Integração com API e Banco de Dados:** Substituir o uso do JSON Server por uma API e banco de dados reais, proporcionando uma experiência mais próxima do ambiente de produção e permitindo a persistência de dados de forma mais robusta e escalável.

## Documentação de Apis usada

[JSON Server](https://github.com/typicode/json-server)

[ApiViaCep](https://viacep.com.br/)

[ApiNominatim](https://nominatim.org/release-docs/latest/)

## Video do autor

[Video](https://drive.google.com/file/d/1GIoGHLZaAimbByiUAcnmQrFETmN-FZ08/view?usp=sharing)

## Autor e Professor

-**Autor**
[Glauton Osório](https://github.com/glautonOsorio) -**Gato do Autor**
[Uni](https://github.com/glautonOsorio)

-**Professor**
[Bruno Costa](https://github.com/Bruno-Costa-fig)
