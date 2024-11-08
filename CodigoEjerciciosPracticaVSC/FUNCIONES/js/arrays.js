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
/* equipos[4] = "Granada";
equipos[12] = "Celta";
console.log(equipos[4]);
console.log(equipos[5]); */
console.log(equipos);
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
equipos.forEach((element, i) => {
    if (i % 2 == 0) { //sacar solo los pares filtrando por el indice
        console.log(element);
    }
});
