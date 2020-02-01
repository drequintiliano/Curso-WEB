// ES8: Object.values/Object.entries - vai me dar a chave e o valor, uma array com varios arrays que são chave e valor
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));
console.log(Object.entries(obj));

// melhorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola());

// class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}

console.log(new Cachorro().falar());