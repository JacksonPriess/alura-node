# 🚀 Node.js Express API com MongoDB

API construída com Node.js e Express, utilizando Mongoose para integração com MongoDB. Este projeto segue as melhores práticas de segurança e separação de responsabilidades.

## Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução JavaScript |
| **Express** | Framework web para Node.js |
| **MongoDB** | Banco de dados NoSQL |
| **Mongoose** | ODM (Object Data Modeling) para MongoDB |
| **Dotenv** | Gerenciamento de variáveis de ambiente |
| **Nodemon** | Reinicia o servidor automaticamente durante o desenvolvimento |

---

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 20.15 ou superior recomendada)
* [Git](https://git-scm.com/)
* Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou MongoDB instalado localmente.

---

## Instalação e Configuração

1. **Clone o repositório:**
2. Instale as dependências:
3. Configure as Variáveis de Ambiente: O projeto utiliza o arquivo .env para armazenar credenciais sensíveis.
    * Copie o arquivo de exemplo:
        cp .env.example .env
    * Abra o arquivo .env e preencha com suas informações:
        MONGODB_URI=sua_string_de_conexao_aqui
        PORT=3000

## Executando a Aplicação

* Para iniciar o servidor, utilize o comando:
    npm run dev
  O servidor iniciará por padrão na porta 3000. Você verá uma mensagem de confirmação no console se a conexão com o banco de dados for bem-sucedida.
