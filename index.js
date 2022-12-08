// Obtener informacion de la forma
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const trabajo = document.getElementById("work");
const telefono = document.getElementById("phone");
const sobre = document.getElementById("about");

// LLamar a la forma
const form = document.getElementById("forma");

// Const para el contenedor
const contenedor = document.getElementById("contenedor");

//Crear event listener para la forma 
form.addEventListener('submit', (e) => {
   //Evitar la accion por defecto
   e.preventDefault();

   //Crear objeto que tengas los valores de la forma
   const formulario = {
    name: nombre.value,
    gmail: correo.value,
    job: trabajo.value,
    cell: telefono.value,
    about: sobre.value,
   }

   const { name, gmail, job, cell, about } = formulario;

   const cuadroHtmlConInfo = crearCuadroDeForma
   (name, gmail, job, cell, about);

   contenedor.insertAdjacentHTML('beforeend', cuadroHtmlConInfo);

   //Dar la orden de submit
   //event.submit();

});

// Crear una funcion que nos retorne contenido HTML dinamicamente
function crearCuadroDeForma(name, gmail, job, cell, about){
   const cuadroHtml = `
   <div class="contenedor">
   <div class="imagen">
   <img src="./images.png" class="img">
   <h4 id="titulo">Nohemy</h4>
   <h3 id="titulo-2">Front End Dev</h3>
   </div>
   <div > 
 <h1 class="contenedor__nombre">${name}</h1>
 <p class="contendor__p">${gmail}</p>
 <p class="contenedor__p">${job}</p>
 <p class="contenedor__p">${cell}</p>
 <p class="contenedor__p">${about}</p>
 </div>
   </div>
   `
   return cuadroHtml
}