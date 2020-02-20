//configurar o express que vai ser o servidor web, para ciação dos web services
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// para qualquer requisição que voce fizer no servidor usando express, vai obrigatoriamente passar por esse middlware - se os dados estiverem sendo passados pelo padrão urlencoded, quando chegar na aplicação vai aplicar esse middlware, fazneod um parse que transforma em um objeto.
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //vai gerar um JSON para ir para web
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //vai gerar um JSON para ir para web
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //vai gerar um JSON para ir para web
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);

})



// app.get('/produtos', (req, res, next) => {
//     console.log('Middlware 1...');
//     next()

// })

// qualquer url vai passar pelo "use"
// app.use((req, res, next) => { 
//     res.send({ nome: 'Notebook', preco: 123.45 }) // vai ser convertido para JSON automaticamente pelo metodo send
// })