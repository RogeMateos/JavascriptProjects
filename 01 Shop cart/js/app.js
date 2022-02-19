//Variables

const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");



const  agregarCurso = (e) => {
  e.preventDefault(); // Previene el link comportamiento nativo
  if (e.target.classList.contains("agregar-carrito")) {
    console.log(e.target); //saber que curso estamos agregando 
  }
}

const  cargarEventListeners = () => {
    // Dispara cuando se presiona "Agregar Carrito"
    listaCursos.addEventListener("click", agregarCurso);
  }
  cargarEventListeners();