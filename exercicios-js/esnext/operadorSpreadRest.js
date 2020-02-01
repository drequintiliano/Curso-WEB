// operador ... rest(juntar) /spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionario = { nome: 'maria', salario: 10900.99 }
const clone = { ativo: true, ...funcionario } //espalhando dentro de clone todos os funcionarios
console.log(clone);

//usar spread com array
const grupoA = ['jao', 'pedro', 'gloria']
const grupofinal = ['maria', ...grupoA, 'Rafaela']
console.log(grupofinal);