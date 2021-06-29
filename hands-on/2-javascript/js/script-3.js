// Cópia ou fusão de objetos
let obj1 = {nome: 'José Couves', idade: 25};
let obj2 = obj1;
let clone1 = {...obj1}; //clone

obj1.nome = 'Maria Souza'; //Alteração afeta ambos, obj1 e obj2
console.log(clone1.nome);
console.log(obj1.nome);
console.log(obj2.nome);

let mat = {matricula: 1234, curso: 'Web'};
let aluno = {...obj1, ...mat}; //aluno é um objeto que clonou 2 outros objetos
console.log(aluno);

let funcionario = {...obj1, salario: 3500}; //novo atributo para o objeto
console.log(funcionario);

function soma() {
    let valores = [...arguments];
    return valores.reduce(function (total, i) {
        return total += i;
    });
}

console.log(soma(1, 2, 3, 4, 5, 6));

let imagens = document.querySelectorAll('img');
let arquivos = [...imagens].map((i) => i.src);
console.log(arquivos);

let nomes = ['João', 'Silva'];
let [prenome, sobrenome] = nomes;

console.log(prenome);
console.log(sobrenome);


let nome = 'Marta Nunes';
let pessoa = {};
[pessoa.pnome, pessoa.snome] = nome.split(' ');
console.log(pessoa);

let person = {
    nome: 'Caio Souza',
    idade: 34
};

for(let [chave, valor] of Object.entries(person))
    console.log(`${chave} = ${valor}`);

// desestruturação de vetor
let numeros = [1, 2, 3, 4, 5];
let [primeiro, segundo, ...resto] = numeros;
console.log(resto);

// desestruturação de objetos
let persona = {
    nome_a: 'Caio Souza',
    idade_a: 34,
    salario: 2900
};

// trouxe os valores pra uma variável do lado de fora, mas tem que ter o mesmo nome da chave de dentro
let {nome_a, idade_a} = persona;
console.log(nome_a);
console.log(idade_a);

// acessando um objeto
function ola() {
    console.log(`Olá ${nome_a}.`);
}

ola(persona);

// apelido
let {nome_a: apelido, ...restou} = persona;
console.log(apelido);
console.log(restou);