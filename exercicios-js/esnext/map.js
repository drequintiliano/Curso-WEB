//estrutura map

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
})

console.log(chavesVariadas.has(123)); //has vai dizer se esta dentro desse map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //chave não aceita repetição, no valor pode ser repetido quanto quiser
console.log(chavesVariadas);