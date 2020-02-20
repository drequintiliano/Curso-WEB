function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo public
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico - this torna algo possivel de ser acessado de fora do escopo
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro // sem passar paranteses ja esta usando os parametros definido
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);