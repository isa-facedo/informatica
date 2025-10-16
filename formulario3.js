const boton = document.getElementById("btnPromedio");
boton.addEventListener("click", function() {
  const numero1 = parseFloat(prompt("Ingrese la primera nota:"));
  const numero2 = parseFloat(prompt("Ingrese la segunda nota:"));
  const numero3 = parseFloat(prompt("Ingrese la tercera nota:"));
  const promedio = (nota1 + nota2 + nota3) / 3;
  if (promedio >= 6) {
    alert("Felicidades. Tu promedio es" + promedio.toFixed(2) + ". Aprobaste.");
  } else {
    alert("Tu promedio es" + promedio.toFixed(2) + ". Necesitas repasar.");
  }
});