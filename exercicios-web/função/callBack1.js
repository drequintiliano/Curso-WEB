const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);

}

fabricantes.forEach(imprimir) //vai chamar essa função 'para cada' elemento que ele encontrar
fabricantes.forEach(function(a) {
    console.log(a);

})

fabricantes.forEach(a => console.log(a))

//para cada elemento encontrado é um evento chamado, passa a função ele chama de volta