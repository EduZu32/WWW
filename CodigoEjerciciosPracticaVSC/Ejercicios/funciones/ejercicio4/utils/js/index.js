let baraja = []; // Crear un array vacío para la baraja

// Definir los palos
const palos = ["Corazones", "Diamantes", "Treboles", "Picas"]; // Corazones, Diamantes, Treboles, Picas

// Rellenar el array con un FOR I con las cartas del 1 (Ace) al 13 (King) para cada palo
for (let i = 1; i <= 13; i++) {
  // Iterar desde 1 hasta 13
  for (let palo of palos) {
    // Iterar sobre los palos
    let valor = i; // El valor de la carta es el número de la iteración
    let nombreValor = `${valor}`; // Inicialmente, el nombre es el valor numérico

    // Asignamos nombres a las cartas especiales
    if (i === 11) {
      // Si el valor es 11
      valor = 11; // Asignar el valor 11
      nombreValor = "Jack"; // Asignar el nombre Jack
    }
    if (i === 12) {
      valor = 12;
      nombreValor = "Queen"; // Queen
    }
    if (i === 13) {
      valor = 13;
      nombreValor = "King"; // King
    }
    if (i === 1) {
      valor = 1;
      nombreValor = "Ace"; // Ace
    }

    // Agregar la carta al array con el nombre completo
    baraja.push({ nombre: nombreValor, valor: valor, palo: palo }); // Agregar un objeto con el nombre, valor y palo de la carta
  }
}

// Barajar las cartas usando el algoritmo de Fisher-Yates
let barajaBarajada = baraja.slice(); // Hacer una copia de la baraja
for (let i = barajaBarajada.length - 1; i > 0; i--) {
  // Iterar desde la última carta hasta la primera
  const j = Math.floor(Math.random() * (i + 1)); // Elegir una carta aleatoria
  [barajaBarajada[i], barajaBarajada[j]] = [
    // Intercambiar las cartas
    barajaBarajada[j], // Carta en la posición j
    barajaBarajada[i], // Carta en la posición i
  ]; // Intercambiar cartas
}

// Función para sacar una carta
function sacarCarta() {
  // Función para sacar una carta de la baraja barajada
  if (barajaBarajada.length > 0) {
    // Si hay cartas restantes en la baraja barajada
    const carta = barajaBarajada.shift(); // Saca la primera carta de la baraja barajada
    obtenerInformacion(carta); // Llama a obtenerInformacion con la carta sacada
  } else {
    // Si no hay cartas restantes
    console.log("No hay cartas restantes"); // Muestra un mensaje
  }
}

// Función para obtener información de una carta
function obtenerInformacion(carta) {
  // Mostrar la carta, el valor y el palo en la consola
  console.log(`Carta: ${carta.nombre} de ${carta.palo}`);
  console.log(`Valor: ${carta.valor}`);
  console.log(`Palo: ${carta.palo}`);
  console.log("\n"); // Salto de línea
}

// Mostrar la baraja barajada
console.log(barajaBarajada); // Mostrar la baraja barajada

// Mostrar la baraja ordenada
console.log(baraja); // Mostrar la baraja ordenada

// Llamar a la función sacarCarta cada 5 segundos
let intervalId = setInterval(() => {
  // Si hay cartas restantes en la baraja barajada
  if (barajaBarajada.length > 0) {
    sacarCarta(); // Llamar a la función sacarCarta
  } else {
    clearInterval(intervalId); // Detiene el intervalo si no hay cartas restantes
    console.log("No hay cartas restantes"); // Muestra un mensaje si no hay cartas restantes
  }
}, 5000); // Cada 5 segundos
