let nome;
nome = "Marcos";
console.log(nome);

let sobrenome = 'Silva';
console.log(sobrenome);

let idade = 50;
console.log(idade);

let casado = true;
console.log(casado);

console.log('Nome: ' + nome + ', sobrenome: ' + sobrenome + ', idade: ' + idade + ', casado: ' + casado);

//Comentário de linha

/*

Comentário de blocos

*/

{
    // Só funciona dentro do escopo de função (chaves)
    let nome2 = 'Maria';    
}

// console(nome2); Erro, não irá funcionar pois está fora das chaves

//var = escopo global
//let = escopo local (recomendado)

const PI = 3.14159;
console.log(PI);

// PI = 5; Erro, atribuição em uma constante