const quaseArray = { 0: 'rafael', 1: 'ana', 2: 'bia' }
console.log(quaseArray);

Object.defineProperties(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])