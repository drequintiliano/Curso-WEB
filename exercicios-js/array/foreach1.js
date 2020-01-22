const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indice, array) { //recebe o nome, indice e o array
    console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome));

//armazenar uma função numa variavel e passar essa variavel pelo foreach
const exibirAprovados = aprovados => console.log((aprovados));
aprovados.forEach(exibirAprovados)