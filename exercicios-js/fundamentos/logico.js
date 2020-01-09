function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //se o primeiro for verdadeiro não olha pro segundo
    const comprarTv50 = trabalho1 && trabalho2 //operadores do tipo circuito
        //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwaise xor
    const comprarTv32 = trabalho1 != trabalho2 //ou exclusivo
    const manterSaudavel = !comprarSorvete //operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));