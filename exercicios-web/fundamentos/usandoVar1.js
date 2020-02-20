{
    {
        {
            {
                var sera = 'Será???' //a variavel 'var' mesmo dentro de um bloco que não é uma função estara visivel
            }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123
}

teste()
console.log(local); //quando defini a varial dentro da função ela esta visivel apenas dentro desse escopo da função