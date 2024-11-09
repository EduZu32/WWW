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
const barajaBarajada = _.shuffle(baraja);

// Mostrar la barajaBarajadas
console.log(barajaBarajada);

//Mostar la baraja ordenada
console.log(baraja);
//sacar una carta de la baraja barajada y mostrarla sin repetir por consola cada 5 segundos de la sigueinte forma:
/* Carta KC
Valor: 13
Palo: C
 */
// Funcion para sacar y mostrar una carta
let intervalId = setInterval(() => { 
  //si hay cartas restantes en la baraja
  if (barajaBarajada.length > 0) { //si hay cartas restantes en la baraja
    const carta = barajaBarajada.shift(); //saca la primera carta de la baraja barajada
    //Extraer el valor y el palo de la carta
    let valor = carta.substring(0, carta.length - 1); //Obtiene el valor de la carta(ej: 10, J, Q, K)
    const palo = carta.charAt(carta.length - 1); //Obtiene el palo de la carta (ej: C, D, R, P)

    //Asignar los valores de las figuras especiales
    if (valor === "J") valor = 11; // Jack es 11
    if (valor === "Q") valor = 12; // Queen es 12
    if (valor === "K") valor = 13; // King es 13

    //Mostrar la carta y el valor en la consola
    console.log(`Carta ${carta}`); //Muestra la carta
    console.log(`Valor: ${valor}`); //Muestra el valor
    console.log(`Palo: ${palo}`); //Muestra el palo
    console.log("\n"); //Salto de linea
  } else {
    clearInterval(intervalId); //Detiene el intervalo si no hay cartas restantes
    console.log("No hay cartas restantes");
  }
}, 5000); //Cada 5 segundos
