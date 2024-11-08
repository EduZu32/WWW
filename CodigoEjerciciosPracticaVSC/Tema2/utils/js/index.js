let x = prompt("Introduce un número");
let y = prompt("Introduce otro número");

//Conversion a numeros ya que prompt devuelve un string
//El operado '+' con cadenas de texto las concatena y con numeros las suma
x = Number(x);
y = Number(y);

//Operaciones Suma
let z = x + y;

// La manera mas facil de componer un texto multilinea es con cadenas de acento grave.
// Ademas podemos insertar variables con la sintaxis ${variable}
let mensaje = `La resultado de sumar ${x} y ${y} es ${z}`;
alert(mensaje); //Muestra un mensaje emergente con el resultado
console.log(mensaje); //Muestra el mensaje en la consola del navegador
console.log();