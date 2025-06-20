// JavaScript

let numero = prompt("Introduce un número:");

let suma = 0;

[...numero].forEach(digito => {
  let num = parseInt(digito);
  if (!isNaN(num)) {
    suma += num;
  }
});

console.log("La suma de los dígitos de", numero, "es", suma);

