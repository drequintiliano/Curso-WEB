const escola = "cod3r"

console.log(escola.charAt(4)); //retorna r
console.log(escola.charAt(5)); //valor vazio
console.log(escola.charCodeAt(3)); // retorna o codigo da tabela ASCI - unicode = 51
console.log(escola.indexOf('3')); // indice associado ao digito 3

console.log(escola.substring(1)); //printa a paritr do indice 1
console.log(escola.substring(0, 3)); //3 primeiros caracteres

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!"); // concatena da mesma forma
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e')); // regex - substitua todo digito pela letra 'e'
console.log(escola.replace(/\w/g, 'e')); // regex - substitua toda letra e digito pela letra 'e' 

console.log('Ana,Maria,Pedro'.split(','));