//Javascript
// Obtener el año actual
const anioActual = new Date().getFullYear();

// Pedir al usuario su año de nacimiento
const anioNacimiento = prompt("¿En qué año naciste?");

// Calcular la edad
const edad = anioActual - anioNacimiento;

// Mostrar la edad en la consola
console.log("Tienes " + edad + " años.");
