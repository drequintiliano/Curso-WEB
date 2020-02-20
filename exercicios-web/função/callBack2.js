const notas = [7.7, 6.5, 5.4, 8.9, 3.6, 7.1, 9.0]

//sem usar o callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);

//usando callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas2);

//usando arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

//criando uma função para deixar mais elegante
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4);