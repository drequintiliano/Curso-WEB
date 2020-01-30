const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //axios - client http - faz requisição


const findChina = a => a.pais = 'China'
const findMulher = a => a.genero = 'F'

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const resultado = funcionarios
        .filter(findChina)
        .filter(findMulher)
        .reduce(menorSalario)

    console.log(resultado);

})


// dentro do arquivo package.json no objeto "script" voce pode definir comandos encadeados, criar scripts para executar tarefas automatizadas, gerar arquivos, etc...