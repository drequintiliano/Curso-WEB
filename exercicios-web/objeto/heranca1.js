const ferrari = {
    modelo: 'F40',
    velMax: 342
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype); // o objeto não tem atributo prototype
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype);

//toda função tem esse atributo prototype