//ARRAY -> Colección de datos
// las variables constantes son mas faciles de trabajar
const equipos = [
  "Barceloa",
  "Real Madrid",
  "Atletico de Madrid",
  "Valencia",
  "Sevilla",
  "Villareal",
  "Betis",
  "Getafe",
  "Real Sociedad",
  "Eibar",
];
console.log(equipos);
/* equipos[4] = "Granada";
equipos[12] = "Celta";
console.log(equipos[4]);
console.log(equipos[5]); */

//Sacar todos lo equipos del array con un FOR
//FOR -> recoorer un array de principio a fin
/* for (let i = 0; i < equipos.length; i++) {
  const equipo = equipos[i];
  console.log(equipos[i]);
} */
//Sacar todos lo equipos del array con un FOR IN
//FOR IN -> recorrer un array de principio a fin y sacar la clave
/* for (const key in equipos) {
  console.log(key); //saca la clave (indice, posicion)
} */
//FOR OF -> recorrer un array de principio a fin y sacar el valor
/* for (const equipo of equipos) {
  console.log(equipo);
} */
//Forach -> es un FUNCION que permite iterar sobre un array --> se aplica a los arrays
//con tres parametros: el valor/elemento, el indice y el array
//Se ejecuta una vez por cada elemento del array
/* equipos.forEach((element, i) => {
    if (i % 2 == 0) { //sacar solo los pares filtrando por el indice
        console.log(element);
    }
}); */
//Añadir elementos
equipos.push("Celta", "Merida"); //añade al final del array
equipos.unshift("Las Palmas"); //añade al principio del array
console.log(equipos.unshift("Levante")); //devuelve la longitud del array y añade al principio del array el o los elementos
//Borrar elementos
equipos.pop(); //borra el ultimo elemento del array y devuelve el elemento borrado
console.log(`Borrado: ${equipos.shift()}`); //borra el primer elemento del array y devuelve el elemento borrado
//Modificar elementos
//find -> devuelve el primer elemento que cumple una condicion
let busqueda = equipos.find((item) => {
  return item.length <= 5; //devuelve el primer equipo que tenga menos de 5 letras
});
console.log(busqueda);

//filter -> devuelve todos los elementos que cumple una condicion
equipos
  .filter((item) => {
    return item.length <= 5; //devuelve todos los equipos que tengan menos de 5 letras
  })
  .forEach((item) => console.log(item)); //recorre el array y muestra los equipos que tienen menos de 5 letras
//console.log(equipos);
