function tratarErroLancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e) //função para tratar o erro
    } finally {
        console.log('final'); //mesmo que de problema ele vai chamar o 'finally' de qualquer forma

    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)