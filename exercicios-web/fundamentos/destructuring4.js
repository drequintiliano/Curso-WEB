function rand([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min] //se o minimo for maior que maximo, precisa inverter
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
//console.log(rand()); // não pode desestruturar undefined ou nulo

//DESTRUCTURING - tirar algo de dentro de objetos e arrays