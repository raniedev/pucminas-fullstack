function digaOla(nome) {
    console.log(`Olá ${nome}`);
}

function digaTchau(nome) {
    console.log(`Tchau ${nome}`);
}

let usuario = {
    nome: 'Aline'
}

export {usuario as default, digaOla as ola, digaTchau as tchau}