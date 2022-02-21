


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
Como estabamos obteniendo duplicados lo primero que hacemos es limpiar el html previo y despeus lo vovlemos a 
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
1
Despues leemos esos datos de el curo y creamos un objeto con la informacion que requerimos
Lo agregamos a nuestro carrito de compras y despues 
Imprimimos ese html 
*/