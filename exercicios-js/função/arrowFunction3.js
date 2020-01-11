let comparaComThis = function(param) {
    console.log(this === param);

}

comparaComThis(global) //escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//cada arquivo do node representa um modulo
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

//bind dentro de uma funçãoo arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //não vai apontas com o objeto que vc tentou mudar
comparaComThisArrow(module.exports)

//this numa função arrow é um this associado ao contexto no qual a função foi escrita