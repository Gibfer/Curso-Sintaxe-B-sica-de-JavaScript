//O que são vetores ou arrays

// como criar um array

/* let array = ['string', 1, true];
console.log(array); */

// pode guardar vários tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
/* console.log(array) */

// console.log(array[0]) = vai mostrar só o primeiro índice


//forEach 
/* array.forEach(function(item, index){console.log(item, index)}); */

//push
/* array.push('novo_item')
console.log(array) */

//pop 
/* array.pop();
console.log(array); */

//shift
/* array.shift();
console.log(array); */

//unshift
/* array.unshift('novo_item_no_Inicio')
console.log(array); */

//indexOf
/* console.log(array.indexOf(true))*/

//splice
/* array.splice(0, 3);
console.log(array); */

//slice
/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

//Exemplos de desestruturação
let object = {string: 'string_exemplo', number: 1, Boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto_interno'}}
console.log(object); 
// console.log(object.Boolean); Vai mostrar "true", que é o valor booleano dentro do objeto. O mesmo vale para string, number, array...

/* var stringInterno = object.string;
console.log(stringInterno); */

/* var arrayInterno = object.array;
console.log(arrayInterno); */

var { string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno)