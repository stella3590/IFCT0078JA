//Javascript
// Obtener el año actual
const anioActual = new Date().getFullYear();

// Pedir al usuario su año de nacimiento
const anioNacimiento = prompt("Introduce tu año de nacimiento");

// Calcular la edad
let edad = anioActual - anioNacimiento;

// Mostrar la edad en la consola
console.log("Tienes " + edad + " años.");
