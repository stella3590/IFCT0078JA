// JavaScript

const parrafo = document.getElementById('parrafoPrincipal');
let btnCambioTexto= document.createElement("button");
document.getElementById("seccionBotones")?.appendChild(btnCambioTexto);
btnCambioTexto.textContent = 'Cambiar texto';


btnCambioTexto.onclick = () => {
  parrafo.textContent = '¡El texto ha cambiado con JavaScript!';
};




