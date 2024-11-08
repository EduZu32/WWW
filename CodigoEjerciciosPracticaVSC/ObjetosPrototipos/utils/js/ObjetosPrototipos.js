//Enemigo
let Enemigo = {
  energia: "Energia" + " " + 10,
  mover: function () {
    console.log("Me muevo.");
  },
};
//Orco
let Orco = Object.create(Enemigo); // Enlace vía prototipo
Orco.fuerza = "Fuerza" + " " + 15;
Orco.disparar = function () {
  console.log("Disparo co mi poderoso arco.");
};
//Troll
let Troll = Object.create(Enemigo); // Enlace vía prototipo
Troll.fuerza = "Fuerza" + " " + 20;
Troll.golpear = function () {
  console.log("Golpeo con toda mi fuerza.");
};

//Crear un enemigo
let enemigo1 = Object.create(Enemigo);
console.log(enemigo1.energia); //10
enemigo1.mover(); //Me muevo.

//Crear un orco
let orco1 = Object.create(Orco);
console.log(orco1.energia); //10
console.log(orco1.fuerza); //15
orco1.mover(); // Me muevo.
orco1.disparar(); // Disparo con mi poderoso arco.

//Crear un troll
let troll1 = Object.create(Troll);
console.log(troll1.energia); //10
console.log(troll1.fuerza); //20
troll1.mover(); // Me muevo.
troll1.golpear(); // Golpeo con toda mi fuerza.
