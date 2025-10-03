function mostartexto() {
  const texto = document.getElementById("mitexto").value;
  document.getElementById("resultado").textContent = texto;
}

const input = document.getElementById("mitexto2");
const resultado = document.getElementById("resultado2");

input.addEventListener("input", () => {
  resultado.textContent = input.value;
});
