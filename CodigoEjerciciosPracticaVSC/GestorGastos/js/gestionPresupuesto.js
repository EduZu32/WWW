//Variables globales
//Crea una variable global en el fichero, con el nobre presupuesto y valor inicial 0.
let presupuesto = 0; // Funciones globales

// TODO: Funciones adicionales
//funccion de un parametro que se encarna de actualizar la variable global presupuesto. Esta funcion comprobara que el valor pasado como parametro sea mayor o igual a 0 NO Negativo.
//En caso de ser correcto, actualiza el valor de la variable global presupuesto con el valor pasado como parametro y devuelve el valor de la variable global presupuesto.
//En caso de ser incorrecto, devuelve -1.
function actualizarPresupuesto(pres) {
  if (pres >= 0) {
    presupuesto = pres;
    return pres;
  } else {
    return -1;
  }
}
//funcion sin parametros que devuelve un string con el texto: Tu presupuesto actual es de X €, donde X es el valor de la variable global presupuesto.
function mostrarPresupuesto() {
  return `Tu presupuesto actual es de ${presupuesto} €`;
  // TODO
}
//CrearGasto. FUncion constructora que se encarga de crear un objeto gasto. Esta funcion devolvera un objeto de tipo  gasto. Debera comprobar que el valor introducido sea un numero no negativo;
//En caso contratario, el valor del gasto sera 0.
//Objeto gasto creado por la funcion contructora CrearGasto tendra las sigientes propiedades:
//descripcion: Almacenara el valor del gasto en formato numerico.
//valor: Almacenara el valor del gasto en formato numerico.
//mostrarGasto. Funcion sin parametros, que muestre el texto Gasto correspondiente a DESCRIPCION con valor VALOR €, en el que VALOR y DESCRIPCION son propriedades del objeto correspondientes.
//actualizarDescripcion. Funcion con un parametro que actualiza la propiedad descripcion del objeto gasto.
//actualizarValor. Funcion con un parametro que actualiza la propiedad valor del objeto gasto. Comprobara que el valor pasado como parametro sea un numero no negativo. En caso contrario, no actualizara el valor.

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
  // Métodos
  this.mostrarGasto = function () {
    return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
  };

  this.actualizarDescripcion = function (desc) {
    this.descripcion = desc;
  };
  this.actualizarValor = function (valor) {
    this.valor = valor >= 0 ? valor : this.valor;
  };
  // Propiedades
  this.descripcion = descripcion;
  this.valor = valor >= 0 ? valor : 0;
}

// Exportación de funciones
export { mostrarPresupuesto, actualizarPresupuesto, CrearGasto };
