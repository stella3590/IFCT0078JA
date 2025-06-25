// JavaScript

// Contador para llevar el número del nuevo elemento
let contador = 0;

// Obtener el botón y la lista del DOM
let boton = document.getElementById("botonAgregarElemento");
let lista = document.getElementById("miLista");

// Evento de clic
boton.addEventListener("click", function () {
  // Crear un nuevo elemento <li>
  let nuevoElemento = document.createElement("li");
  
  // Añadir texto al nuevo elemento
  nuevoElemento.textContent = "Nuevo elemento " + contador;
  lista.appendChild(nuevoElemento);
  contador++;
});


