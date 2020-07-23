var margin = { left: 100, right: 10, top: 10, bottom: 100 };

var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

const arr = [1, 2, 3, 4, 5, 6, 7];

var svg = d3
  .select(".course")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .style("background", "#f4f000");

var g = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//X-Scale
var x = d3.scaleBand()
  .domain(arr)
  .range([0, width])
  .paddingInner(0.3)
  .paddingOuter(0.3)

var y = d3
  .scaleLinear()
  .domain([0, d3.max(arr)])
  .range([height, 0]);

var barchart = g
  .selectAll("rect")
  .data(arr)
  .enter()
  .append("rect")
  .attr("x", function (d) {
    // console.log(d, x(d))
    return x(d);
  })
  .attr("y", (d) => height - y(d))
  .attr("height", (d) => y(d))
  .attr("width", x.bandwidth)
  .attr("fill", "grey");

//X-AXIS:
var xaxis = d3.axisBottom(x);
g.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xaxis);

//Y-AXIS:
var yaxis = d3.axisLeft(y);
g.append("g")
  .attr("class", "y axis")
  .call(yaxis)

// Y-label
g.append("text")
  .attr("x", -height / 2)
  .attr("y", -60)
  .attr("text-anchor", "middle")
  .attr("font-size", "20px")
  .attr("transform", "rotate(-90)")
  .text("Revenue");

// X-Label
g.append("text")
  .attr("x", width / 2)
  .attr("y", height + 40)
  .attr("text-anchor", "middle")
  .attr("font-size", "20px")
  .text("Numbers");
