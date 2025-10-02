let numPer = prompt("Ingrese número de personas: ");
numPer = Number(numPer);

if (numPer >= 1 && numPer <= 199) {
  console.log(`Costo total de ${numPer} es de $${numPer * 95}`);
} else if (numPer >= 200 && numPer <= 299) {
  console.log(`Costo total de ${numPer} es de $${numPer * 85}`);
} else if (numPer > 300 ) {
  console.log(`Costo total de ${numPer} es de $${numPer * 75}`);
} else {
  console.log("Número de personas fuera de rango válido.");
}