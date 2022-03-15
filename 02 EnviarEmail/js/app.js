/*
Step 3  Adding more variables
*/

// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

function evenListeners() {
  // cuando la app arranca
  document.addEventListener('DOMContentLoaded', iniciarApp);

  // campos de el formulario
  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);
}

evenListeners();

// funciones
function iniciarApp() {
  // deshabilitar el envio
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario

// Valida el formulario
function validarFormulario(e) {
  if (e.target.value.length > 0) {
    console.log('si hay algo');
  } else {
    e.target.classList.add('border', 'border-red-500');
  }
}
