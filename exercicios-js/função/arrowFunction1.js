let dobro = function(a) {
    return 2 * a
}

//função arrow sempre é uma função anonima, se quiser chama-la novamente tem que armazena-la em uma variavel ou constante

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //implicitamente o return é chamado
console.log(dobro(Math.PI));

let ola = function() {
    return 'Ola'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parametro
console.log(ola());