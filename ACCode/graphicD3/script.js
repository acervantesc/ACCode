//scalable libro vector graphics, jorge Aznar

const width = 800;
const height = 500;

const margin = { top: 40, right: 30, bottom: 60, left: 60 };

const svg = d3.select("svg").attr("width", width).attr("height", height);

//datos desde archivo CSV
d3.csv("datos.csv").then(function (data) {
  console.log(data);
  data.forEach(function (d) {
    d.Valor = +d.Valor; // El + convierte el valor a número
  });

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.Categoria)) // Las categorías
    .range([margin.left, width - margin.right]) // Rango de la escala
    .padding(0.5); // Espacio entre barras

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.Valor)]) // Rango del eje Y
    .nice() // Ajusta el rango de Y para mostrar valores redondeados
    .range([height - margin.bottom, margin.top]);

  //ejeX
  svg
    .append("g")
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x(d.Categoria)) // Posición en el eje X
    .attr("y", (d) => y(d.Valor)) // Posición en el eje Y
    .attr("width", x.bandwidth()) // Ancho de las barras
    .attr("height", (d) => height - margin.bottom - y(d.Valor));

  //ejeY
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`) // Posición del eje X
    .call(d3.axisBottom(x))
    .selectAll(".tick text")
    .attr("class", "axis-label")
    .style("text-anchor", "middle") // Centrar las etiquetas
    .style("font-size", "14px")
    .attr("dy", "0.8em");

  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`) // Posición del eje Y
    .call(d3.axisLeft(y))
    .selectAll(".tick text")
    .attr("class", "axis-label")
    .style("font-size", "14px");

  // Etiquetas de los ejes
  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", margin.left / 4)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Porcentaje");

  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", height - 10)
    .style("text-anchor", "middle")
    .text("Numero de personas");
});
