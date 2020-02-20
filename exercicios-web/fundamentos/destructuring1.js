// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // tire de dentro do objeto os atributos nome e idade
console.log(nome, idade);

const { nome: n, idade: i } = pessoa
console.log(n, i);

const { sobrenome, humor = true } = pessoa // se não vier nada no atributo 'humor', assuma o valor 'true'
console.log(sobrenome, humor);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);

//const { conta: {ag, num} } = pessoa -- não existe, desestruturar um dado aninhado, o caminho deve estar setado se não gera um problema.