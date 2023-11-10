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
