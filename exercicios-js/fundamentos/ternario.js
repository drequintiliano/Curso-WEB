const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //função arrow com operador ternario

/*const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
} ---mesma coisa que a linha 1
*/

console.log(resultado(7.1));
console.log(resultado(6.7));