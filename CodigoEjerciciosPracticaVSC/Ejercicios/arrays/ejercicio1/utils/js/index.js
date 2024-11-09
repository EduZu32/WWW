const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de 10 elementos

//WHILE
/*  let i = 0; //Inicializamos la variable i
while (i < array.length) {  //Mientras i sea menor que la longitud del array
  console.log(array[i]);  //Mostramos el elemento del array en la posición i
  i++; //Incrementamos i
} */

//FOR
/*  for (let i = 0; i < array.length; i++) { //Inicializamos i a 0, mientras i sea menor que la longitud del array, incrementamos i
  const element = array[i]; //Guardamos en la variable element el elemento del array en la posición i
  console.log(element); //Mostramos el elemento
}  */

//FOREACH
/* array.forEach(function (array) { //Recorremos el array
  console.log(array); //Mostramos el elemento
}); */

//Mustras todos los elementos del array y sumarle 1 a cada uno
/*  array.forEach((element) => { //Recorremos el array
  console.log(element + 1); //Mostramos el elemento + 1
}); */

//Cacula la media de todos los elementos del array
/* if (array.length > 0) { //Si la longitud del array es mayor que 0
  let suma = 0; //Inicializamos la variable suma a 0
  array.forEach((element) => { //Recorremos el array y guardamos el elemento en la variable element 
    suma += element; //Sumamos el elemento a la variable suma
  });
  console.log(suma / array.length); //Mostramos la media
} */
