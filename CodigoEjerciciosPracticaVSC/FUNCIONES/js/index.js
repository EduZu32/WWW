//PARA VER ESTE FICHERO HAY QUE IR ACRIVAR EL SCRIPT EN EL HTML
let nombre = "Pepe";
let ciudad = "Madrid";
console.log(`Hola mi nombre es ${nombre} y vivo en ${ciudad}`);

//interactuar con el usuario
/* let edad = prompt(`Introduce tu edad`); // guarda un string en la variable edad
parseInt(edad); //convierte el string en un número entero
//para evitar que la respuesta sea un NaN (Not a Number) vamos a poner una condición
if (isNaN(edad)) {
  alert(`No has introducido un número`);
} else {
  alert(`Tu edad es de ${edad} años`); //muestra un mensaje en pantalla
} */

//confirm -> pregunta y responde true o false

/* let continuar = confirm("Estas seguro que quieres continuar?"); //bollean -> pregunta y responde true o false


if (continuar) {
  let edad = prompt(`Introduce tu edad`);
  parseInt(edad);
  if (isNaN(edad)) {
    alert(`No has introducido un número`);
  } else {
    alert(`Tu edad es de ${edad} años`);
  }
} else {
  alert(`No quieres continuar`);
} */
//Libreria SweetAlert
/*   Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below 
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
}); */

//Funciones

//Llamara a la funcion antes de que se ejecute
saludar(nombre);
//console.log(sumar(2, 3));
//parametros posicionales
//console.log(sumar(23));
//console.log(sumar());
console.log("Vas a multiplicar");
multiplicar(2, 3, 4, 5, 6, 7, 8);
//arow function -> funcion flecha-> lambda (se escribe de forma mas corta y se mete dentro del cuerpo de una variable) IMPRTANTE 1º se define la variable y despues se llama
let sumaFelcha = (param1, param2) => {
  console.log(param1 + param2);
};
let restaFelcha = (param1, param2) => {
  console.log(param1 - param2);
};

sumaFelcha(5, 5);
restaFelcha(9, 5);

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
function sumar(param1 = 0, param2) {
  //23 + undefined = NaN por eso le damos un parametro por defecto de 0
  console.log(`Parametro 1 ${param1} Parametro 2 ${param2}`);

  return param1 + param2;
}
//llamar a la funcion despues de que se ejecute
saludar(nombre);
console.log(sumar(2, 3));

function multiplicar(param1, param2) {
  console.log(param1 * param2);
  //agumentos invisibles
  console.log("Numeros de agumnetos " + arguments.length); //numero de argumentos
}
