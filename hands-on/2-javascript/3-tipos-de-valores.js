// Javascript é uma linguagem fracamente tipada, não necessário informar o tipo e ela pode mudar de tipo ao decorrer do código
let v;

v = 'JavaScript';
// typeof informa qual é o tipo atual da variável
console.log(1, v, typeof v);

v = 31;
console.log(2, v, typeof v);

// Number representa qualquer tipo de número, seja inteiro ou real.
//Tendo seu menor valor como -Infinity e maior como Infinity, o valor NaN representa (não é um número)
let x = 1;
let y = 2.5;
console.log(3, x, typeof x, + " " + y, typeof y);

// BigInt para valores muito grande, geralmente utilizados em criptografia. Finaliza-se com n. (nem todos navegadores ainda oferecem suporte)
let giga = 8686785876888778875554436976n;
console.log(4, giga, typeof giga);

// Template string tem duas vantagens, criar uma string multi linha e adicionar expressões pelo delimitador ${e}
let nome = "Ana", idade = 25, mat = 12345;
let mensagem = `A aluna ${nome} tem ${idade} anos.
Sua matrícula é: ${mat}`;
console.log(5, mensagem);

// Valores lógicos
let casado = true;
let temFilhos = false;
let adulto = idade >= 18;
console.log(6, casado, temFilhos, adulto);

//Valor undefined é quando o valor da variável não teve nenhum valor atribuído ainda e null significa sem valor ou vazio, pode ser usado como forma de apagar/limpar uma variável
let z;
console.log(7, z, typeof z);
z = null;
console.log(8, z, typeof z);
