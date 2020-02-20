// arrow function - funções de uma unica linha também, o return é chamado implicitamente uando não tem o corpo da função, são funções anonimas
const soma = (a, b) => a + b
console.log(soma(2, 3));

// arrow function (this) asociado no local ao qual a função foi escrita
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default - definir valor padrão
function log(texto = 'node') {
    console.log(texto);

}

log()
log('sou mais forte')

//operador rest
function total(...numeros) { // ... = conjunto
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5));