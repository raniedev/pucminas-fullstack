let funcionario = {
    prenome: 'Janaina',
    sobrenome: 'Oliveira',
    salario: 3500,
    nascimento: new Date (1987, 10, 2),
    get nomeCompleto() {
        return `${this.prenome} ${this.sobrenome}`;
    },
    set nomeCompleto(nc) {
        [this.prenome, this.sobrenome] = nc.split(' ');
    },
    set novoSalario(v) {
        if(v < this.salario)
            throw new Error('Salário não pode ser menor que o atual');
        else
            this.salario = v;
    },
    get idade() {
        let ano = (new Date()).getFullYear();
        return ano - this.nascimento.getFullYear();
    }
};

console.log(funcionario.nomeCompleto);
funcionario.nomeCompleto = 'Maria Santana';
console.log(funcionario);
console.log(funcionario.nomeCompleto);

funcionario.novoSalario = 4000;
console.log(funcionario);

console.log(funcionario.idade);

