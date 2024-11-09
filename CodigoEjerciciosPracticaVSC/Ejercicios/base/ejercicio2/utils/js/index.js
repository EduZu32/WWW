for (let i = 1; i <= 100; i++) {
  // Bucle que recorre los números del 1 al 100
  // Bucle que recorre los números del 1 al 100
  let output = ""; // Variable que almacenará el resultado de la división
  if (i % 3 === 0) output += "Fizz"; // Si el número es divisible por 3, se imprime "Fizz"
  if (i % 5 === 0) output += "Buzz"; // Si el número es divisible por 5, se imprime "Buzz"
  console.log(output || i); // Si el número no es divisible por 3 ni por 5, se imprime el número
}
