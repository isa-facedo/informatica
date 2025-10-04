const Secreto= 9;
const boton = document.getElementById("btnJuego");
boton.addEventListener("click", function() {
  const intento = prompt("Adivina el número secreto (entre 1 y 10):");
  if (intento == Secreto) {
    alert("¡Adivinaste! El número secreto es " + Secreto + ".");
  } else {
    alert("¡Casi! El número secreto es " + Secreto + ".");
  }
});