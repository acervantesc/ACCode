window.onload = function () {
  const savedName = localStorage.getItem("name"); // Recuperamos el nombre guardado

  if (savedName) {
    // Si el nombre existe, mostramos un mensaje de saludo
    document.getElementById(
      "greetingMessage"
    ).textContent = `¡Hola, ${savedName}!`;
  }
};

// Función para guardar el nombre en localStorage
document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitamos que el formulario se envíe y recargue la página

  const name = document.getElementById("nameInput").value; // Obtenemos el valor del input

  if (name) {
    // Guardamos el nombre en localStorage
    localStorage.setItem("name", name);

    // Mostramos el mensaje de saludo
    document.getElementById("greetingMessage").textContent = `¡Hola, ${name}!`;

    // Limpiamos el campo de texto
    document.getElementById("nameInput").value = "";
  } else {
    alert("Por favor, ingresa tu nombre.");
  }
});
