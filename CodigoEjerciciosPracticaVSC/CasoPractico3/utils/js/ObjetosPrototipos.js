//Enemigo
let Enemigo = {
  energia: 10,
  mover: function () {
    console.log("Me muevo.");
  },
};
//Orco
let Orco = Object.create(Enemigo); // Enlace vía prototipo
Orco.fuerza = 15;
Orco.disparar = function () {
  console.log("Disparo co mi poderoso arco.");
};
//Troll
let Troll = Object.create(Enemigo); // Enlace vía prototipo
Troll.fuerza = 20;
Troll.golpear = function () {
  console.log("Golpeo con toda mi fuerza.");
};

//Crear un enemigo
let enemigo1 = Object.create(Enemigo);
console.log(enemigo1.energia); //10
console.log(enemigo1.mover()); //Me muevo.

//Crear un orco
let orco1 = Object.create(Orco);
console.log(orco1.energia); //10
console.log(orco1.fuerza); //15
console.log(orco1.mover()); // Me muevo.
console.log(orco1.disparar()); // Disparo con mi poderoso arco.

//Crear un troll
let troll1 = Object.create(Troll);
console.log(troll1.energia); //10
console.log(troll1.fuerza); //20
console.log(troll1.mover()); // Me muevo.
console.log(troll1.golpear()); // Golpeo con toda mi fuerza.
