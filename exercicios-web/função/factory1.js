// const prod1 = {
//     nome: '...',
//     preco: 45
// }

// const prod2 = {
//     nome: '...',
//     preco: 25
// }

// Factory simples - função que retorna um objeto (fabrica)

function criarPessoa() {
    return {
        nome: 'ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());