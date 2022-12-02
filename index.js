// Obtener informacion de la forma
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const trabajo = document.getElementById("work");
const telefono = document.getElementById("phone");
const sobre = document.getElementById("about");


const form = document.getElementById("forma");

//Crear event listener para la forma 
form.addEventListener('submit', (e) => {
   //Evitar la accion por defecto
   e.preventDefault();

   //Crear objeto que tengas los valores de la forma
   const formulario ={
    name: nombre.value,
    email: correo.value,
    
   }

   //Dar la orden de submit
   //event.submit();

});