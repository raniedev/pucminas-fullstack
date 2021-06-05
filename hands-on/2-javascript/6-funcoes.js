// Funções, quando temos um código que será necessário ser executado várias vezes, podemos encapsulá-lo em um bloco de instruções que ao ser chamada no decorrer do programa ela será executada.

mensagem(); //A chamada funciona anteriormente ao bloco de função

function mensagem() {
    console.log(1, "Olá mundo!");
}

// Parâmetro, passagem de uma variável para ser utilizada dentro da função
function identificacao(nome) {
    console.log(2, `Nome informado: ${nome}`);
}

identificacao(3, "Pedro");

// Múltiplos parâmetros
function adicao(a, b) {
    console.log(4, a + b);
}

adicao(3, 5);

// return, retornará o valor
function subtracao(a, b) {
    return a - b;
}

let resultado = subtracao(40 , 2);
console.log(5, resultado);

// pode ser passado direto também
console.log(6, subtracao(33, 10));

// os parâmetros podem ter um valor padrão caso não sejam informados, fazendo uma simples atribuição
function multiplicacao(a = 4, b = 1) {
    return a * b;
}

console.log(7, multiplicacao(7));

// passando mais parâmetros que a função suporta, as variáveis extras serão descartadas
function divisao(a, b = 1) {
    return a / b;
}

console.log(8, divisao(100, 20, 5, 10, 2, 4));

// objeto interno arguments
function somar() {
    console.log(9, arguments);
    console.log(10, arguments[0]);
    console.log(11, arguments[1]);
}

somar(5, 10);

// variável local e "global"
let nome = "Caio";
function msg() {
    let nome = "Ana";
    console.log(12, nome);
}
msg(); // Ana
console.log(13, nome); // Caio

let nome2 = "Marcos";
function msg2(nome2) {
    console.log(14, "Olá " + nome2);
}
msg2("Helen"); // Helen

// Expressão de função, atribuir uma função sem nome a uma declaração de variável
let subtrair = function(a, b) {
    return a - b;
};

console.log(15, subtrair(88, 8));

// Útil para funções de callback
let subtraindo = subtrair;
console.log(16, subtraindo(34, 9));

// passando função por parâmetro
let somei = function (x, y) {
    return x + y;
}

let executar = function(funcao, param1, param2) {
    return funcao(param1, param2);
}

let solucao = executar(somei, 3, 4);
console.log(17, solucao);

// função recursiva
function fatorial(n) {
    if(n <= 0){
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(18, fatorial(6));

// Arrow functions. é apenas uma forma simplificada que retornam valores
let multiplicando = (x, y) => x * y; // não precisa do termo return
console.log(19, multiplicando(5, 10));

let dividindo = x => x / 2; //tendo um parâmetro apenas, os parênteses podem ser ocultados