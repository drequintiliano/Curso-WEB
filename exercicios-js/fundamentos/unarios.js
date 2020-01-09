let num1 = 1
let num2 = 2

num1++ //forma posfixada
console.log(num1);

--num1 //forma prefixada
console.log(num1);

console.log(++num1 === num2--); //só é decrementado depois de comparar
console.log(num1 === num2);