const livros = [
    {
      id: 1,
      titulo: "O Poder do Hábito",
    },
    {
      id: 2,
      titulo: "Entendendo algoritmos",
    },
  ];
  
  function buscaLivro(id){
      return livros.findIndex((livro) => livro.id === id)
  }
  
  console.log(buscaLivro(1))