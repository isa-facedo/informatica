let contador = 10;
let boton = document.getElementById("btnbajar");
let numero = document.getElementById("contador");

boton.addEventListener("click", function(){
    contador--;
    numero.textContent = contador;
});