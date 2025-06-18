//Javascript

// Definimos un array con 5 frutas diferentes
var frutas = ['Cereza', 'Kiwi', 'Melón', 'Uva', 'Papaya'];

// Mostramos todas las frutas usando forEach
console.log("Frutas actuales:");

// frutas.forEach(function(fruta, index) {
//   console.log(`${index + 1}. ${fruta}`);
// // });

frutas.forEach((fruta)  => console.log(`${fruta}`) + "\r\n");



// Pedimos al usuario una nueva fruta
var nuevaFruta = prompt("Introduce una nueva fruta:");
frutas.push(nuevaFruta);

// Mostramos el array actualizado
console.log("\nFrutas después de añadir la nueva:");
frutas.forEach(function(fruta, index) {
  console.log(`${index + 1}. ${fruta}`);
});
