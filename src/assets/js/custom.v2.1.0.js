// JavaScript
const colores = ["red", "blue", "pink", "yellow"];

const boton = document.createElement("button");
boton.id = 'botonCambioFondo';
boton.textContent = 'Cambiar color de fondo';
boton.onclick = () => {
  let colorActual = Math.floor(Math.random() * (colores.length - 1));
  document.body.style.backgroundColor = colores[colorActual];
};

document.getElementById('seccionBotones').appendChild(boton);

