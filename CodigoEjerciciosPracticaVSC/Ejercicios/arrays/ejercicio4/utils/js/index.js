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

const baraja = [];
/* 1C,2C,3C,4C,5C,6C,7C,8C,9C,10C,JC,QC,KC
1D,2D,3D,4D,5D,6D,7D,8D,9D,10D,JD,QD,KD
1R,2R,3R,4R,5R,6R,7R,8R,9R,10R,R,JR,QR,KR
1P,2P,3P,4P,5P,6P,7P,8P,9P,10P,JP,QP,KP */
const palos = ["C", "D", "R", "P"];
const figuras = ["A", "J", "Q", "K"];
// Crear la baraja
for (let i = 1; i <= 13; i++) {
  for (let j = 0; j < 4; j++) {
    // Añadir las figuras especiales a la baraja A, J, Q, K y el resto de cartas
    if (i === 1) {
      baraja.push(`1${palos[j]}`); // As equivalente a 1
    } else if (i === 11) {
      baraja.push(`J${palos[j]}`); // Jack
    } else if (i === 12) {
      baraja.push(`Q${palos[j]}`); // Queen
    } else if (i === 13) {
      baraja.push(`K${palos[j]}`); // King
    } else {
      baraja.push(`${i}${palos[j]}`); // Resto de cartas numericas
    }
  }
}
//Barajar las cartas con la libreria underscore
const barajarBarajada = _.shuffle(baraja);

// Mostrar la barajaBarajadas
console.log(barajarBarajada);

//Mostar la baraja ordenada
console.log(baraja);
