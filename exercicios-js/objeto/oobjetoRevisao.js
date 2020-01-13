// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: 'Rua tenorio',
            numero: 234
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calculavalorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['rua'] = 'Av Gigante'
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculavalorSeguro
console.log(carro);
console.log(carro.condutores); //retorna undefined
//console.log(carro.condutores.length); //se tentar acessar o atributo de algo que esteja indefinido gera um erro