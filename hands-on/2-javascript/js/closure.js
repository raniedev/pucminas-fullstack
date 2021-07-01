function criaContador() {
    let n = 0;
    return function() {
        console.log(n++);
    }
}

let contador1 = criaContador();
contador1();
contador1();
contador1();


function digaOla(idioma) {
    return function(nome) {
        switch(idioma) {
            case 'es':
                console.log(`Hola, ${nome}`);
                break;
            case 'en':
                console.log(`Hello, ${nome}`);
                break;
            case 'ja':
                console.log(`今日わ, ${nome}`);
                break;
            default:
                console.log(`Olá, ${nome}`);
        }
    }
}

let espanol = digaOla('es');
let english = digaOla('en');
let 今日わ = digaOla('ja');
let padrao = digaOla();

espanol('José');
english('Claire');
今日わ('Sakura'); //Interessante saber que Japonês funciona
padrao('Aline');

function criaContador2() {
    let n = 0;
    function altera(v) {
        n += v;
    };
    return {
        incrementa: function() {
            altera(1);
        },
        decrementa: function() {
            altera(-1);
        },
        valor: function() {
            return n;
        }
    }
}

let contador2 = criaContador2();
contador2.incrementa();
console.log(contador2.valor());
contador2.incrementa();
console.log(contador2.valor());
contador2.decrementa();
console.log(contador2.valor());
contador2.incrementa();
console.log(contador2.valor());

function criaFuncoes() {
    let funcoes = [];
    let i = 0;
    // while(i < 3) {
    //     let j = i;
    //     funcoes.push(function(){
    //         console.log(j);
    //     });
    //     i++;
    // }
    for (let i = 0; i < 3; i++) { // não esquecer de por let, pois var dará 3, 3, 3 em vez de 0, 1, 2
        funcoes.push(function() {
            console.log(i)
        });
    }
    return funcoes;
}

let fn = criaFuncoes();
fn[0]();
fn[1]();
fn[2]();