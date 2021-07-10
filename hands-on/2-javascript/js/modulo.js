import { Circulo } from "./geometria.js";
import {contador, conta} from './contador.js';
// import {digaOla as ola, digaTchau as tchau} from './ola.js';
import * as ola from './ola.js';

let c = new Circulo(10);
console.log(`A área do círculo é: %d`, c.area());

// console.log(contador);
// contador.valor = 3;
// console.log(contador);

for(let i = 0; i < 5; i++) {
    console.log(conta());
}

console.log(contador.valor);

console.log(ola);