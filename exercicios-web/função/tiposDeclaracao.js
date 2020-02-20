console.log(soma(3, 4)); //ja tem acesso as funções declarations
//console.log(sub(3, 4)); -- só pode chamar a função após ela ter sido declarada expression e named function expression

//function declaration -- forma mais comum
function soma(x, y) {
    return x + y
}

//function expression -- forma mais comum
const sub = function(x, y) {
    return x - y
}

//named function expression -- uso reduzido
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4));