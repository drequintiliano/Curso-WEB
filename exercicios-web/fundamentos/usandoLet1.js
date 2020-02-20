var numero = 1

{
    let numero = 2
    console.log('dentro = ', numero); //ele procura primeiro uma variavel 'let' dentro do escopo interno, se não tiver busca num escopo mais abrangente/fora
}

console.log('fora =', numero);

// vairavel var - tem escopo global e de função
// varivael let - tem escobo gloabl, de função e de bloco - bloco diferença primordial