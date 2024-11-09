const eges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//ordenar el array y obtner el valor minimo y maximo
eges.sort((a, b) => a - b); //sort() ordena los elementos de un array localmente y devuelve el array ordenado.
console.log(eges); // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
const min = Math.min(...eges); //Math.min() devuelve el menor de los números pasados como argumentos
const max = Math.max(...eges); //Math.max() devuelve el mayor de los números pasados como argumentos
console.log(`Edad minima: ${min}`); // Edad minima: 19
console.log(`Edad maxima: ${max}`); // Edad maxima: 26
//la media de edad
const media = eges.reduce((acc, edad) => acc + edad, 0) / eges.length; //reduce recorre el array y va sumando los valores de edad y al final divide por la cantidad de elementos
console.log(`La media de edad es: ${media}`); //la media de edad es: 22.7
