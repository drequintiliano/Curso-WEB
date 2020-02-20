class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`); //this acessa o nome do objeto que foi instaciado

    }
}

//esse objeto tem ciencia do contexto lexico que foi declarado, escopo mais abrangente, uso dessa função factory deterministico
const p1 = new Pessoa('jao')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)

    }
}

const p2 = criarPessoa('jao')
p2.falar()