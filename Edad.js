function pedirEdad() {
    let edad = prompt("Indique su edad aquí");
    edad= Number (edad);
    if (edad > 18) {
        alert("Tu edad es " + edad + ", puedes continuar.");
        } else {
        alert("Tu edad es " + edad + ", los menores de edad no pueden continuar.");
        } 
   }