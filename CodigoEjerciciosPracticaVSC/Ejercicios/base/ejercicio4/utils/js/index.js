let dia = prompt("Introduce el dia de tu cumpleaños (1-31):");
let mes = prompt("Introduce el mes de tu cumpleaños (1-12):");
let año = prompt("Introduce el año de tu cumpleaños (ej. 2000):");

let fechaCumpleaños = new Date(año, mes - 1, dia); // Se resta 1 al mes porque en JavaScript los meses empiezan en 0

// Se obtiene la fecha actual
let fechaActual = new Date();

// Se calcula la diferencia en milisegundos
let diferencia = fechaActual - fechaCumpleaños;

// Se convierte la diferencia en días
let diasPasados = Math.floor(diferencia / (1000 * 60 * 60 * 24)); //math.floor redondea hacia abajo

// Se muestra el resultado

alert(`Han pasado ${diasPasados} días desde tu cumpleaños`);
alert(`¡Han pasado ${diasPasados} días desde que naciste!`);
