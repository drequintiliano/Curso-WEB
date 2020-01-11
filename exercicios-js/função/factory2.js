function criarProduto(nome, preco) {
    return {
        nome,
        preco: 'R$ ' + preco,
        desconto: 'R$ ' + preco * 0.1
    }
}

console.log(criarProduto('Notebook', 2199, 49));
console.log(criarProduto('Ipad', 1199, 49));