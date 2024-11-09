let numero1 = prompt("Introduce el primer número"); // Se pide al usuario que introduzca un número
let numero2 = prompt("Introduce el segundo número"); // Se pide al usuario que introduzca un número por defecto 0
//Mostar mediante funciones en una alerta el resultado de todas las operaciones de los dos números y mostrar el resultado en una alerta con el siguiente formato:
// si el usuario introduce 4 y 0 se mostrará:
// Suma: 4
// Resta: 4
// Multiplicación: 0
// División: no se puede dividir por 0

alert(
  "Suma: " +
    suma(numero1, numero2) +
    "\n" +
    "Resta: " +
    resta(numero1, numero2) +
    "\n" +
    "Multiplicación: " +
    multiplicacion(numero1, numero2) +
    "\n" +
    "División: " +
    (numero2 == 0 ? "no se puede dividir por 0" : division(numero1, numero2))
);

// Función que suma dos números
function suma(numero1, numero2) {
  numero2 = numero2 || 0;
  return parseInt(numero1) + parseInt(numero2);
}
// Función que resta dos números
function resta(numero1, numero2) {
  numero2 = numero2 || 0;
  return parseInt(numero1) - parseInt(numero2);
}
// Función que multiplica dos números
function multiplicacion(numero1, numero2) {
  numero2 = numero2 || 0;
  return parseInt(numero1) * parseInt(numero2);
}
// Función que divide dos números
function division(numero1, numero2) {
  numero2 = numero2 || 0;
  return parseInt(numero1) / parseInt(numero2);
}
