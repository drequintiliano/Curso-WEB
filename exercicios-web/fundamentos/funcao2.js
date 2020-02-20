//armazenando uma função em uma variavel
const imprimirSoma = function(a, b) { //recebe uma função anonima
    console.log(a + b);
}

imprimirSoma(2, 3)

//armazenando uma funcão ARROW em uma variavel
const soma = (a, b) => { // '=>' substitui o nome 'function'
    return a + b
}

console.log(soma(3, 5));

//retorno implicito
const subtracao = (a, b) => a - b //'=>' arrow function
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!')

//voce é capaz de armazenar uma funcão em uma variavel