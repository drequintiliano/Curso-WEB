function teste1(num) {
    if (num > 7)
        console.log(num); // só essa esta associada a sua sentença
    console.log('Final');
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // não usar o ';' com as estruturas de controle
        console.log(num);
    }
}

teste2(6)
teste2(8)