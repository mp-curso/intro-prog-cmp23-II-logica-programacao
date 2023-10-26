// # Exercícios de classe 🌟

// ## Cálculo de média

// Crie um programa que calcule a média de quatro notas fornecidas pelo usuário.
// As notas podem variar de 0.0 a 10.0. O programa deverá calcular a média aritmética 
// das quatro notas e exibir o resultado para o usuário.

// formula da media aritmetica NESSE CASO = somaDasQuatroNotas/4

// EXTRA = Você deverá exibir o valor da média no console com duas casas decimais.

const lerInput = require("readline-sync");

let notaUm = lerInput.questionFloat("Digite a primeira nota: ");
let notaDois = lerInput.questionFloat("Digite a segunda nota: ");
let notaTres = lerInput.questionFloat("Digite a terceira nota: ");
let notaQuatro = lerInput.questionFloat("Digite a quarta nota: ");

let media = (notaUm + notaDois + notaTres + notaQuatro) / 4;

let nome = lerInput.question("Digite seu nome: ");

console.log(`${nome}, a sua média é: ${media}`)
