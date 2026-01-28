import mongoose from "mongoose";

async function connectDB() {
    console.log("Tentando ler a string de conexão..."); 

    if (!process.env.MONGODB_URI) {
        throw new Error("A variável de ambiente MONGODB_URI não foi definida.");
    }

    try {
        console.log("Iniciando conexão com o Mongoose..."); 
        await mongoose.connect(process.env.MONGODB_URI); 
        console.log("Mongoose conectou com sucesso!");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar com MongoDB: ", error);
        throw error;
    }
}

export default connectDB;