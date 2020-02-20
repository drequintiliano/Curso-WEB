const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10
console.log(valores);
console.log(valores.length); //quantidade de elementos no array

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores);

//array de tipos de dados homogeneos, codigo mais organizado

console.log(valores.pop()); //metodo para tirar um atributo de dentro do objeto
delete valores[0]
console.log(valores);

console.log(typeof valores);