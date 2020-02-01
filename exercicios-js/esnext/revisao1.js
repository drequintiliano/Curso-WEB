// let const
{
    var a = 2
    let b = 3
    console.log(b); //let só é possiel acessar dentro do escopo do bloco

}
console.log(a); //var é global pode ser acessado ora do escopo do bloco

// Template String - delimitar um string com crase, pode colocar variaves com '$' / backtick para interpolar a variavel
const produto = 'iPad'
console.log(`${produto} é caro!`);

// operador Destructuring - tirar um objeto de dentro de um array, objeto, string
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y);

const { idade: i, nome } = { nome: 'ana', idade: 9 }
console.log(i, nome);