// Içamento (Hoisting)
// A chamada da função anterior a função em si é possível por causa da primeira varredura que o compilador faz na busca dos nomes e as iça para parte superior.
fn();
c = 3; // associando 3 para variável c, que só foi criada na parte inferior do programa (funciona por ser do tipo VAR)
console.log(c);

// let e const, escopo local
let a = 1;
const b = 2;

// var e this, escopo global (por isso não se usa mais var)
var c = 3;
this.d = 4;

function fn() {
    console.log(this);
}

let pessoa = {
    nome: 'Marcos',
    fn: function() { 
        console.log(this);
    },
    fn2: () => console.log(this) //EVITAR A FUNÇÃO DE SETA NESTE CASO, PARA NÃO OCORRER PERDA DE CONTEXTO
}

pessoa.fn(this);
pessoa.fn2(this);

// função construtora
function Pessoa(n) {
    this.nome = n;
    this.fn = function() {
        console.log(this);
    }
}

let p = new Pessoa('Marcos');
p.fn();

class Pessoa2 {
    constructor(n) {
        this.nome = n;
    }
    fn2() {
        console.log(this);
    }
}

let p2 = new Pessoa2('Helen');
p2.fn2();

class Pessoa3 {
    constructor(n) {
        this.nome = n;
    }
    fn3(n) {
        let self = this;
        setTimeout(function() {
            self.nome = n;
            console.log(self);
        }, 1000);
    }
}

let p3 = new Pessoa3('Ruth');
p3.fn3('Ana');