console.log(typeof Object);
console.log(typeof new Object); //instanciando uma função

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto()); //instanciando essa classe voce tem esse objeto