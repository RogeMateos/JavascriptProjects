const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
// const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

const agregarCurso = e => {
  e.preventDefault(); // Previene el link comportamiento nativo
  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeccionado);
  }
};

const cargarEventListeners = () => {
  // Dispara cuando se presiona "Agregar Carrito"
  listaCursos.addEventListener('click', agregarCurso);

  // Elimina cursos de carrito
  carrito.addEventListener('click', eliminarCurso);
};
cargarEventListeners();

// Elimina cursos en el carrito
function eliminarCurso(e) {
  console.log(e.target.classList); // Obtains the class borrar curso
  if (e.target.classList.contains('borrar-curso')) {
    const cursoId = e.target.getAttribute('data-id'); // Obteniendo curso data id que deseo eliminar

    // Elimina del areglo articulos carrito por el data-id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
    console.log(articulosCarrito);

    carritoHTML(); // Iterar sobre el carrito y mostrar su html
  }
}

// Lee el contenido del Html al que le dimos click y extrae la informacion de el curso

const leerDatosCurso = curso => {
  // Crear un objeto con el contenido de el curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };

  // Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
  if (existe) {
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map(curso => {
      if (curso => curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // Retorna objeto atualizado
      } else {
        return curso; // Retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agrega elementos al arreglo de el carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);

  // LLamando funcion
  carritoHTML();
};

// Muestra el carrito compras en el HTML
// iterando con foreach
function carritoHTML() {
  // Limpiar el Html

  limpiarHtml();

  // recorre el carrito y genera html
  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr');
    const { imagen, titulo, precio, cantidad, id } = curso;
    row.innerHTML = `
       
       <td>
       <img src ="${imagen}" width="100">
       </td>
       <td>${titulo}</td>
       <td>${precio}</td>
       <td>${cantidad}</td>
       <td>
        <a a href="#" class="borrar-curso" data-id="${id}">x</a>
       </td>
      `;

    // Agrega el Html de el carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// Elimina los cursos de el table Body

function limpiarHtml() {
  // Forma lenta
  // contenedorCarrito.innerHTML = '';

  // forma rapida (recomendada)
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
