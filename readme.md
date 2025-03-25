# Documentação do Projeto

## Visão Geral
Este projeto foi desenvolvido com o objetivo de criar um sistema de **interação omnichannel** onde os usuários podem interagir com diferentes canais como WhatsApp, E-mail e Chat. O sistema simula a continuidade da interação entre canais e proporciona uma interface de gestão para os administradores.

---

## Tecnologias Usadas

### Backend (API REST)
- **NestJS**: Framework usado para criar a API REST, estruturada de forma modular.
- **TypeORM**: ORM utilizado para comunicação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados utilizado para armazenar informações sobre usuários, interações e mensagens.
- **AWS Lambda (Local)**: Utilizado para rodar funções Lambda localmente via AWS SAM para testes.
- **JWT (JSON Web Tokens)**: Para autenticação segura e gerenciamento de sessões de usuários.
- **CORS**: Configurado para permitir que a API seja acessada pelo endereço de origem do frontend garantindo segurança, alterar o ip no arquivo main.ts no backend na parte do origin.

---

### Frontend
- **ReactJS**: Framework JavaScript utilizado para a criação da interface do usuário.
- **TypeScript**: Utilizado para garantir tipagem estática e maior segurança no código.
- **Bootstrap**: Framework CSS utilizado para a construção do layout responsivo e estilização dos componentes.
- **React-Router**: Para navegação entre diferentes páginas dentro da aplicação.
- **Axios**: Para fazer requisições HTTP ao backend.
- **React Context**: Usado para gerenciar o estado global da aplicação, como o estado do usuário autenticado.

---

## Estrutura do Projeto

### Backend

1. **Módulo de Usuários (Users)**:
   - Endpoints para login e registro de usuários.
   - Integração com JWT para autenticação.

2. **Módulo de Canais (Channels)**:
   - Gerenciamento dos canais de interação (WhatsApp, E-mail, Chat).
   - Armazenamento das mensagens associadas a cada canal.

3. **Módulo de Interações (Interactions)**:
   - Registra as interações realizadas por cada usuário em diferentes canais.
   - A API oferece endpoints para consultar e gerenciar interações.

4. **Configuração de Banco de Dados**:
   - Utilização do **TypeORM** para trabalhar com o banco de dados PostgreSQL.
   - Configuração do schema `bemol` para as tabelas de usuários, canais e interações.

5. **Autenticação**:
   - Implementação de autenticação via JWT, permitindo que os usuários se autentiquem e acessem suas interações.

---

### Frontend

1. **Dashboard**:
   - Página principal da aplicação que exibe as interações recentes de cada canal.
   - Utilização de **Bootstrap** para criar uma interface limpa e responsiva.
   - Cada canal exibe mensagens simuladas e ao clicar em qualquer canal, um **modal** é exibido simulando o chat.

2. **Tabela de Interações**:
   - Exibição de uma tabela com todos os canais e mensagens associadas.
   - Possibilidade de continuar a interação ou iniciar uma nova interação.

3. **Modal de Interação**:
   - Ao clicar em um canal da tabela, o **modal do Bootstrap** exibe o conteúdo da mensagem daquele canal.
   - O modal pode ser fechado ou responder à mensagem.

4. **Navegação**:
   - Utilização do **React-Router** para navegar entre as páginas da aplicação, incluindo a página de login e o dashboard.
   - Redirecionamento automático para o dashboard após login bem-sucedido.

---

## Fluxo de Funcionamento

1. **Login do Usuário**:
   - O usuário faz login através da página de login.
   - As credenciais são enviadas para a API, que retorna um JWT.
   - O JWT é armazenado no frontend para ser enviado nas próximas requisições, autenticando o usuário.

2. **Interação nos Canais**:
   - No dashboard, o usuário pode visualizar as mensagens de cada canal.
   - Ao clicar em qualquer canal, um modal é aberto, simulando uma conversa de chat.
   - O usuário pode visualizar as mensagens, com a possibilidade de continuar a interação.

---

# Como Instalar e Usar o Projeto

Este projeto é composto por duas partes principais: **Frontend** e **Backend**. A seguir, você encontrará as instruções sobre como configurar e executar ambas as partes do sistema.

## Requisitos

- **Node.js** (versão 14 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)
- **PostgreSQL** (ou um banco de dados PostgreSQL acessível)

### Explicação do Fluxo:

1. **Clonando o Repositório**: O comando `git clone` vai baixar todo o repositório, tanto o frontend quanto o backend, em um único passo.
2. **Instalando Dependências**: O `npm install` instala as dependências necessárias tanto para o backend quanto para o frontend, no diretório correspondente.
3. **Configuração do Banco de Dados**: O PostgreSQL é necessário para o backend. Após criar o banco, você configura as credenciais no projeto.
4. **Rodando o Backend e Frontend**: Os comandos para rodar os servidores backend e frontend estão explicados, e a aplicação é acessada localmente.


### Comandos para startar os projetos.

1. Front - npm start
2. back - npm run start:dev