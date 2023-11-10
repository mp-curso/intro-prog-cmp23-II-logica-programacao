// Crie uma função que mostra um console.log contendo seu nome e sua idade

// minhaFuncao1();
function minhaFuncao1() {
  console.log("Lisandra Cruz, 29 anos.");
}
// minhaFuncao1();

// const minhaFuncao2 = () => {
//   console.log("Lala, 13 anos.");
// };
// const minhaFuncao2 = () => console.log("Lala, 13 anos.");
// minhaFuncao2();

// console.log(a);
// var a = 12;
// console.log(a);

// console.log(a);
// let a = 12;
// console.log(a);

// let a = 12;
// console.log(a);

// function somarDoisNumeros() {
//   const numero1 = 5;
//   const numero2 = 12;
//   const resultado = numero1 + numero2;

//   console.log(resultado);
// }

const somarDoisNumeros = () => {
  const numero1 = 5;
  const numero2 = 12;
  const resultado = numero1 + numero2;

  console.log("A soma é: " + resultado);
};
// somarDoisNumeros();

// const somarDoisNumeros = (numero1, numero2) => {
//   const resultado = numero1 + numero2;
//   console.log("O resultado é: " + resultado);
// };

// somarDoisNumeros(2, 21);
// somarDoisNumeros(2, 3);
// somarDoisNumeros(1, 44);

// const calcularMedia = (nota1, nota2, nota3) => {
//   const media = (nota1 + nota2 + nota3) / 3;
//   console.log(media);
// };

// calcularMedia(4, 8, 5.5);
// calcularMedia(10, 2, 7);
// calcularMedia(3, 8, 7);
// calcularMedia(10, 7, 9);

// Crie uma função que recebe por parâmetro o tempo de duração expressa em segundos e retorna esse tempo em minutos (divide por 60) e horas.
const conversorDeTempoEmSegundos = (tempoEmSegundos) => {
  const tempoEmMinutos = tempoEmSegundos / 60;
  const tempoEmHoras = tempoEmMinutos / 60;
  // const tempoEmHoras = tempoEmSegundos / 3600;
  console.log(
    `${tempoEmSegundos} segundos é igual a ${tempoEmMinutos} minutos e é igual a ${tempoEmHoras} horas`
  );
};

// conversorDeTempoEmSegundos(60);
// conversorDeTempoEmSegundos(3600);

// 1 hora = 60 minutos = 3600 segundos
// 1 minuto = 60 segundos

//Crie uma função que receba três números, verifique e mostre o maior deles.
function retornaMaiorNumero(n1, n2, n3) {
  // como eu sei que N1 é o maior numero? se n2 e n3 forem menor do que ele.
  // if (n2 < n1 && n3 < n1) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1 + " é o maior dos 3 numeros recebidos.");
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2 + " é o maior dos 3 numeros recebidos.");
  } else if (n3 > n1 && n3 > n2) {
    console.log(n3 + " é o maior dos 3 numeros recebidos.");
  } else {
    console.log("Pane no sitemas!!!!");
  }
}

retornaMaiorNumero(null, null, null);
