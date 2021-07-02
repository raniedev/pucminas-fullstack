let forma = {
    x: 10,
    y: 15
};

let retangulo = {
    largura: 100,
    altura: 50
}

retangulo.__proto__ = forma;

forma.cor = 'Azul';

console.log(forma);
console.log(retangulo);
console.log(retangulo.x, retangulo.y);
console.log(retangulo.cor);

// Um jeito mais elegante

let forma2 = {
    x: 20,
    y: 30
};

let retangulo2 = Object.create(forma2); 
retangulo2.largura = 100;
retangulo2.altura = 50;

forma2.cor = 'Vermelho';
console.log(retangulo2.cor);

// Criando uma função construtora

function Forma (x, y) {
    this.x = x;
    this.y = y;
}

let f1 = new Forma(4, 6);

Forma.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
};

Forma.prototype.cor = 'Verde';

f1.move(15, 15);
console.log(f1);

// Herança

function Cor(n) {
    this.cor = n;
}

function Retangulo (x, y, l, a, n) {
    Forma.call(this, x, y);
    Cor.call(this, n);
    this.largura = l;
    this.altura = a;
}

Retangulo.prototype = Object.create(Forma.prototype);
Retangulo.prototype.constructor = Retangulo;

let f2 = new Forma(10, 15);
let r1 = new Retangulo(10, 15, 100, 50, 'Lilás');
f2.move(15, 15);
console.log(r1);

console.log(f2);

// Usando Classes

class Forma_x {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

Forma_x.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
}

class Retangulo_x extends Forma_x {
    constructor(x, y, l, a) {
        super(x, y);
        this.largura = l;
        this.altura = a;
    }
}

let rx = new Retangulo_x(10, 15, 100, 50);
rx.move(15, 15);
console.log(rx);