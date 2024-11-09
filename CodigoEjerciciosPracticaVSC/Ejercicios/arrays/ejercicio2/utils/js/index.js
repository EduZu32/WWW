let array = [];
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100) + 1);
}
//Mostrar los numeros pares
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log(`Numeros pares son: ${array[i]}`);
  }
}
//Mostrar array
console.log(array);

// Mostrar el número máximo
let max = Math.max(...array);
console.log(`Número máximo: ${max}`);

// Mostrar el número mínimo
let min = Math.min(...array);
console.log(`Número minimo: ${min}`);

// Mostrar la media
let sum = array.reduce((acc, num) => acc + num, 0);
let average = sum / array.length;
console.log(`Media ${average}`);
