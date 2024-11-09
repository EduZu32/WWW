const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de 10 elementos

//WILE
/* let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++; //Shift elimina el primer elemento del array
} */

//FOR
/*  for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}  */

//FOREACH
/* array.forEach(function (array) {
  console.log(array);
}); */

//Mustras todos los elementos del array y sumarle 1 a cada uno
/*  array.forEach((element) => {
  console.log(element + 1);
}); */

//Cacula la media de todos los elementos del array
/* if (array.length > 0) {
  let suma = 0;
  array.forEach((element) => {
    suma += element;
  });
  console.log(suma / array.length);
} */
