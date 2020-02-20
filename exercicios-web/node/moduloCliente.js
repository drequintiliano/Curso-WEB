const moduloA = require('./moduloA') //caminho relativo, para poder ter acesso e tornar visivel os as coisas do modulo
const moduloB = require('./moduloB')

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB)