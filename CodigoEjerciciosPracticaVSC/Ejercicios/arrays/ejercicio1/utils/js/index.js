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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de 10 elementos

//WILE
/* let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++; //Shift elimina el primer elemento del array
} */

//FOR
/*  for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}  */

//FOREACH
/* array.forEach(function (array) {
  console.log(array);
}); */

//Mustras todos los elementos del array y sumarle 1 a cada uno
/*  array.forEach((element) => {
  console.log(element + 1);
}); */

//Cacula la media de todos los elementos del array
/* if (array.length > 0) {
  let suma = 0;
  array.forEach((element) => {
    suma += element;
  });
  console.log(suma / array.length);
} */
