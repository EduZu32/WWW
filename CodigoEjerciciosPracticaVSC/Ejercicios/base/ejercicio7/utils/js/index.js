async function calcular() {
  // Función que realiza las operaciones aritméticas básicas
  let numero1 = prompt("Introduce el primer número:"); // Se pide al usuario que introduzca el primer número
  let numero2 = prompt("Introduce el segundo número:"); // Se pide al usuario que introduzca el segundo número

  numero1 = parseFloat(numero1); // Se convierte el primer número a un número decimal
  numero2 = parseFloat(numero2); // Se convierte el segundo número a un número decimal

  if (isNaN(numero1) || isNaN(numero2)) {
    // Se comprueba si alguno de los valores introducidos no es un número
    alert("Alguno de los valores introducidos no es un número"); // Se muestra un mensaje de error
  } else {
  }

  let repetir = confirm("¿Quieres realizar los caculos? (si/no)"); // Se pregunta al usuario si quiere repetir la operación
  if (repetir == true) {
    console.log("Suma: " + (numero1 + numero2));
    await delay(2000);
    console.log("Resta: " + (numero1 - numero2));
    await delay(2000);
    console.log("Multiplicación: " + numero1 * numero2);
    await delay(2000);
    console.log("División: " + numero1 / numero2); // Se muestra la división de los dos números
  } else {
    // Si el usuario no quiere repetir la operación
    console.log("Hasta luego"); // Se muestra un mensaje de despedida
  }
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
calcular(); // Se llama a la función calcular para que se ejecute

