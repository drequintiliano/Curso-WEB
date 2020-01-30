const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono... - ler o arquivo de forma sincrona - ler o arquivo completamente para só ai liberar o event loop, se arquivo grande causa impacto consideravel
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//assincrono... - ler o arquivo de forma assincrona pasando uma callback pra ser chamada quando arquivo estiver carregado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) //transforma isso em um objeto
    console.log(`${config.db.host}:${config.db.port}`); //só funciona se o config for objeto
})

const config = require('./arquivo.json') //pegando o arquivo json, ja traz convertido para objeto
console.log(config.db); // executa antes pq é sincrono

//ler um diretório
fs.readdir(__dirname, (err, arquivos) => { //percorrer o array para ter informações desejadas
    console.log('Conteudo da pasta: ');
    console.log(arquivos);
})