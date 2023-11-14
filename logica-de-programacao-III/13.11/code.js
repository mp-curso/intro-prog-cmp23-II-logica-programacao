const alunas = ["Lis", "Sol", "Elis", "Grazi", "Ana", "Marina", "Raquel"];

// forma 1
function mostrar(nome) {
  console.log(nome);
}
// alunas.forEach(mostrar);

// forma 2
// alunas.forEach((nome) => {
//   console.log(nome);
// });

// for (let i = 0; i < pessoas.length; i++) {
//   console.log(pessoas[i]);
// }

const salarios = [2000, 3000, 5000, 12000, 20000];
// salarios.forEach((elemento) => {
//   console.log(elemento + 150);
// });

function aumentarSalario(salario) {
  console.log(salario + 150);
}
// function aumentarSalario(salario) {
//   console.log(salario + 150);
// }
// salarios.forEach(aumentarSalario);

// aumentarSalario(salarios[0]);
// aumentarSalario(salarios[1]);
// aumentarSalario(salarios[2]);
// aumentarSalario(salarios[3]);
// aumentarSalario(salarios[4]);

const estagiarias = [
  { nome: "Camily", salario: 2000 },
  { nome: "Leticia", salario: 1500 },
  { nome: "Debora", salario: 4500 },
  { nome: "Elis", salario: 7000 },
];
// console.log(estagiarias[1].salario);

estagiarias.forEach((elemento) => {
  // console.log(elemento.salario);
});

const pessoas = [
  { nome: "Lala", idade: 13 },
  { nome: "Dandara", idade: 2 },
  { nome: "Raquel", idade: 21 },
  { nome: "Grazi", idade: 25 },
  { nome: "Laisa", idade: 21 },
];

pessoas.forEach((elemento) => {
  const nome = elemento.nome;
  const idade = elemento.idade;

  // console.log("A pessoa se chama " + nome + " e tem " + idade + " anos.");
});

// const suaFuncao = (elemento) => {
// const nome = elemento.nome;
// const idade = elemento.idade;

// console.log("A pessoa se chama " + nome + " e tem " + idade + " anos.");
// };

function suaFuncao(elemento) {
  const nome = elemento.nome;
  const idade = elemento.idade;

  // console.log("A pessoa se chama " + nome + " e tem " + idade + " anos.");
}
pessoas.forEach(suaFuncao);
