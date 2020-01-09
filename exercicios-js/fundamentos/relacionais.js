console.log('01)', '1' == 1); //comparando valor e não tipo
console.log('02)', '1' === 1); //estritamente iguais, tipoos iguais tambem
console.log('03)', '3' != 3)
console.log('04)', '1' !== 1)

console.log('05)', 3 < 1)
console.log('06)', 3 > 1)
console.log('07)', 3 <= 1)
console.log('08)', 3 >= 1)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2); //ele esta comparando endereço de memoria, vai dar false
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime()); //comparando number, estritamente iguais
console.log('12)', undefined == null);
console.log('12)', undefined === null);