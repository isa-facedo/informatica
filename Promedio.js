const boton = document.getElementById("btnPromedio");
boton.addEventListener("click", function() {
  const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
  const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
  const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
  const promedio = (nota1 + nota2 + nota3) / 3;
  if (promedio >= 6) {
    alert("Promedio: " + promedio.toFixed(2) + " — Aprobado");
  } else {
    alert("Promedio: " + promedio.toFixed(2) + " — Desaprobado");
  }
});