// Variáveis e constantes
let variavel = "ABC";
// var variavel2 = "ABC";
// console.log(variavel);
variavel = "cde";
// console.log(variavel);

const constante = "mnb";
// console.log(constante);

// Operadores de comparação e logico
// == x ===
// == igual: verifica somente o valor
// === estritamente igual: verifica o valor E o tipo

// 1 == 1: true
// 1 == "1": true
// 1 === "1": false

// != x !==
// != diferente: verifica somente o valor
// !== estritamente diferente: verifica o valor E o tipo

// Booleano sempre retorna um dos dois valores, true ou false.
const comprarPao = true;
const comprarCafe = false;
const comprarQueijo = true;
const comprarTomate = false;

const ordemDeMaeFoiAtendida1 = comprarPao && comprarCafe;
// console.log(ordemDeMaeFoiAtendida1);
const ordemDeMaeFoiAtendida2 = comprarPao && comprarQueijo;
// console.log(ordemDeMaeFoiAtendida2);
const ordemDeMaeFoiAtendida3 = comprarCafe && comprarTomate;
// console.log(ordemDeMaeFoiAtendida3);
const ordemDeMaeFoiAtendida4 = comprarPao && comprarQueijo && comprarTomate;
// console.log(ordemDeMaeFoiAtendida4);

const comerQuiabo = true;
const comerAbobora = false;
const comerJilo = true;
const comerFeijao = false;

const condicaoDaMae1 = comerQuiabo || comerAbobora || comerJilo || comerFeijao;
// console.log(condicaoDaMae1);
const condicaoDaMae2 = comerAbobora || comerFeijao;
// console.log(condicaoDaMae2);

// console.log(true);
// console.log(!true);
// console.log(false);
// console.log(!false);

const comerChia = false;
const comerLinhaca = true;

if (comerChia === true) {
  // se
  // console.log("Voce pode comer 1 chocolate");
} else if (comerLinhaca === true) {
  // senão SE
  // console.log("Voce pode comer 2 chocolate");
} else {
  // console.log("Deu ruim, sem chocolate");
  // senão
  // (senao)
  // se nenhuma das condições forem atendidas
  // faça o que tiver aqui!
}

// Crie uma função que receba um número (de 1 a 10) e usando laços de
// repetição calcule e mostre a tabuada de 1 a 10 desse número. Caso o numero
// passado seja maior que 10 ou menor que 1, deve exibir uma mensagem
// "Digite um numero de 1 a 10".

const calcularTabuada = (numero) => {
  if (numero >= 1 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
      console.log(numero * i);
    }
  } else {
    console.log("Digite um numero de 1 a 10");
  }
};
// calcularTabuada(-10);

// 1 x 2
// 2 x 2
// 3 x 2
// 4 x 2
// .
// .
// .
// 10 x 2
