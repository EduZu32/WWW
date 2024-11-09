function pedirFrase() {
  let frase = prompt("Introduce una frase con un minimo total de 10 letras: ");

  if (frase.length < 10) {
    alert("La frase introducida no tiene un minimo total de 10 letras");
    pedirFrase();
  } else {
    console.log(`La frase introducida es: ${frase}`);
  }
  let numLetras = frase.replace(/\s/g, "").length;
  let numPalabras = frase.split(" ").length;
  let numFrases = frase
    .split(".")
    .filter((sentence) => sentence.trim().length > 0).length;

  alert(`El dato introducido tiene:
- ${numLetras} letras
- ${numPalabras} palabras
- ${numFrases} frases`);

  let repetir = confirm("¿Quieres introducir otra frase? (si/no)");
  if (repetir == true) {
    pedirFrase();
  } else {
    console.log("Hasta luego");
  }
}

pedirFrase();
