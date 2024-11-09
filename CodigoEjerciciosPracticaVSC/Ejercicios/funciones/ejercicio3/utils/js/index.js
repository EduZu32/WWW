let numero1 = prompt("Introduce el primer número (2 digitos): ");
let numero2 = prompt("Introduce el segundo número (2 digitos): ");

try {
  // Comprobamos que los números introducidos son de 2 dígitos
  if (numero1.length != 2 || numero2.length != 2) {
    throw new Error(
      "Los números introducidos deben tener 2 dígitos para realizar las operaciones"
    );
  } else {
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
        (numero2 == 0
          ? "no se puede dividir por 0"
          : division(numero1, numero2))
    );
  }
} catch (error) {
  alert(error);
}

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
