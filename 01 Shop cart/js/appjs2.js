


/*
1
Cuando agrego curso se ejecuta la funcion de agregar curso 

Nos aseguramos que el usuario haya presionado en agregar carrito 
y accedemos a todo el div que tiene todo el contenido de el curso

*/
const  cargarEventListeners = () => {
  // Dispara cuando se presiona "Agregar Carrito"
  listaCursos.addEventListener("click", agregarCurso);
}
cargarEventListeners();


const  agregarCurso = (e) => {
  e.preventDefault(); // Previene el link comportamiento nativo
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeccionado = (e.target.parentElement.parentElement);
    leerDatosCurso(cursoSeccionado);
  }
}




/*
2
Despues leemos esos datos de el curo y creamos un objeto con la informacion que requerimos
Lo agregamos a nuestro carrito de compras y despues 
Imprimimos ese html 
*/

const leerDatosCurso = (curso) => {
  //Crear un objeto con el contenido de el curso actual
  const infoCurso = {
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').textContent,
      precio: curso.querySelector('.precio span').textContent,
      id:     curso.querySelector('a').getAttribute('data-id'),
      cantidad: 1
  }
  //Agregamos a nuestro carrito de compras

  articulosCarrito = [...articulosCarrito, infoCurso]

  console.log(articulosCarrito);

  //imprimimos ese html
  carritoHTML ();
}



/*
3
Como estabamos obteniendo duplicados lo primero que hacemos es limpiar el html previo y despues lo volvemos a 
generar de articulos carrito

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


/*
3
Despues leemos esos datos de el curso y creamos un objeto con la informacion que requerimos
Lo agregamos a nuestro carrito de compras y despues 
Imprimimos ese html 
*/







/*
ACTUALIZAR ELEMENTOS QUE HAY EN CARRITO 
Antes de agregar los articulo al carrito podriamos comprobar si ese
elemento ya existe enel carrito

.some te permite iterar sobre un arreglo de objetos y verificar si un objeto existe en el 

*/

const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
if(existe) {
     //Actualizamos la cantidad 
}else{
  //Agrega elementos al arreglo de el carrito
   articulosCarrito = [...articulosCarrito, infoCurso]
}



/*
ACTUALIZAR ELEMENTOS QUE HAY EN CARRITO 
Nos hace falta el existe es decir cuando un curso ya esta agregado actualizar la cantidad

Tenemos que ir iterando sobre cada uno de los cursos i dentigficar cual es el duplicado y de hai aumentarl a cantidad
.map  va a crear un nuevo arreglo por eso estamos asignandolo a una nueva variable y vamos ir iterando sobre cada curso
Map va a ir iterando sobre todos los elementos de el carrito y cuando encuentre cual es el que es igual al qu esta agregado
aumentamos la cantidad
*/


const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
if(existe) {
     //Actualizamos la cantidad 
     const cursos = articulosCarrito.map(curso =>{
       if (curso => curso.id === infoCurso.id){
          curso.cantidad++;
          return curso //Retorna objeto atualizado 
       } else {
         return curso //Retorna los objetos que no son los duplicados
       }
     });
     articulosCarrito = [...cursos]
}else{
  //Agrega elementos al arreglo de el carrito
   articulosCarrito = [...articulosCarrito, infoCurso]
}




/*
ELIMINAR CARRITO

Necesitamos obtener el id que esta en la clase borrar curso data-id
*/



function eliminarCurso(e) {
  console.log(e.target.classList);//Obtains the class borrar curso
  if (e.target.classlist.contains('borrar-curso')){
    
    console.log(e.target.getAttribute('data-id'));
  }
}
