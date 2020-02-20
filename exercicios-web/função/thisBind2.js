function Pessoa() {
    this.idade = 0

    const self = this //criar uma constante para lidar com o problema do this
        //ela dispara uma outra função apartir do determinado intervalo que vc passou
    setInterval(function() {
            self.idade++
                console.log(self.idade);

        } /*.bind(this)*/ , 1000) // a cada x milisegundos vai ser repetida a função, a cada 1 s = 1000
}

new Pessoa