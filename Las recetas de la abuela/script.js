document.addEventListener("DOMContentLoaded", function () {


    // Desplegar recetas al hacer clic en el título
    const titulosReceta = document.querySelectorAll(".titulo-receta");
    titulosReceta.forEach(titulo => {
        titulo.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("visible");
        });
    });

    // Validar formulario de contacto
    const formulario = document.getElementById("formularioContacto");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
    
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        
        if (nombre && mensaje) {
            mensajeConfirmacion.style.display = "block";
            formulario.reset();
        }
    });
});
