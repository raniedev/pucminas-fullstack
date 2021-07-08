console.log('.log');
console.info('.info');
console.debug('.debug');
console.warn('.warn');
console.error('.error');

(function mensagens() {
    console.log('.log');
    console.info('.info');
    console.debug('.debug');
    console.warn('.warn');
    console.error('.error');
})();

console.log('%cOlá %s, hoje é dia %d.', 'color: green; font-size: large', 'Marcos', 29);

console.table([1, 2, 3]);
console.table([
    {nome: 'João', idade: 35},
    {nome: 'Maria', idade: 25}
]);
console.table([
    {nome: 'Aline', idade: 21},
    {apelido: 'Nath', nascimento: 1995}
]);

console.count('Cuidado!');
console.count('Alerta');
console.count('Alerta');
console.count('Alerta');
console.count('Cuidado!');
console.count('Alerta');

console.log(console.memory);

// console.clear();