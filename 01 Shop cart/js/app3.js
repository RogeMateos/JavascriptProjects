/*
04 MOSTRANDO EL RESTO DE LA INFORMACION
Generando los tds
*/

// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = []; //Arreglo que se llena conforme vayamos dando click

// Listeners
function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  listaCursos.addEventListener('click', agregarCurso);
}
cargarEventListeners();

// Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenir en comportamiento de el enlace
  // Delegation para agregar-carrito
  if (e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement; // Accediendo al html encima de el dom a todo el block de el div class card
    leerDatosCurso(curso);
  }
}

// Lee los datos del Html al que le dimos click y extrae la info de el curso
function leerDatosCurso(curso) {
  // Crear un Objeto con el contenido de el curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };
  // Agrega elementos al arreglo de carrito   let articulosCarrito = [];
  // Utilizamos Spread Operator
  articulosCarrito = [...articulosCarrito, infoCurso];
  carritoHTML();
}

// Muestra el Carrito de compras en el Html
function carritoHTML() {
  // Limpiar html
  limpiarHtml();

  //Recorre el carrito y muestra html
  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>  
      <img src="${curso.imagen}" width=100>
    </td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>${curso.cantidad} </td>
    <td>
         <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
    </td>
`;
    //Agrega el HTML del carrito en el Body
    contenedorCarrito.appendChild(row); //Agregamos row en cada interaccion
  });
}

// Elimina los cursos de el body

function limpiarHtml() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

/*
04.1 MOSTRANDO EL RESTO DE LA INFORMACION
Destructuring tds
*/

// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = []; //Arreglo que se llena conforme vayamos dando click

// Listeners
function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  listaCursos.addEventListener('click', agregarCurso);
}
cargarEventListeners();

// Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenir en comportamiento de el enlace
  // Delegation para agregar-carrito
  if (e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement; // Accediendo al html encima de el dom a todo el block de el div class card
    leerDatosCurso(curso);
  }
}

// Lee los datos del Html al que le dimos click y extrae la info de el curso
function leerDatosCurso(curso) {
  // Crear un Objeto con el contenido de el curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };
  // Agrega elementos al arreglo de carrito   let articulosCarrito = [];
  // Utilizamos Spread Operator
  articulosCarrito = [...articulosCarrito, infoCurso];
  carritoHTML();
}

// Muestra el Carrito de compras en el Html
function carritoHTML() {
  // Limpiar html
  limpiarHtml();

  //Recorre el carrito y muestra html
  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr');
    const { imagen, titulo, precio, cantidad, id } = curso;
    row.innerHTML = `
    <td>  
      <img src="${curso.imagen}" width=100>
    </td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad} </td>
    <td>
         <a href="#" class="borrar-curso" data-id="${id}">X</a>
    </td>
`;
    //Agrega el HTML del carrito en el Body
    contenedorCarrito.appendChild(row); //Agregamos row en cada interaccion
  });
}

// Elimina los cursos de el body

function limpiarHtml() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

/*
05 ELIMINAR UN CURSO DE EL CARRITO
Si un curso ya esta agregado que se actualice la cantidad
Y tambien nos hace falta eliminarlos con la x 

iteramos sobre cada curso  articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
y nos permite acceder a cada curso.id
Que se traiga todos excepte el cual el estamos dando boton de eliminar ! == cursoId
*/

// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = []; //Arreglo que se llena conforme vayamos dando click

// Listeners
function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  listaCursos.addEventListener('click', agregarCurso);

  // Elimina cursos de el carrito
  carrito.addEventListener('click', eliminarCurso);
}
cargarEventListeners();

// Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenir en comportamiento de el enlace
  // Delegation para agregar-carrito
  if (e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement; // Accediendo al html encima de el dom a todo el block de el div class card
    leerDatosCurso(curso);
  }
}

// Eliminar un curso de el carrito
function eliminarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains('borrar-curso')) {
    // e.target.parentElement.parentElement.remove();
    const cursoId = e.target.getAttribute('data-id');

    // Eliminar del arreglo del carrito por el data id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

    carritoHTML(); // una vez que elimino un elemento de mi carrito tengo que mandar llamar
    // La funcion que me imprime el html, iterar sobre el carrito y mostrar su html
  }
}
// Lee los datos del Html al que le dimos click y extrae la info de el curso
function leerDatosCurso(curso) {
  // Crear un Objeto con el contenido de el curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };
  // Agrega elementos al arreglo de carrito   let articulosCarrito = [];
  // Utilizamos Spread Operator
  articulosCarrito = [...articulosCarrito, infoCurso];
  carritoHTML();
}

// Muestra el Carrito de compras en el Html
function carritoHTML() {
  // Limpiar html
  limpiarHtml();

  //Recorre el carrito y muestra html
  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr');
    const { imagen, titulo, precio, cantidad, id } = curso;
    row.innerHTML = `
    <td>  
      <img src="${curso.imagen}" width=100>
    </td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad} </td>
    <td>
         <a href="#" class="borrar-curso" data-id="${id}">X</a>
    </td>
`;
    //Agrega el HTML del carrito en el Body
    contenedorCarrito.appendChild(row); //Agregamos row en cada interaccion
  });
}

// Elimina los cursos de el body

function limpiarHtml() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

/*
06 VACIAR EL CARRITO

*/

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = []; //Arreglo que se llena conforme vayamos dando click

// Listeners
function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  listaCursos.addEventListener('click', agregarCurso);

  // Elimina cursos de el carrito
  carrito.addEventListener('click', eliminarCurso);

  // Al Vaciar el carrito
  vaciarCarritoBtn.addEventListener('click', limpiarHtml);
}
cargarEventListeners();

// Funciones
function agregarCurso(e) {
  e.preventDefault(); // Prevenir en comportamiento de el enlace
  // Delegation para agregar-carrito
  if (e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement; // Accediendo al html encima de el dom a todo el block de el div class card
    leerDatosCurso(curso);
  }
}

// Eliminar un curso de el carrito
function eliminarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains('borrar-curso')) {
    // e.target.parentElement.parentElement.remove();
    const cursoId = e.target.getAttribute('data-id');

    // Eliminar del arreglo del carrito por el data id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

    carritoHTML(); // una vez que elimino un elemento de mi carrito tengo que mandar llamar
    // La funcion que me imprime el html, iterar sobre el carrito y mostrar su html
  }
}
// Lee los datos del Html al que le dimos click y extrae la info de el curso
function leerDatosCurso(curso) {
  // Crear un Objeto con el contenido de el curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };
  // Agrega elementos al arreglo de carrito   let articulosCarrito = [];
  // Utilizamos Spread Operator
  articulosCarrito = [...articulosCarrito, infoCurso];
  carritoHTML();
}

// Muestra el Carrito de compras en el Html
function carritoHTML() {
  // Limpiar html
  limpiarHtml();

  //Recorre el carrito y muestra html
  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr');
    const { imagen, titulo, precio, cantidad, id } = curso;
    row.innerHTML = `
    <td>  
      <img src="${curso.imagen}" width=100>
    </td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad} </td>
    <td>
         <a href="#" class="borrar-curso" data-id="${id}">X</a>
    </td>
`;
    //Agrega el HTML del carrito en el Body
    contenedorCarrito.appendChild(row); //Agregamos row en cada interaccion
  });
}

// Elimina los cursos de el body

function limpiarHtml() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
