// Utilizando javascript, declare e insira valores nas variáveis:

// - Livro
// - Autor
// - Quantidade de páginas
// - Preço
// - Já leu?

// LEMBRAR DE INSTALAR A BIBLIOTECA readline-sync
// npm install readline-sync
const minhaBibliotecaQueLeLinhasDoTerminal = require("readline-sync");

const livro = minhaBibliotecaQueLeLinhasDoTerminal.question(
  "Digite o nome do livro: "
);
const autor = minhaBibliotecaQueLeLinhasDoTerminal.question(
  "Digite o nome do autor: "
);
const quantidadeDePaginas = minhaBibliotecaQueLeLinhasDoTerminal.questionInt(
  "Digite a quantidade de paginas: "
);
const preco = minhaBibliotecaQueLeLinhasDoTerminal.questionFloat(
  "Digite o preco do livro: "
);
const jaLeu = minhaBibliotecaQueLeLinhasDoTerminal.question(
  "Você já leu o livro? "
);

console.log(
  `O livro ${livro} do autor ${autor} tem ${quantidadeDePaginas} 
  paginas e custa ${preco} reais. Você já leu? ${jaLeu}`
);
