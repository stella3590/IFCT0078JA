// JavaScript

const parrafo = document.getElementById('parrafoPrincipal');
let btntoggle= document.createElement("button");
document.getElementById("seccionBotones")?.appendChild(btntoggle);
btntoggle.textContent = 'Mostrar/Ocultar';

// Crear y agregar el botón
// document.getElementById('seccionBotones').innerHTML += `
//   <button id="toggleBoton">Mostrar/Ocultar Párrafo</button>
// `;

// Evento para mostrar/ocultar el párrafo
// document.getElementById('toggleBoton').addEventListener('click', () => {
//   parrafo.style.display = (parrafo.style.display === 'none') ? 'block' : 'none';
// });

btntoggle.onclick = () => {
parrafo.style.display = (parrafo.style.display === 'none') ? 'block' : 'none'; 
};