const alunos = [
    { nome: 'jao', nota: 7.9 },
    { nome: 'ana', nota: 9.2 }
]

//imperativo - menos reuso
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

//declarativo - mais interessante, se importa mais com o que tem que ser feito, não tanto o como
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);

// select codigo, nome, email from clientes where ativo = 1 - o que eu quero obter através dessa consulta
// sql uma linguagem declarativa