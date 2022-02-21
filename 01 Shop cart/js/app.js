//Variables

const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito =[];


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

  
  //Lee el contenido del Html al que le dimos click y extrae la informacion de el curso

  const leerDatosCurso = (curso) => {
    //Crear un objeto con el contenido de el curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //Agrega elementos al arreglo de el carrito

    articulosCarrito = [...articulosCarrito, infoCurso]

    console.log(articulosCarrito);

    //LLamando funcion
    carritoHTML ();
  }

  //Muestra el carrito compras en el HTML
  //iterando con foreach
  function carritoHTML() {

     //Limpiar el Html 

     limpiarHtml();

     //recorre el carrito y genera html 
     articulosCarrito.forEach(curso => {
      
       const row = document.createElement('tr');
      
      row.innerHTML = `
     
       <td>
        ${curso.titulo}
       </td>
      `;
     //Agrega el Html de el carrito en el tbody
     contenedorCarrito.appendChild(row);

     
    });

  }


  //Elimina los cursos de el table Body 

function limpiarHtml (){
 contenedorCarrito.innerHTML = '';
}