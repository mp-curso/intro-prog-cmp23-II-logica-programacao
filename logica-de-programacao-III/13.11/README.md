# ForEach

Existem diversas formas de manipular os elementos de um array e uma delas é por meio do método forEach(). A tradução em português de forEach é `para cada`. Portanto, seu objetivo é executar determinada função para cada elemento de um array.

```javascript
// você pode criar a função e passar dentro do forEach para que seja executada para cada elemento
const lista = [];
function funcao(item) {
  `faz algo com o item`;
}
lista.forEach(funcao);

// uma segunda forma é criar a função dentro do próprio forEach caso ela só venha a ser utilizada ali.
lista.forEach((item) => {
  `faz alguma coisa com o item`;
});
```

```javascript
const pessoas = ["Lis", "Sol", "Elis", "Grazi", "Ana", "Marina", "Raquel"];
```

✏️ Crie um forEach que contém uma função que irá listar o nome de cada uma das pessoas do array de pessoas

```javascript
const salarios = [2000, 3000, 5000, 12000, 20000];
```

✏️ Uma empresa tem uma lista de salarios, que são compreende todos os valores de salários pagos. Agora, todos os funcionários tiveram um bonus de R$ 150 reais. Faça um forEach que vá mostrar um console com cada saário atualizado. Exemplo, ao invés de mostrar R$ 2000, ele irá mostrar R$ 2150.

Show de bolas, respira ae galera, vimos um pouco do super poder do forEach. Agora vamos ver que ele é mais poderoso do que parece.

<div align='center'>
  <img src="https://media.tenor.com/9Vzit5BykYgAAAAC/out-of-breath-spongebob.gif" />
</div>
E se, no lugar de uma lista de numeros ou strings nós tivéssemos uma lista de objetos, o forEach ainda seria útil? A resposta é: SIM!

```javascript
const pessoas = [
  { nome: "Lala", idade: 13 },
  { nome: "Dandara", idade: 2 },
  { nome: "Raquel", idade: 21 },
];
```

✏️ Use o forEach e exiba as informações das pessoas em uma frase no seguinte formato: `A pessoa se chama Lisandra e tem 29 anos`.

O forEach tem mais informações que podem ser úteis, como o indice e o array. Para mais informações, convido a [clicar aqui](https://www.freecodecamp.org/portuguese/news/foreach-em-javascript-como-percorrer-um-array-em-js/) para entender mais.

<div align='center'>
  <img src="https://media.tenor.com/jRRGppDK3BEAAAAC/big-bang.gif" />
</div>

Referências: [Blog Trybe](https://blog.betrybe.com/javascript/javascript-foreach/)
