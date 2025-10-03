function manipularDom() {
  var div = document.getElementById("miDiv");
  var texto = document.getElementById("miTexto");

  div.style.width = "300px";
  div.style.height = "300px";

  div.style.backgroundColor = "green";
  texto.textContent = "texto Modificado";

  //crea nuevo elemento

  var nuevoElemento = document.createElement("p");

  nuevoElemento.style.color = "white";
  nuevoElemento.style.fontSize = "24px";
  nuevoElemento.style.fontWeight = "bold";
  nuevoElemento.textContent = "Texto modificado 2";

  div.appendChild(nuevoElemento);

  div.removeChild(texto);
}
