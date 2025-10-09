let contador = 0;
function incrementarContador() {
  contador++;
  document.getElementById("contador").textContent = contador;
}

function decrementoContador() {
  contador--;
  document.getElementById("contador").textContent = contador;
}
