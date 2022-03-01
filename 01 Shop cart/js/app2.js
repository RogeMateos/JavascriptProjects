/*
STEP 1 CREATING VARIABLES LISTENERS Function
*/

// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

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
    console.log(e.target); // Elemento al que le damos click   <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
  }
}

/*
STEP 2 LEER DATOS CURSO QUE SELECCIONAMOS
Tenemos que acceder a los elementos que hay arriba de el boton ancher
Leemos los datos de el curso 
*/

// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

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
  console.log(infocurso);
}

/*
STEP 3 AGREGAR CURSO AL CARRITO DE COMPRAS
Cuando presiono en boton mi arreglo de carrito se tendria que ir llenando
Vamos a colocar un arreglo, una buena forma de colocar datos que son similares

Una vez que seleciono curso y leo sus datos quiero llenar el arreclo con los objestos
imagen: curso.querySelector("img").src,

 articulosCarrito = []; para llenarlo utilizaremos el spread operator
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

  console.log(articulosCarrito); //
}

/*
STEP 3.1 AGREGAR CURSO AL CARRITO DE COMPRAS
Creo otra Funcion muestra el carrito de compras en el html 
Esta funcion se encarga de generar el Html basado en el carrito de compras let articulosCarrito = [];
Vamos a iterarlo con un forEach, vamos ir iterando cada curso que tengamos
The arrow function va a ir iterando sobre el carrito , para eso le pasamos el nombe de el objeto actual
CURSO.

Los cursos de el carrito se insertaran en el table body , tenemos que crear un elemento que se conoce como
tr 
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

  console.log(articulosCarrito); //
  carritoHTML();
}

// Limpiar html

// Muestra el Carrito de compras en el Html
function carritoHTML() {
  //Recorre el carrito y muestra html
  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr');
    row.innerHTML = `
          
               <td>${curso.titulo}</td>
             
          `;
    //Agrega el HTML del carrito en el Body
    contenedorCarrito.appendChild(row); //Agregamos row en cada interaccion
  });
}

// Elimina los cursos de el Tbody

/*
STEP 3.2 Limpiando el html previo
Antes de crear el html lo que vamos a hacer es limpiar el html 

Creo funcion limpiar html

Lo que quiero limpiar es  contenedorCarrito.appendChild(row); para que no se vayan 
encimando los cursos previos 

Html se limpia y despues se vuelve a agregar 

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

  console.log(articulosCarrito); //
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
          
               <td>${curso.titulo}</td>
             
          `;
    //Agrega el HTML del carrito en el Body
    contenedorCarrito.appendChild(row); //Agregamos row en cada interaccion
  });
}

// Elimina los cursos de el body

function limpiarHtml() {
  contenedorCarrito.innerHTML = '';
}

/*
STEP 3.2 FORMA RAPIDA DE ELIMINAR CODIGO 

El while se va a ejecutar mientras una condicion sea evaluada como verdadera 

Estamos revisando que mientras haya un hijo la condicion se cumple, por lo tanto el elemento padre 
va eliminar un hijo por el primero 

  while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
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
          
               <td>${curso.titulo}</td>
             
          `;
    //Agrega el HTML del carrito en el Body
    contenedorCarrito.appendChild(row); //Agregamos row en cada interaccion
  });
}

// Elimina los cursos de el body

function limpiarHtml() {
  // Forma lenta contenedorCarrito.innerHTML = '';

  // forma rapida (recomendada)
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

/*

RECAPITULANDO
*/
/*
1
Cuando agrego curso se ejecuta la funcion de agregar curso 

Nos aseguramos que el usuario haya presionado en agregar carrito 
y accedemos a todo el div que tiene todo el contenido de el curso  const curso = e.target.parentElement.parentElement; 

*/
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

/*
2
Despues leemos esos datos de el curo y creamos un objeto con la informacion que requerimos
Lo agregamos a nuestro carrito de compras    articulosCarrito = [...articulosCarrito, infoCurso];
y despues  Imprimimos ese html carritoHTML(); 
*/

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

  console.log(articulosCarrito); //
  carritoHTML();
}

/*
3
Imprimimos ese html
Como estabamos obteniendo duplicados lo primero que hacemos es limpiar el html previo limpiarHtml();

y despues lo volvemos a generar de articulos carrito   articulosCarrito.forEach(curso => {
*/

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

// Elimina los cursos de el body

function limpiarHtml() {
  contenedorCarrito.innerHTML = '';
}

/*
3
FORMA LENTA DE ELIMINAR CODIGO HTML Y RAPIDA
El while se va a ejecutar mientras una condicion sea evaluada como verdadera 

Estamos revisando que mientras haya un hijo la condicion se cumple, por lo tanto el elemento padre 
va eliminar un hijo por el primero 

  while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
*/

// Elimina los cursos de el body

function limpiarHtml() {
  // Forma lenta contenedorCarrito.innerHTML = '';

  // forma rapida (recomendada)
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
