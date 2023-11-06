// Crie um programa que leia a idade do nadador e o classifique em uma das categorias:
// "Infantil A": 5 a 7 anos
// "Infantil B": 8 a 11 anos
// "Infantil C": 12 a 13 anos
// "Infantil D": 14 a 17 anos

// Caso a pessoa não se encaixe em nenhuma categoria o programa deve retornar "Você não pode competir!"

// let idade = 38;

// exercicio da idade em switch case
let idade = 38;

switch (true) {
  case 5 <= idade && idade <= 7:
    console.log("Infantil A");
    break;
  case 8 <= idade && idade <= 11:
    console.log("Infantil B");
    break;
  case 12 <= idade && idade <= 13:
    console.log("Infantil C");
    break;
  case 14 <= idade && idade <= 17:
    console.log("Infantil D");
    break;
  default:
    console.log("Você não pode competir!");
}
