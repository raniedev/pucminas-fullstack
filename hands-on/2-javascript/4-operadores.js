let a = 2;
let b = 4;

// Operadores
// Unários: possuem apenas um operando
// Binários: poussem dois operandos
let c = -a;
let d = a + b;
console.log(1, c, d);

// Atribuição utiliza o símbolo igual =
let e = 10;
console.log(2, e);

// Mudar de string para number, usa-se sinal positivo (+)
let f = +15;
console.log(3, f, typeof f);

// Mudar de number para string, concatenar string vazia ao valor (+ "")
let g = 33 + "";
console.log(4, g, typeof g);

// Pré-incremento, incremento
let h = 5;
console.log(5, ++h * 2, h);

let i = 5;
console.log(6, i++ * 2, i);

// Pré-decremento, decremento
let j = 5;
console.log(7, --j * 2, j);

let k = 5;
console.log(8, k-- * 2, k);

/* 
Operadores básicos da matemática
    +   adição
    -   subtração
    *   multiplicação 
    /   divisão
    %   módulo
    **  exponenciação
*/

console.log(9, 20+3);
console.log(10, 20-3);
console.log(11, 20*3);
console.log(12, 20/3);
console.log(13, 20%3);
console.log(14, 20**3);

// Concatenação, junção de strings
console.log(15, "Tenho " + 12 + " reais.")

// Coerção, quando um valor de um tipo é transformado em outro tipo para que o operador funcione
// adição se aplica para string quando concatenando e para número quando posterior para transformação
// subtração, multiplicação e divisão se aplicam a number

let alpha = "5" + 2; 
let beta = +"5" + 2;
let gamma = "5" - 2;
let delta = 5 + "2";
let epsilon = 5 - "2";
let zeta = 5 + 2 + "2";
let eta = 5 + "2" + 2;
let theta = +(5 + "2") + 2;
let iota  = "5" / "2";

console.log(16, alpha, typeof alpha);
console.log(17, beta, typeof beta);
console.log(18, gamma, typeof gamma);
console.log(19, delta, typeof alpha);
console.log(20, epsilon, typeof epsilon);
console.log(21, zeta, typeof zeta);
console.log(22, eta, typeof eta);
console.log(23, theta, typeof theta);
console.log(24, iota, typeof iota);