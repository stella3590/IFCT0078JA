// JavaScript

// Controlamos que se haya cargado todo el DOM
document.addEventListener('DOMContentLoaded', function () {

  let formulario = document.getElementById("seccionFormulario");
  let nombreInput = document.getElementById("campoNombre");
  let edadInput = document.getElementById("campoEdad");
  let mensaje = document.getElementById("mensajeInput");
  let btnGuardar = document.getElementById("btnGuardar");


  nombreInput.placeholder = "Escribe tu nombre";
  edadInput.placeholder = "Introduce tu edad";


  function WhatUserDoing(ev) {
    console.log(WhatUserDoing, ev);
    mensaje.textContent = `Va a indicar tu ${ev.target?.name}...`;
    mensaje.className = "";
  }


  function CheckNameField(field) {
    if (field.value.trim().length < 3) {
      mensaje.textContent = `El ${field?.name} debe tener más de 3 caracteres.`;
      mensaje.className = "error";
      return false;
    }
  }

  function CheckAgeField(field) {
    const edad = parseInt(field.value.trim());
    if (isNaN(edad) || edad <= 18) {
      mensaje.textContent = `La ${field?.name} debe ser un número mayor que 18.`;
      mensaje.className = "error";
      return false;
    }
  }


  // Eventos para el nombre
  nombreInput.onfocus = (ev) => WhatUserDoing(ev);
  nombreInput.onkeyup = (ev) => CheckNameField(ev.target);
  nombreInput.onblur = (ev) => CheckNameField(ev.target);


  // Eventos para la edad
  edadInput.onfocus = (ev) => WhatUserDoing(ev);
  edadInput.onkeyup = (ev) => CheckAgeField(ev.target);
  edadInput.onblur = (ev) => CheckAgeField(ev.target);


  // Validación al guardar
  btnGuardar.onclick = () => {

    mensaje.className = "";

    if (!!!CheckNameField(nombreInput)) return false;
    if (!!!CheckAgeField(edadInput)) return false;

    mensaje.textContent = "Datos guardados correctamente.";
    mensaje.classList.add("exito");
  };

});
