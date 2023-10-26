// Variável para armazenar o valor que será mostrado na tela
let valorNaTela = "";

// Função para adicionar números e operadores na tela
function adicionarNaTela(valor) {
    valorNaTela += valor;
    atualizarTela();
}

// Função para adicionar operadores na tela
function adicionarOperador(operador) {
    if (valorNaTela !== "" && !isNaN(valorNaTela.slice(-1))) {  // Verifica se a tela não está vazia e o último caracter não é um operador
        valorNaTela += operador;
        atualizarTela();
    }
}

// Função para atualizar o valor mostrado na tela
function atualizarTela() {
    document.getElementById("screen").textContent = valorNaTela;
}

// Função para calcular o resultado
function calcularResultado() {
    const operadores = ['+', '-', '*', '/'];
    let operadorUsado = null;

    for (let op of operadores) {
        if (valorNaTela.includes(op)) {
            operadorUsado = op;
            break;
        }
    }

    if (operadorUsado) {
        const valores = valorNaTela.split(operadorUsado);
        let resultado = null;

        switch (operadorUsado) {
            case '+':
                resultado = somar(valores[0], valores[1]);
                break;
            case '-':
                resultado = subtrair(valores[0], valores[1]);
                break;
            case '*':
                resultado = multiplicar(valores[0], valores[1]);
                break;
            case '/':
                resultado = dividir(valores[0], valores[1]);
                break;
        }

        if (resultado !== null) {
            valorNaTela = resultado.toString();
            atualizarTela();
        } else {
            alert("Expressão inválida!");
            limparTela();
        }
    } else {
        alert("Operador não encontrado!");
        limparTela();
    }
}

// Funções específicas para cada operação
function somar(numeroUm, numeroDois) {
    return parseFloat(numeroUm) + parseFloat(numeroDois);
}

function subtrair(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiplicar(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function dividir(a, b) {
    if (b !== "0") {
        return parseFloat(a) / parseFloat(b);
    } else {
        alert("Não é possível dividir por zero!");
        limparTela();
        return null;
    }
}

// Função para limpar a tela
function limparTela() {
    valorNaTela = "";
    atualizarTela();
}
