//Variables

const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");



const  agregarCurso = (e) => {
  e.preventDefault(); // Previene el link comportamiento nativo
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeccionado = (e.target.parentElement.parentElement);
    leerDatosCurso(cursoSeccionado);
  }
}

const  cargarEventListeners = () => {
    // Dispara cuando se presiona "Agregar Carrito"
    listaCursos.addEventListener("click", agregarCurso);
  }
  cargarEventListeners();

  
  //Lee el contenido del Html al que le dimos click y extrae la informacion de le curso

  const leerDatosCurso = (curso) => {
    //Crear un objeto con el contenido de el curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso)
  }