let array = []; //Array vacio
for (let i = 0; i < 20; i++) { //Bucle para añadir 20 numeros aleatorios
  array.push(Math.floor(Math.random() * 100) + 1); //Añadir numeros aleatorios al array entre 1 y 100
}
//Mostrar los numeros pares
for (let i = 0; i < array.length; i++) { //Bucle para recorrer el array y mostrar los numeros pares
  if (array[i] % 2 == 0) { //Condicion para saber si el numero es par o no
    console.log(`Numeros pares son: ${array[i]}`);
  } 
}
//Mostrar array
console.log(array); //Mostrar el array

// Mostrar el número máximo
let max = Math.max(...array); //Math.max() devuelve el mayor de los números pasados como argumentos
console.log(`Número máximo: ${max}`); //Mostrar el numero maximo

// Mostrar el número mínimo
let min = Math.min(...array); //Math.min() devuelve el menor de los números pasados como argumentos
console.log(`Número minimo: ${min}`); //Mostrar el numero minimo

// Mostrar la media
let sum = array.reduce((acc, num) => acc + num, 0); //reduce recorre el array y va sumando los valores de edad y al final divide por la cantidad de elementos
let average = sum / array.length; //Calcular la media
console.log(`Media ${average}`); //Mostrar la media
