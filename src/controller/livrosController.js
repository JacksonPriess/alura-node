import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
        })    
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if (err) {
                res.status(400).send({message : `${err.message} - id do livro não localizado.`})    
            } else {
                res.status(200).send(livros)
            }
        })    
    }    

    //Promisse com async/await
    static cadastrarLivroPromisse = async (req, res) => {
        try {
                let livro = new livros(req.body);
                // O await espera a resposta do banco de dados
                await livro.save(); 
                // Se chegou aqui, salvou com sucesso
                res.status(201).send(livro.toJSON());
            } catch (err) {
                // Se houver erro de validação ou de conexão, cai aqui
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar o livro.` });
            }
    } 

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if (!err) {
                res.status(200).send({message : 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message : err.message})
            }
        });
    }
    
    static excluirLivro = (req,res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({message : err.message})
            }
        })
    }

    static listarLivrosPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora' : editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }
    
}

export default LivroController;
