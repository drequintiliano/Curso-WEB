const carrinho = [
    '{"nome": "borracha",   "preco": 3.45}',
    '{"nome": "caderno",    "preco": 13.90}',
    '{"nome": "kit lapis",  "preco": 41.22}',
    '{"nome": "caneta",     "preco": 7.50}'
]

// let resultado = carrinho.map(function(e) {
//     return e
// })

const paraObjeto = json => JSON.parse(json) //primeiro transforma o JSON em objeto para poder manipular
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);