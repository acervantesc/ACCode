//se crean variables
let button = document.getElementById("cambiaTexto");
let parrafo = document.getElementById("parrafo");
let Titulo = document.getElementById("titulo");
let boton = document.getElementById("cambiarTitulo");
let parrafos = document.getElementsByClassName("p1");
let btn = document.getElementById("todos");

// se agregan eventos e instrucciones
button.addEventListener("click", function () {
  parrafo.textContent = "Texto cambiado";
});

boton.addEventListener("click", function () {
  Titulo.textContent = "Saludos!";
});

// se cambian parrafos con loop

btn.addEventListener("click", function () {
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Parrafos cambiados";
  }
});
