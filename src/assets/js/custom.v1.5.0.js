// Función que convierte Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Función que convierte Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Pedir al usuario los grados
const convertidoraFahrenheit = prompt("Dime cuántos grados Celsius:");
const convertidoraCelsius = prompt("Dime cuántos grados Fahrenheit:");

// Convertir los valores de string a número
const celsius = parseFloat(convertidoraFahrenheit);
const fahrenheit = parseFloat(convertidoraCelsius);

// Calcular los grados
const resultadoFahrenheit = celsiusAFahrenheit(celsius);
const resultadoCelsius = fahrenheitACelsius(fahrenheit);

// Mostrar resultados en consola
console.log("Conversión de Celsius a Fahrenheit:");
console.log(`${celsius}°C son ${resultadoFahrenheit.toFixed(2)}°F`);

console.log("Conversión de Fahrenheit a Celsius:");
console.log(`${fahrenheit}°F son ${resultadoCelsius.toFixed(2)}°C`);
