import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const livroEncontrado = await livro.findById(req.params.id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao encontrar livro` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    console.log(novoLivro.autor)
    try {
        const autorEncontrado = await autor.findById(novoLivro.autor);
        console.log(autorEncontrado)
        const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado} };
        const livroCriado = await livro.create(livroCompleto);
        res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
    }
}

  static async atualizarLivro(req, res) {
    try {
      await livro.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização do livro` });
    }
  }

  static async excluirLivro(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "livro excluido" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao excluir livro` });
    }
  }

  static async listarLivrosPorEditora (req, res){
    const editora = req.query.editora;
    try{
      const livrosPorEditora = await livro.find({editora : editora});
      res.status(200).json(livrosPorEditora)
    } catch (erro){
      res
        .status(500)
        .json({ message: `${erro.message} - falha na busca por editora` });
    }
  }
}

export default LivroController;
