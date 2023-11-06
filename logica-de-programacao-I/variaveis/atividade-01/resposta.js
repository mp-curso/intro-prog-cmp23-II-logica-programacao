const lerInput = require("readline-sync");

const numero1 = lerInput.questionInt("Digite o primeiro numero: ");
const numero2 = lerInput.questionInt("Digite o segundo numero: ");

const soma = numero1 + numero2;

const nome = lerInput.question("Digite seu nome: ");

console.log(`${nome}, a soma dos numeros é ${soma} ${nome}`);
