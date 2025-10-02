let biblioteca = [];
function agregarLibro() {
  let titulo = prompt("Titulo del Libro");
  let autor = prompt("Autor del libro");
  if (titulo && autor) {
    biblioteca.push({ titulo, autor });
    alert("Libro agregado");
  } else {
    alert("Datos incompletos");
  }
}

function listarLibros() {
  if (biblioteca.length === 0) {
    alert("No hay libros");
    return;
  }

  let lista = "Lista de libros: \n";
  biblioteca.forEach((libro, i) => {
    lista += `${i + 1}. ${libro.titulo} - ${libro.autor}\n`;
  });
  alert(lista);
}

function buscarLibros() {
  let busqueda = prompt("Ingrese titulo o autor a buscar: ").toLowerCase();
  let resultados = biblioteca.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(busqueda) ||
      libro.autor.toLowerCase().includes(busqueda)
  );
  if (resultados.length === 0) {
    alert("No se encontro concidencias.");
  } else {
    let lista = "Resultados: \n";
    resultados.forEach((libro) => {
      lista += `${libro.titulo} - ${libro.autor}\n`;
    });
    alert(lista);
  }
}

function eliminarLibro() {
  if (biblioteca.length === 0) {
    alert("No hay libros a eliminar");
    return;
  }
  listarLibros();
  let indice = prompt("Numero de libros a Eliminar: ") - 1;
  if (indice >= 0 && indice < biblioteca.length) {
    let eliminado = biblioteca.splice(indice, 1);
    alert(`Libro eliminado: ${eliminado[0].titulo}`);
  } else {
    alert("Numero invalido");
  }
}

function menu() {
  let opcion;
  do {
    opcion = prompt(`--Menu Biblioteca--
    1. Agregar Libro
    2. Listar Libros
    3. Buscar Libro
    4. Eliminar Libro
    5. Salir
    ------
    seleccione una opcion: `);
    switch (opcion) {
      case "1":
        agregarLibro();
        break;
      case "2":
        listarLibros();
        break;
      case "3":
        buscarLibros();
        break;
      case "4":
        eliminarLibro();
        break;
      case "5":
        alert("Saliendo del sistema...");
        break;
      default:
        alert("Opcion invalida.");
    }
  } while (opcion !== "5");
}

menu();
