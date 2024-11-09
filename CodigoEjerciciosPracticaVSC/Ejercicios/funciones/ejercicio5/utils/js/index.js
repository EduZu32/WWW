// Solicitar los datos al usuario
let valorCasa = parseFloat(prompt("Introduce el valor de la casa (€):"));
let dineroPedido = parseFloat(
  prompt("Introduce el dinero pedido al banco (€):")
);
let años = parseInt(prompt("Introduce el número de años a pagar:"));
let intereses =
  parseFloat(prompt("Introduce los intereses anuales (%):")) / 100;

// Validación de los datos introducidos
if (
  isNaN(valorCasa) ||
  isNaN(dineroPedido) ||
  isNaN(años) ||
  isNaN(intereses)
) {
  alert("Por favor, introduce valores válidos para todos los campos.");
} else {
  // Cálculo de la cuota mensual
  let n = años * 12; // Número total de meses
  let r = intereses / 12; // Interés mensual

  // Fórmula para calcular la cuota mensual
  let cuotaMensual =
    (dineroPedido * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  // Calcular el total a pagar
  let totalAPagar = cuotaMensual * n;

  // Mostrar el pago mensual y la cantidad total a pagar
  console.log(
    `Vas a pagar una cantidad de ${totalAPagar.toFixed(
      2 
    )}€ ya con intereses en ${n} mensualidades con un importe mensual de ${cuotaMensual.toFixed(
      2 
    )}€` // Redondeamos a 2 decimales
  );

  // Mostrar la tabla de amortización
  let saldoRestante = dineroPedido; // Inicializamos el saldo restante con el dinero pedido

  for (let mes = 1; mes <= n; mes++) {
    // Calcular los intereses del mes (interés sobre el saldo pendiente)
    let interesesMes = saldoRestante * r;

    // Calcular el capital que se paga en el mes
    let capitalMes = cuotaMensual - interesesMes;

    // Restar el capital pagado del saldo restante
    saldoRestante -= capitalMes;

    // Mostrar el pago correspondiente del mes
    console.log(
      `Pago correspondiente al mes ${mes} con una cantidad de ${saldoRestante.toFixed(
        2
      )}€`
    );
  }
}
