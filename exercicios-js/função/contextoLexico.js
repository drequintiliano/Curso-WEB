const valor = 'Global'

//ela também tem consciencia do local ao qual ela foi definida, não no local de execução mas onde foi definida que ela vai buscar o 'valor'
function minhaFuncao() {
    console.log(valor);

}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec()