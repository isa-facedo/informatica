function pedirNombre() {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        alert("Hola " + nombre + ", ¡Bienvenido a la clase de JavaScript!");
        } else {
        alert("No escribiste tu nombre, inténtalo de nuevo.");
        } 
   }