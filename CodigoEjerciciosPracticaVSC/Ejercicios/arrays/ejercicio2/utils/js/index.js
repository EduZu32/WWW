/* 1. Piramide

Escriba un script que pedido por consola (prompt un número), represente por consola la siguiente figura con el número de filas introducido en el prompt.
En el caso de no introducir un número o que sea menor que 0 saltará un aviso por consola y dará la posibilidad de repetir el proceso:
+
++
+++
++++
+++++
++++++
+++++++
Cuantas filas quieres que aparezca: 7 */

let filas = prompt("Cuantas filas quieres que aparezca: ");
if (isNaN(filas)) {
  alert("El valor introducido no es un número");
} else if (filas < 0) {
  alert("El número introducido es menor que 0");
} else {
  for (let i = 0; i < filas; i++) {
    let linea = "";
    for (let j = 0; j <= i; j++) {
      linea += "+";
    }
    console.log(linea);
  }
}

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
