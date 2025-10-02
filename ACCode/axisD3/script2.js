const width = 800;
const height = 500;
const margin = { top: 40, right: 30, bottom: 60, left: 60 };

const svg = d3.select("svg").attr("width", width).attr("height", height);

// Datos de ejemplo SOLO para los ejes (no se dibujan barras)
const categorias = ["A", "B", "C", "D", "E"];
const valorMaximo = 100;

// Escala X (categorías)
const x = d3
  .scaleBand()
  .domain(categorias)
  .range([margin.left, width - margin.right])
  .padding(0.1);

// Escala Y (valores)
const y = d3
  .scaleLinear()
  .domain([0, valorMaximo])
  .nice()
  .range([height - margin.bottom, margin.top]);

// Eje X
svg
  .append("g")
  .attr("transform", `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("class", "axis-label");

// Eje Y
svg
  .append("g")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y))
  .selectAll("text")
  .attr("class", "axis-label");

// Etiqueta del eje X
svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", height - 15)
  .attr("text-anchor", "middle")
  .attr("class", "axis-label")
  .text("Categoría");

// Etiqueta del eje Y
svg
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", 20)
  .attr("text-anchor", "middle")
  .attr("class", "axis-label")
  .text("Valor");
