const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//node por padrão faz casting

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);