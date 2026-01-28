import express from 'express';
import routes from './routes/index.js'; 

/* Cria uma instância da aplicação Express
   app será o objeto principal para configurar rotas, middlewares e o servidor
*/
const app = express();
/*
Registra um middleware -> Middleware é uma função intermediária que fica entre a requisição do cliente e a resposta do servidor.
Em outras palavras, é um código que intercepta a requisição, pode processá-la, modificá-la ou decidir se ela continua para o próximo passo.
Faz o Express interpretar requisições com corpo em JSON, permite acessar os dados enviados no body via req.body
*/
app.use(express.json());

routes(app);

export default app;