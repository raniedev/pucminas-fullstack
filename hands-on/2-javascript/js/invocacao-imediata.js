let ola = function(nome) {
    return `Olá ${nome}`;
}('Kátia');

console.log(ola);
console.log(typeof ola);

(function(nome){
    console.log(`Hello ${nome}`);
})('Zaque');

let $ = (function() {
    let contadores = [];

    function Contador(i) {
        if(contadores[i] === undefined)
            contadores[i] = 0;
        this.indice = i;
        this.incrementa = function() {
            contadores[this.indice]++;
            return this;
        };
        this.decrementa = function() {
            contadores[this.indice]--;
            return this;
        };
        this.valor = function (){
            return contadores[this.indice];
        }
    }

    return function(i) {
        return new Contador(i);
    };
})();

let c = $(3);
console.log(c);

c.incrementa();
c.incrementa();
c.incrementa();
c.incrementa();
console.log(c.valor());
c.incrementa();
c.incrementa();
console.log(c.valor());
c.decrementa();
console.log(c.valor());
c.incrementa();
c.incrementa();
c.incrementa();
console.log(c.valor());

let c2 = $(5);
console.log(c2);

c2.incrementa().incrementa().incrementa().incrementa().decrementa();
console.log(c2.valor());