Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        //newArray[i] = callback()[i] - ERRADO, meu pensamento
        newArray.push(callback(this[i], i, this)) //dentro de cada interação chamou callbak passando o elemento atual, o indice e o array original
    }
    return newArray
}



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

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado);