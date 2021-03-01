const { deepStrictEqual } = require("assert");
/*

Primeiro exemplo
copia o endereço mas não altera o valor da primeira variavel instanciada
pois os tipos primitivos são armazenados de uma forma diferente das demais variavéis
*/
let counter = 0;
let counter2 = counter;

counter2++;

/*
Segundo exemplo
copia e altera pois a referencia é a mesma 
*/

const item = { counter: 0 };
const item2 = item;

// o tipo primitivo gera uma copia em memoria
deepStrictEqual(counter, 0);
deepStrictEqual(counter2, 1);

// tipo de referência copia o endereço de memoria
// e aponta pro mesmo lugar

item2.counter++;
deepStrictEqual(item, { counter: 1 });

deepStrictEqual(item, { counter: 2 })
