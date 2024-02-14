// Definir los precios de los productos
const precios = {
  A: 270,
  B: 340,
  C: 390
};

// Función para solicitar al usuario que elija un producto
function elegirProducto() {
  const producto = prompt("Elija un producto (A, B, C):");
  const precioProducto = precios[producto];
  ingresarMonedas(precioProducto);
}

// Función para solicitar al usuario que ingrese las monedas
function ingresarMonedas(precio) {
  let montoIngresado = 0;
  while (montoIngresado < precio) {
    const moneda = parseInt(prompt("Ingrese una moneda (10, 50, 100):"));

    // Verificar si la moneda ingresada es válida
    if (moneda !== 10 && moneda !== 50 && moneda !== 100) {
      alert("Moneda inválida. Por favor, ingrese 10, 50 o 100.");
    } else {
      montoIngresado += moneda;
    }
  }

  // Calcular el vuelto
  let vuelto = montoIngresado - precio;

  // Entregar el vuelto
  let mensajeVuelto = "Su vuelto:\n";
  while (vuelto > 0) {
    if (vuelto >= 100) {
      mensajeVuelto += "100\n";
      vuelto -= 100;
    } else if (vuelto >= 50) {
      mensajeVuelto += "50\n";
      vuelto -= 50;
    } else {
      mensajeVuelto += "10\n";
      vuelto -= 10;
    }
  }
  alert(mensajeVuelto);
}

// Programa principal
elegirProducto();