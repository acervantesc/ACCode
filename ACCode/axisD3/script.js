//scalable libro vector graphics, jorge Aznar

const width = 800;
const height = 500;

const margin = { top: 40, right: 30, bottom: 60, left: 60 };

const svg = d3.select("svg").attr("width", width).attr("height", height);

//datos
const categorias = ["A", "B", "C", "D", "E", "F"];
const valorMax = 100;

//escala x
const x = d3
  .scaleBand()
  .domain(categorias)
  .range([margin.left, width - margin.right])
  .padding(0.1);

const y = d3
  .scaleLinear()
  .domain([0, valorMax])
  .nice()
  .range([height - margin.bottom, margin.top]);

//ejeX
svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("class", "axis-label");

//ejeY
svg
  .append("g")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y))
  .selectAll("text")
  .attr("class", "axis-label");

//etiqueta x
svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", height - 15)
  .attr("text-anchor", "middle")
  .attr("class", "axis-label")
  .text("categorias");

//etiqueta y
svg
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", 20)
  .attr("text-anchor", "middle")
  .attr("class", "axis-label")
  .text("valor");
