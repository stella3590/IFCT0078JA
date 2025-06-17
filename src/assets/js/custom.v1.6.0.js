// Funciones de conversión
const celsiusAFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitACelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

// Función para mostrar errores
function mostrarError(mensaje) {
  alert(mensaje);
  console.error(mensaje);
}

// Función para verificar si un valor es numérico
function esNumero(valor) {
  return !isNaN(valor) && typeof valor === 'number';
}

// Función principal que gestiona la conversión
function iniciarConversor() {
  const userMeasure = prompt(
    'Para convertir Centígrados a Fahrenheit, ingrese <F>' + '\r\n' +
    'Para convertir Fahrenheit a Centígrados, ingrese <C>'
  );

  if (userMeasure !== 'C' && userMeasure !== 'F') {
    mostrarError(
      `La unidad introducida <${userMeasure}> no es válida.\r\n` +
      'Por favor:\r\n' +
      '  - Ingrese <C> para convertir a grados Centígrados\r\n' +
      '  - Ingrese <F> para convertir a grados Fahrenheit'
    );
    return;
  }

  const tipoEntrada = userMeasure === 'F' ? 'Centígrados' : 'Fahrenheit';
  const userDegree = prompt(`Ingrese los grados ${tipoEntrada} a convertir`);
  const valor = Number(userDegree);

  if (!esNumero(valor)) {
    mostrarError(`El valor introducido <${userDegree}> no es un número válido.`);
    return;
  }

  let resultado;
  let mensaje;

  if (userMeasure === 'C') {
    resultado = fahrenheitACelsius(valor);
    mensaje = `Los grados ${valor} Fahrenheit son ${resultado.toFixed(1)} Centígrados`;
  } else {
    resultado = celsiusAFahrenheit(valor);
    mensaje = `Los grados ${valor} Centígrados son ${resultado.toFixed(1)} Fahrenheit`;
  }

  if (esNumero(resultado)) {
    alert(mensaje);
    console.log(mensaje);
  } else {
    mostrarError('Ha ocurrido un error al hacer la conversión.');
  }
}

// Ejecutar el conversor
iniciarConversor();
