const prod1 = {} // par de chaves representa objeto que é uma chave de valor
prod1.nome = 'Celular ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaços

console.log(prod1); //dentro de um objeto só pode ter um unico identificardor

const prod2 = {
    nome: 'Camisa Social',
    preco: 79.00
}

'{"nome": "Camisa Social", "preco": 79.00 }' // JSON é um formato textual - comunicação entre sistemas

console.log(prod2);