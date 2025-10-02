//promesa

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let todoEstaBien = false;
    if (todoEstaBien) {
      resolve("Se cumplio la promesa llego la pizza");
    } else {
      reject("la promesa se rompio, no hay pizza");
    }
  }, 1000);
});

//se usa la promesa

miPromesa
  .then((resultado) => {
    console.log(resultado);
  })

  .catch((error) => {
    console.log(error);
  });
