const pilotos = ['veveto', 'alonso', 'raduken', 'massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('carambola') //adiciona novo elemento no array
console.log(pilotos);

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('hamilton')
console.log(pilotos);

//splice pode adicionar e remover elementos no array
pilotos.splice(2, 0, 'botas', 'massa')
console.log(pilotos);

pilotos.splice(3, 1) //remover um unico elemento
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) //vai até o indice 4 sem incluir o indice 4
console.log(algunsPilotos2);