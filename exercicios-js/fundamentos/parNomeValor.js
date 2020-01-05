// pra nome/valor
const saudacao = 'Opa' // contexto léxico 1 - em que local fixo do seu código foi definido

function exec() {
    const saudacao = 'Falaaaaaa' //contexto lexico 2
    return saudacao
}

//objetos são grupos anunhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua sai de baixo',
        numero: 250
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);