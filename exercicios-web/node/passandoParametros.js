module.exports = function(...nome) { //função que recebe um argumento variavel, vai poder passar quantos nomes quiser
    return nome.map(nome => `Boa semana ${nome}!`)
}