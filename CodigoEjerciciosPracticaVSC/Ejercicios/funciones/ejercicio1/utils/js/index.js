let numero1 = prompt("Introduce el primer número"); // Se pide al usuario que introduzca un número
let numero2 = prompt("Introduce el segundo número"); // Se pide al usuario que introduzca un número
//Mostar mediante funciones en una alerta el resultado de todas las operaciones de los dos números

if(isNaN(numero1) || isNaN(numero2)){
  alert
}
alert(`La suma de ${numero1} y ${numero2} es ${suma(numero1, numero2)}`);
alert(`La resta de ${numero1} y ${numero2} es ${resta(numero1, numero2)}`);
alert(
  `La multiplicación de ${numero1} y ${numero2} es ${multiplicacion(
    numero1,
    numero2
  )}`
);
alert(
  `La división de ${numero1} y ${numero2} es ${division(numero1, numero2)}`
);
// Función que suma dos números
function suma(numero1, numero2) {
  return parseInt(numero1) + parseInt(numero2);
}
// Función que resta dos números
function resta(numero1, numero2) {
  return parseInt(numero1) - parseInt(numero2);
}
// Función que multiplica dos números
function multiplicacion(numero1, numero2) {
  return parseInt(numero1) * parseInt(numero2);
}
// Función que divide dos números
function division(numero1, numero2) {
  return parseInt(numero1) / parseInt(numero2);
}
