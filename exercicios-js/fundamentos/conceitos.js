const a = { name: 'Teste' } // a constante 'a' aponta para o endereço no qual este objeto está localizado
const b = a //'b' recebe o mesmo endereço de memória que a variavel 'a' aponta - é uma atribuição por referencia
b.name = 'Opa' //'b' tem a referencia do objeto assim como 'a', os dois apontam pelo mesmo local da memória

console.log(a);


let c = 3 //'3' é um tipo primitivo da variavel
let d = c //tipos primitivos é feita uma copia por valor
d++

console.log(d);
console.log(c);