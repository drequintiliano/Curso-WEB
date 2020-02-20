let valor //não inicializada
console.log(valor); //valor retornado é undefined por padrão
//console.log(valor2); - valor não foi declarado

valor = null //null significa que não esta aponta para nenhum endereço de memória, ausencia de valor
console.log(valor);

//quando quiser zerar uma variavel do tipo referencia, atribuir o valor 'null' que não aponta para nada
//console.log(valor.toString()); - gera um problema to tipo typeError: voce não pode acessar uma propriedade com valor nulo
//sempre ter uma valor padrão associado a variavel

const produto = {}
console.log(produto.preco); //'preco' não esta definido
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco - se quiser tirar o atributo
console.log(produto);

produto.preco = null //sem preço
console.log(!!produto.preco); // se 'produto.preco' esta setado retorna false
console.log(produto);

//atribuição por valor, faz uma copia do valor da variavel e cada variavel tem seu valor independente
//atribuição por referencia, as duas constantes ou variaveis passam a apontar para o mesmo lugar/endereço de memória
//atribuir o 'null' para a variavel apontar para nada