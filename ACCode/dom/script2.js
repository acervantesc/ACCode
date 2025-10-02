let texto = document.getElementById("texto");
let boton = document.getElementById("cambiaColor");

let lista = document.getElementById("lista");
let btn = document.getElementById("agrega");

boton.addEventListener("click", function () {
  texto.style.color = "blue";
});

btn.addEventListener("click", function () {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Nuevo Elemento";
  lista.appendChild(nuevoElemento);
});
