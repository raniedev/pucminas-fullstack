let ola = function(nome) {
    return `Olá ${nome}`;
}('Kátia');

console.log(ola);
console.log(typeof ola);

(function(nome){
    console.log(`Hello ${nome}`);
})('Zaque');