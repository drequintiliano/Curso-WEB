const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break //desvio de fluxo para fora do laço corrente que ele age por cima, no caso o for
    }
    console.log(`${x} = ${nums[x]}`);

}

for (let y in nums) {
    if (y == nums) {
        continue // interrompe a repetição corrente e vai para a proxima repetição
    }
    console.log(`${y} = ${nums[y]}`);

}

externo: for (a in nums) { //não use rotulos
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);

    }
}

console.log('Fim !');