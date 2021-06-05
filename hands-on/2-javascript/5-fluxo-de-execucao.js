// Controle do fluxo de execução
// if executa se a condição for verdade
// else executa se a condição for falsa
let acessoPermitido;
let idade = 15;

if (idade >= 18) {
    acessoPermitido = true;
} else {
    acessoPermitido = false;
}

console.log(acessoPermitido);

// O mesmo código poderia ser escrito como valor ternário
console.log((idade >= 18) ? true:false);

// Aninhamento de condições
let nota = 80;
let frequencia = 0.92;

if (nota >= 60) {
    if (frequencia >= 0.75) {
        console.log("aprovado");
    } else {
        console.log("reprovado");
    }
} else {
    console.log("reprovado");
}

// Multi condições if else
let a = 20;
let b = 5;
let operador = '/';

if (operador == '+') {
    console.log(1, a + b);
} else if (operador == "-") {
    console.log(1, a - b);
} else if (operador == "*") {
    console.log(1, a * b);
} else if (operador == "/") {
    console.log(1, a / b);
} else {
    console.log("Operador inválido.");
}


// Multi condições utilizando switch
operador = "-";

switch (operador) {
    case "+":
        console.log(2, a + b);
        break;
    case "-":
        console.log(2, a - b);
        break;
    case "*":
        console.log(2, a * b);
        break;
    case "/":
        console.log(2, a / b);
        break;
    default:
        console.log("Operador inválido.");
        break;
}

// Laço de repetição while
let loop = 0;
while(loop < 3) {
    console.log(loop);
    loop++;
    // console.log(loop++); poderia já incrementar dentro da escrita console.log(), mostraria o valor padrão e realizaria um incremento (pós-incremento)
}

// Laço de repetição do...while, sempre executará pelo menos 1 vez as instruções internas, para só depois verificar a condição do laço
loop = 10;
do {
    console.log("Mesmo o laço sendo falso, serei executado pelo menos 1x.");
    loop++;
} while (loop < 10)

// Laço de repetição for
for(loop = 0; loop <= 10; loop++){
    if(loop % 2 == 0){
        console.log(`O número ${loop} é par.`);
    }    
}

// break no for
for (let i = 0; i <= 10; i++) {
    if (i == 7) {
        break; //Irá parar a execução do código daqui em diante e sair do laço for
    }
    console.log("dentro do for: " + i);
}
console.log("fim. fora do for");

// continue no for
for (let i = 0; i <= 10; i++) {
    if (i == 7) {
        continue; //Irá parar a execução do código daqui em diante e voltar para a verificar a condição
    }
    console.log("dentro do for: " + i);
}
console.log("fim. fora do for");