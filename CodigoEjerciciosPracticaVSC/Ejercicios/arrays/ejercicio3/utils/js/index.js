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

  const eges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
  //ordenar el array y obtner el valor minimo y maximo
  const min = Math.min(...eges); //Math.min() devuelve el menor de los números pasados como argumentos
  const max = Math.max(...eges); //Math.max() devuelve el mayor de los números pasados como argumentos
  console.log(`Edad minima: ${min}`); // Edad minima: 19
  console.log(`Edad maxima: ${max}`); // Edad maxima: 26
  //la media de edad
  const media = eges.reduce((acc, edad) => acc + edad, 0) / eges.length; //reduce recorre el array y va sumando los valores de edad y al final divide por la cantidad de elementos
  console.log(`La media de edad es: ${media}`);
} //la media de edad es: 22.7
