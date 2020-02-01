// um conjunto não indexado que não aceita repetição
const times = new Set()
times.add('vasco')
times.add('corinthians').add('palmeiras').add('sao paulo')
times.add('flamengo')
times.add('vasco')

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('flamengo')
console.log(times.has('flamengo'));

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);