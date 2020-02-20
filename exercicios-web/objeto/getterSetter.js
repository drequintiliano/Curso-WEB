const sequencia = {
    _valor: 1, // convenção, preferida ser acessa internamente
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor //aplica algum tipo de validação
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor);