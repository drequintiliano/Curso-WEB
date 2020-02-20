// Object.preventExtensions - poderá excluir atributos, mas não acidionar

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto);

// Object.seal - selar, não consegue adicionar nem excluir atributos, mas pode modifica-los
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = selado + valores constantes - não pode ser modificado