import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })    
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({message : `${err.message} - id do autor não localizado.`})    
            } else {
                res.status(200).send(autores)
            }
        })    
    }    

    //Promisse com async/await
    static cadastrarAutorPromisse = async (req, res) => {
        try {
                let autor = new autores(req.body);
                // O await espera a resposta do banco de dados
                await autor.save(); 
                // Se chegou aqui, salvou com sucesso
                res.status(201).send(autor.toJSON());
            } catch (err) {
                // Se houver erro de validação ou de conexão, cai aqui
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar o autor.` });
            }
    } 

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if (!err) {
                res.status(200).send({message : 'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message : err.message})
            }
        });
    }
    
    static excluirAutor = (req,res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Autor removido com sucesso'})
            } else {
                res.status(500).send({message : err.message})
            }
        })
    }
    
}

export default AutorController;
