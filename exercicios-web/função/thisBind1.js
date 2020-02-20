const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);

    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito de paradgimas: funcional e Orientado a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
    //metodo responsavel por amarrar o dono da execução desse metodo, o 'this' sera o objeto que vc passou para a função bind