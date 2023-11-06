let notificacoes = [
  {
    id: 1,
    texto: "Curtida na sua foto",
    lida: false,
    notificacaoDePromocao: true,
  },
  {
    id: 2,
    texto: "Nova mensagemmmmmm",
    lida: true,
    notificacaoDePromocao: false,
  },
  {
    id: 3,
    texto: "Novo comentário no seu post",
    lida: true,
    notificacaoDePromocao: false,
  },
  {
    id: 4,
    texto: "Voce foi marcada em uma foto",
    lida: false,
    notificacaoDePromocao: false,
  },
  {
    id: 5,
    texto: "Voce foi mencionada num story",
    lida: false,
    notificacaoDePromocao: false,
  },
  {
    id: 6,
    texto: "Curtida na sua foto",
    lida: false,
    notificacaoDePromocao: false,
  },
];

// caso a notificacao nao tenha sido lida E seja uma notificacao de promocao,
// imprima a notificacao na tela e de desconto de 10% para o usuario
// caso a notificacao nao tenha sido lida E NAO seja uma notificacao de promocao,
// imprima a notificacao na tela
// caso a notificacao tenha sido lida, nao imprima nada

let count = 0;
for (let notificacao of notificacoes) {
  if (notificacao.lida === false && notificacao.notificacaoDePromocao) {
    console.log("desconto de 10% para o usuario");
    console.log(notificacao.texto);
  } else if (notificacao.lida === false) {
    console.log(notificacao.texto);
  } else {
    count++;
    console.log("nao imprima nada");
  }
}
// precisamos percorrer o array de notificacoes e verificar cada uma delas
for (let indice = 0; indice < notificacoes.length; indice++) {
  let notificacao = notificacoes[indice];
  if (notificacao.lida === false && notificacao.notificacaoDePromocao) {
    console.log("desconto de 10% para o usuario");
    console.log(notificacao.texto);
  } else if (notificacao.lida === false) {
    console.log(notificacao.texto);
  } else {
    count++;
    console.log("nao imprima nada");
  }
}
console.log("count", count);
