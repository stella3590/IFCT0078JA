// JavaScript

// Seleccionamos los elementos
let campoInput = document.getElementById('campoInput');
let mensajeInput = document.getElementById('mensajeInput');

// Escuchamos el evento 'input' para detectar cambios en el campo de texto
campoInput.addEventListener('input', () => {
  let texto = campoInput.value;          
  mensajeInput.textContent = texto;     

  // Condicional para añadir o quitar la clase 'error'
  if (texto.length < 4) {
    mensajeInput.classList.add('error');
  } else {
    mensajeInput.classList.remove('error');
  }
});
