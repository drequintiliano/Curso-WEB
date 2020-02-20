//função é um bloco de código, e esse bloco de código recebe um nome, para que voce possa chama-lo onde preferir, pode receber parametros de entrada, pode retornar um valor, pode não receber parametros de entrada, pode não retornar nada...

//funççao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //ele pega os dois primeiros parametros e ignora o resto
imprimirSoma()

//funcao com retorno
function soma(a, b = 1) { //valor padrão de b = 1 se não for passado parametro nenhum para 'b'
    return a + b
}

console.log(soma(2, 3));
console.log(soma(2));