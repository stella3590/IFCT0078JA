// Funciones de conversión
const celsiusAFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitACelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

function mostrarMensaje(mensaje, tipo = "log") {
  alert(mensaje);
  console[tipo](mensaje);
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
    mostrarMensaje(
      `La unidad introducida <${userMeasure}> no es válida.\r\n` +
      'Por favor:\r\n' +
      '  - Ingrese <C> para convertir a grados Centígrados\r\n' +
      '  - Ingrese <F> para convertir a grados Fahrenheit',
      'error'
    );
    return;
  }

  const tipoEntrada = userMeasure === 'F' ? 'Centígrados' : 'Fahrenheit';
  const userDegree = prompt(`Ingrese los grados ${tipoEntrada} a convertir`);
  const valor = Number(userDegree);

  if (!esNumero(valor)) {
    mostrarMensaje(`El valor introducido <${userDegree}> no es un número válido.`, 'error');
    return;
  }

  let resultado;

  switch (userMeasure) {
    case 'C':
      resultado = fahrenheitACelsius(valor);
      if (esNumero(resultado))
        return mostrarMensaje(`Los ${valor}° Fahrenheit son ${resultado.toFixed(1)}° Centígrados.`);
      else
        return mostrarMensaje('Ha ocurrido un error al hacer la conversión.', 'error');

    case 'F':
      resultado = celsiusAFahrenheit(valor);
      if (esNumero(resultado))
        return mostrarMensaje(`Los ${valor}° Centígrados son ${resultado.toFixed(1)}° Fahrenheit.`);
      else
        return mostrarMensaje('Ha ocurrido un error al hacer la conversión.', 'error');
    default:
      return mostrarMensaje(`Conversión no soportada para: ${userMeasure}`, 'error');
  }
}

// Ejecutar el conversor
iniciarConversor();
