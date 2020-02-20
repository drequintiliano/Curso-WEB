// pessoa aponta para o endereço de memoria 123 -> {...} aponta para o objeto de memoria// esse dado pode ser alterado
const pessoa = { nome: 'Jao' }
pessoa.nome = 'Pedro' //atribuindo para 'pessoa.nome'
console.log(pessoa);

//pessoa vai receber um novo objeto e esse objeto esta no endereço 456 -> {...}
//pessoa = { nome: 'Ana' }// não pode atribuir novamente para constante pessoa um outro objeto que vai estar em um outro endereço

Object.freeze(pessoa) //ignora qualquer alterção do objeto - congelou o objeto, transforma o objeto em constante, ninguém exclui, atribui , nada.

pessoa.nome = 'Maria'
pessoa.end = 'Rua endes'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Jonas' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante);