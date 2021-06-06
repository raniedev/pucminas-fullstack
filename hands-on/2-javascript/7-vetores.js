// Vetores são estruturas que nos permitem associar um conjunto de valores em uma variável.
let frutas = ['laranja', 'maçã', 'banana'];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

// alterando valores
frutas[2] = 'pêra'; // sobrescrita
console.log(frutas);

frutas[3] = 'limão'; // acrescentando um novo elemento, já que não tinha nenhum naquela posição
console.log(frutas);

// passando uma posição que pula uma sequência lógica da ordem natural irá deixar espaços em branco(undefined) nestas posições
frutas[6] = 'kiwi';
console.log(frutas);
console.log(frutas[4]);

// verificar quantos elementos possue dentro de um vetor, usa-se .length
console.log(frutas.length); // também irá contar os campos vazios

// encurtando o vetor forçadamente
frutas.length = frutas.length--; //irá remover a última posição
console.log(frutas); 

// um jeito mais lógico de adicionar um valor na próxima posição do vetor seria utilizando o próprio length
frutas[frutas.length] = 'açaí';
console.log(frutas);

// vetores vazios
let paises = [];
let times = new Array();

// método sort, irá organizar por ordem alfabética
paises = ['Brasil', 'brasil', 'Argentina', 'Chile', 'Portugal', 'Egito', 'Japão', '2Canadá', '&Itália'];
console.log(paises);
console.log(paises.sort()); // Geralmente na ordem: símbolo, número, letra maiúscula e letra minúscula

let inverter = function (x, y) {
    if (x > y) return -1;
    else if (x < y) return 1;
    else return 0;
};

paises.sort(inverter);
console.log(paises);

// método pop, remoção do último item do vetor
times = ['Fluminense', 'Botafogo', 'Flamengo', 'Vasco', 'São Paulo', 'Santos', 'Palmeiras', 'Corinthians'];
console.log(times);
times.pop();
console.log(times);

// método push, adiciona um item na última posição do vetor
times.push("Grêmio");
console.log(times);

// método shift, remove um item no início do vetor
times.shift();
console.log(times);

// método unshift, adiciona um item no começo do vetor
times.unshift("Bahia");
console.log(times);

// método join, faz uma passagem de separador
let nomes = ['Ana', 'Rafael', 'Helen', 'Caio', 'Júlia', 'Márcio', 'Zoe', 'Bernardo'];
console.log(nomes.join(" - "));

// vetor dentro de vetor
let vetor = ['Aline', 1, 5.6, true, [false, 2, 10.3, 'Jorge']];
console.log(vetor);

// matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);