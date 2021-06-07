// objetos são estruturas similares aos vetores, no entanto, ao invés dos valores serem associados a uma posição no conjunto, eles são identificados por meio de um nome
// os valores podem ser vetores, funções, outro objetos etc.
let pessoa = {
    nome: 'João',
    idade: 35
}

// atribuindo valores para um objeto vazio
let musica = {};
console.log(musica);
console.log(typeof musica);
musica.nome = "November Rain";
musica.artista = "Guns 'N Roses";
musica.segundos = 537;

console.log(musica);

// os dados podem ser acessados por dois nomes, objeto.nome ou através de objeto["string"]
console.log(musica.nome);
console.log(musica["nome"]);

// testando se uma propriedade existe, o operador in nos permite testar se uma propriedade existe no objeto
let minutos = Math.trunc(musica.segundos/60);
let segundos = musica.segundos - (60 * minutos);

if ('segundos' in musica) {
    console.log(`A música ${musica.nome} da banda ${musica.artista} tem ${minutos}:${segundos} de duração.`);
}

// percorrer todo objeto acessando todas as suas propriedades
let perfil = {
    nome: 'Karen',
    idade: 23,
    peso: 68.5,
    tipoSanguineo: 'O+'
};

for (let chave in perfil) {
    console.log(`${chave}: ${perfil[chave]}`);
}

// quando atribuimos uma nova variável na variável que recebeu o objeto, não estamos criando um novo objeto, estamos fazendo uma variável que aponta para o mesmo objeto da variável anterior, tendo alteração na nova variável também a antiga será alterada.
let novoPerfil = perfil;
console.log(perfil);
console.log(novoPerfil);
console.log("------------------------------");

novoPerfil.idade = 30;
console.log(perfil); //mudou a idade para 30 no perfil também
console.log(novoPerfil);
console.log("------------------------------");

// clonagem do objeto, criar um novo objeto vazio e copiar suas chaves
let clonarPerfil = {};

for(let chave in perfil) {
    clonarPerfil[chave] = perfil[chave];
}

clonarPerfil.nome = 'Marcelo';
clonarPerfil.idade = 32;
clonarPerfil.peso = 81.3;
clonarPerfil.tipoSanguineo = 'AB-';
console.log(perfil);
console.log(clonarPerfil);


// criar um novo objeto através de função
function criarUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}

let novo = criarUsuario('Helen', 37);
console.log(novo);

// aprimorando
function novoUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        maiorIdade: function () {
            if (this.idade >= 18) {
                return `${this.nome} tem ${this.idade} anos, portanto, é maior de idade.`;
            } else {
                return `${this.nome} tem ${this.idade} anos, portanto, é menor de idade.`;;
            }
        }
    };
}

let novo2 = novoUsuario('Ana', 13);
let novo3 = novoUsuario('Pedro', 53);

console.log(`${novo2.nome} é maior de idade? ${novo2.maiorIdade()}`);
console.log(`${novo3.nome} é maior de idade? ${novo3.maiorIdade()}`);

// função construtora
function Usuario(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.maiorIdade = function () {
        return this.idade >= 18;
    };
}

// Classes

class User {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    maiorIdade() {
        return this.idade >= 18;
    }
}

let pedro = novoUsuario('Pedro I', 76);
let pedro2 = new Usuario('Pedro II', 42);
let pedro3 = new User('Pedro III', 17);

console.log("\n[Exemplo 1] Função");
console.log("------------------------------");
console.log(pedro, pedro.maiorIdade());
console.log("\n[Exemplo 2] Função Construtora");
console.log("------------------------------");
console.log(pedro2, pedro2.maiorIdade());
console.log("\n[Exemplo 3] Classe");
console.log("------------------------------");
console.log(pedro3, pedro3.maiorIdade());