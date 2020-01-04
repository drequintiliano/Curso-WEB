let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo); // saber se o valor numerico 1 é verdadeiro ou falso
console.log(!isAtivo);
console.log(!true);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]); //array
console.log(!!{}); //objeto literal
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // se o valor 'true' é verdadeiro retorna true

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); //vai olhar o que foi atribuido a variavel

console.log('finalizar...');
console.log(!!('' || null || 0 || ' '));

let nome = ''
console.log(nome || 'Desconhecido'); //valor padrão de uma determinada variavel

let nomeA = 'Andre'
console.log(nomeA || 'Desconhecido'); //caso nomeA não esteja valido, use 'Desconhecido' como padrão