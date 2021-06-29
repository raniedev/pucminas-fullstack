let a;

try {
    a = x;
    console.log('TRY - Bloco de código a ser testado para erros enquanto está sendo executado.');
} catch (erro) {
    output.innerHTML = 'CATCH (ERRO) - Permite você definir um bloco de código a ser executado ser um erro ocorre no bloco try.';
}
console.log('1, Fim');

let x = -2;

try {
    if (x < 0) throw new TypeError('Valor não pode ser negativo');
    a = x;
    output2.innerHTML = `<p>A = ${a}</p>`;
} catch (erro) {
    output2.innerHTML = `<p>Algo deu errado: ${erro.message}</p>`;
    console.log(erro.nome);
    console.log(erro.message);
    console.log(erro.stack);
} finally {
    console.log('2, Fim');
}