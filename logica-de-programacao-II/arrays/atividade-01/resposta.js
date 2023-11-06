// # Exercícios de classe 🌟

// ## Meu primeiro array

// Crie um array com 5 nomes de cantoras.
// Adicione uma cantora ao fim da lista e imprima a lista na tela
// Remova uma cantora do fim da lista e imprima a lista na tela
// Adicione uma cantora ao início da lista e imprima a lista na tela
// Remova uma cantora do início da lista e imprima a lista na tela
// Imprima a última cantora da lista na tela
// Imprima a segunda cantora da lista na tela
// Imprima a cantora de índice 2 na tela
let cantoras = [
  "Anitta",
  "Iza",
  "Ludmilla",
  "Pabllo Vittar",
  "Marina Sena",
  "Liniker",
  "Anitta",
  "Iza",
  "Ludmilla",
  "Pabllo Vittar",
  "Marina Sena",
  "Liniker",
  "Anitta",
  "Iza",
  "Ludmilla",
  "Pabllo Vittar",
  "Marina Sena",
  "Liniker",
  "Anitta",
  "Iza",
  "Ludmilla",
  "Pabllo Vittar",
  "Marina Sena",
  "Liniker",
  "Anitta",
  "Iza",
  "Ludmilla",
  "Pabllo Vittar",
  "Marina Sena",
  "Liniker",
];

cantoras.push("Alcione");
console.log("antes:", cantoras);
// Remova uma cantora do fim da lista e imprima a lista na tela
cantoras.pop();
console.log("depois:", cantoras);
cantoras.shift();
console.log("depois do shfit:", cantoras);
cantoras.unshift("Oi");
console.log("depois do oi:", cantoras);

// Imprima a última cantora da lista na tela
console.log("ultima cantora:", cantoras[cantoras.length - 1]);
console.log("tamanho", cantoras.length);
// Imprima a segunda cantora da lista na tela
console.log("segunda cantora:", cantoras[1]);
// Imprima a cantora de índice 2 na tela
console.log("segunda cantora:", cantoras[2]);
