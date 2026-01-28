import "dotenv/config"; 
import app from "./src/app.js";
import connectDB from "./src/config/dbConnect.js";

const PORT = process.env.PORT || 3000;

async function inicializarServidor() {
  console.log("Iniciando tentativa de conexão...");

  try {
    const conexao = await connectDB();
    
    conexao.on("error", (erro) => {
      console.error("Erro de conexão após inicialização:", erro);
    });
      
    app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    });    

  } catch (erro) {
    console.error("Falha ao iniciar o servidor:");
    console.error(`Mensagem: ${erro.message}`);
    
    if (erro.name === "MongooseServerSelectionError") {
      console.error("Dica: Verifique se o seu IP está liberado no MongoDB Atlas (Network Access).");
    }
    
    process.exit(1);
  }
}

// Executa a função de inicialização
inicializarServidor();