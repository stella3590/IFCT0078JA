
// JavaScript
// Pedimos un número al usuario
let numero = prompt("Introduce un número:");


function ParImpar (numero) {

	// Convertimos el valor ingresado a un número (ya que prompt devuelve un string)
	numero = Number(numero);

	// Verificamos si el número es par o impar usando el operador módulo
	if (numero % 2 === 0) {
	console.log("El número es par.");
	} else {
	console.log("El número es impar.");
	}

}
ParImpar(numero);