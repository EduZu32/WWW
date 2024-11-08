function calcular() {
  // Función que realiza las operaciones aritméticas básicas
  let numero1 = prompt("Introduce el primer número:"); // Se pide al usuario que introduzca el primer número
  let numero2 = prompt("Introduce el segundo número:"); // Se pide al usuario que introduzca el segundo número

  numero1 = parseFloat(numero1); // Se convierte el primer número a un número decimal
  numero2 = parseFloat(numero2); // Se convierte el segundo número a un número decimal

  if (isNaN(numero1) || isNaN(numero2)) {
    // Se comprueba si alguno de los valores introducidos no es un número
    console.log("Alguno de los valores introducidos no es un número"); // Se muestra un mensaje de error
  } else {
    // Si ambos valores son números
    console.log(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`); // Se muestra la suma de los dos números
    console.log(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2}`); // Se muestra la resta de los dos números
    console.log(
      `La multiplicación de ${numero1} y ${numero2} es ${numero1 * numero2}`
    ); // Se muestra la multiplicación de los dos números
    console.log(
      `La división de ${numero1} y ${numero2} es ${numero1 / numero2}`
    ); // Se muestra la división de los dos números
    console.log(`El módulo de ${numero1} y ${numero2} es ${numero1 % numero2}`);
  } // Se muestra el módulo de los dos números

  let repetir = confirm("¿Quieres introducir otros números? (si/no)"); // Se pregunta al usuario si quiere repetir la operación
  if (repetir == true) {
    // Si el usuario quiere repetir la operación
    calcular(); // Se vuelve a llamar a la función calcular
  } else {
    // Si el usuario no quiere repetir la operación
    console.log("Hasta luego"); // Se muestra un mensaje de despedida
  }
}
calcular(); // Se llama a la función calcular para que se ejecute
