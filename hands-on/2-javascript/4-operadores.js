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

/*
    Comparações, sempre retornam um valor boolean
    >   maior que
    <   menor que
    >=  maior ou igual a
    <=  menor ou igual a
    ==  igual
    !=  diferente
*/

console.log(25, 50 > 5);
console.log(26, 50 < 5);
console.log(27, 50 >= 5);
console.log(28, 50 <= 5);
console.log(29, 50 == 5);
console.log(30, 50 != 5);

// Comparações de String, considera-se o sistema Unicode. Letras maiúsculas precedem as minúsculas na ordem.
// símbolos e números < A~Z < a~z
console.log(31, 'Z' > 'A');
console.log(32, 'Pato' > 'Pata');
console.log(33, 'Dezena' > 'Dez');
console.log(34, 'a' > 'A');

// Comparação de tipos diferentes
console.log(35, "2" > 1); // coerção na string "2" e vira um número
console.log(36, "01" == 1); // coerção na string "01" e vira um número
console.log(37, true == 1); // true vale 1
console.log(38, false == 0); // false vale 0
console.log(39, "" == false); //string vazia "" vale como false
console.log(40, "" == 0); //string vazia "" vale como false

let nome; //sem atribuição será false, assim como =0; =""; e =null;

if (nome) {
    console.log(41, nome);
} else {
    console.log(41, "Vazio");
}

// Estritamente igual ===, compara os valores e tipos ao mesmo tempo 
console.log(42, "1" == 1); //true
console.log(43, "1" === 1); //false

//null x undefined em um estritamente igual
console.log(44, null == undefined); //true
console.log(45, null === undefined); //false
let kappa;
console.log(46, kappa == undefined); //true
console.log(47, kappa == null); //true
console.log(48, kappa === undefined); //true
console.log(49, kappa === null); //false

// Operadores Lógicos
// Conjunção (AND) &&
// Disjunção (OR) ||
// Negação (NOT) !

console.log(50, false && false); //false
console.log(51, true || false); //true
console.log(52, !true); //false