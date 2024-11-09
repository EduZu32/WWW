let tablero = ""; // Variable para almacenar el tablero
let size = 8; // Tamaño del tablero

for (let i = 0; i < size; i++) {
  // Bucle para recorrer las filas
  for (let j = 0; j < size; j++) {
    // Bucle para recorrer las columnas
    if ((i + j) % 2 == 0) {
      // Si la suma de i + j es par
      tablero += " "; // Espacio en blanco
    } else {
      tablero += "#"; // Carácter #
    }
  }
  tablero += "\n"; // Salto de línea al final de cada fila
}
console.log(tablero); // Mostrar tablero en consola
