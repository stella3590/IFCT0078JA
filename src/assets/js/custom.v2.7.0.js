// JavaScript

let btnMostrarImagen = document.createElement('button');
btnMostrarImagen.textContent = 'Mostrar Imagen';
seccionBotones.appendChild(btnMostrarImagen);

let contenedorImagen = document.getElementById('contenedorImagen');
let imagen = null;

btnMostrarImagen.onclick = () => {
  if (!imagen) {
    // Crear la imagen y mostrarla
    imagen = document.createElement('img');
    imagen.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';
    imagen.alt = 'Paisaje de montaña';
    imagen.style.maxWidth = '100%';
    imagen.style.height = 'auto';
    imagen.title = 'Paisaje de montaña con lago al atardecer';

    contenedorImagen.appendChild(imagen);
    btnMostrarImagen.textContent = 'Ocultar Imagen';
  } else {
    // Si la imagen ya existe, la quitamos y limpiamos variable
    if (contenedorImagen.contains(imagen)) {
      contenedorImagen.removeChild(imagen);
      btnMostrarImagen.textContent = 'Mostrar Imagen';
    } else {
      // Si la imagen no está en el contenedor, la añadimos de nuevo
      contenedorImagen.appendChild(imagen);
      btnMostrarImagen.textContent = 'Ocultar Imagen';
    }
  }
};
