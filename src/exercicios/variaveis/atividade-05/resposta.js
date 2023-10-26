const lerInput = require("readline-sync");

// Faça um programa que armazene duas frases e compare se elas são iguais.
const frase1 = lerInput.question("Digite a primeira frase: ");
const frase2 = lerInput.question("Digite a segunda frase: ");

const saoIguais = frase1 === frase2;

console.log(`As frases são iguais? ${saoIguais}`);