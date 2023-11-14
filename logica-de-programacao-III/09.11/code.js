// Utilizand o for, crie um loop que mostra uma contagem regressiva de 0 até 10.

const contagemRegressivaContraria = () => {
  // for (let contador = 0; contador < 11; contador++) {
  for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
  }
};
// contagemRegressivaContraria();

const contagemRegressiva = () => {
  // for (let contador = 0; contador < 11; contador++) {
  for (let contador = 10; contador >= 0; contador--) {
    console.log(contador);
  }
};
// contagemRegressiva();

const contadorDinamico = (limite) => {
  for (let contador = 0; contador <= limite; contador++) {
    console.log(contador);
  }
};

// contadorDinamico(100);
// contadorDinamico(51);

const primos = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
];

for (let i = 0; i < primos.length; i++) {
  // todo numero par é divisivel por 2. Se eu dividir um numero
  // por 2 o resto vai ser zero.
  if (primos[i] % 2 !== 0) {
    console.log(primos[i] + " é impar");
  }
}
