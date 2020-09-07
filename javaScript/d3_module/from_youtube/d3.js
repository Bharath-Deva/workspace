// import * as d3 from "d3-collection";

var dataset = [5, 10, 15, 20, 25, 30];

var svgwidth = 500,
  svgheight = 300,
  barpadding = 5;
var barwidth = svgwidth / dataset.length;

//1. attributes of d3 module
var svg = d3
  .select("svg")
  .attr("width", svgwidth)
  .attr("height", svgheight)
  .style("background", "#f4f000");

//2. using "" enter() "" creating new li nodes
var barchart = d3
  .select("body")
  .select("li")
  .data(dataset)
  .enter()
  .append("li")
  .text((d) => "this" + d);
/* 
at the output "5,10" in arr uses the available 
li tags and for the remaining values 
new li tags are created "" enter keyword ""
*/

/* "" dought "" :
  still dont know why all the li tgs are appended at the lastof the body
  insted nest to the available li tags
*/

//3. bar chart using d3
var barchart1 = d3
  .select("svg")
  .selectAll("rect") //here rect nodes are tken but there is no node will be present we will be creating the rect node using "enter"
  .data(dataset) //
  .enter()
  .append("rect")
  .attr("y", function (d) {
    console.log(svgheight - d); //x,y determines the position in the svg block
    return svgheight - d;
  })
  .attr("height", (d) => d)
  .attr("width", barwidth - barpadding) // height and width decides the rect characteristics
  .attr("transform", function (d, i) {
    var translate = [barwidth * i, 0];
    return "translate(" + translate + ")";
  });

//4. lables for each bars:
var text = svg
  .selectAll("text") //here rect nodes are tken but there is no node will be present we will be creating the rect node using "enter"
  .data(dataset) //
  .enter()
  .append("text")
  .text((d) => d)
  .attr("y", function (d) {
    //x,y determines the position in the svg block
    return svgheight - d - 2;
  })
  .attr("x", (d, i) => barwidth * i);

//5. scaling function
console.log("5.scaling function")

var dataset = [100, 200, 300, 400, 500];

var svgwidth = 500;
var svgheight = 300,
  barpadding = 5;
var barwidth = svgwidth / dataset.length;

var svg = d3
  .select(".scale-function")
  .attr("width", svgwidth)
  .attr("height", svgheight)
  .style("background", "#f4f000");

var yscale = d3.scale
  .linear()
  .domain([0, d3.max(dataset)])
  .range([0, svgheight - 40]);

var barchart2 = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", (d) => {
    return svgheight - yscale(d);
  })
  .attr("width", barwidth - barpadding)
  .attr("height", (d) => {
    console.log(d, yscale(d));
    return yscale(d);
  })
  .attr("transform", (d, i) => {
    var translate = [barwidth * i, 0];
    return "translate(" + translate + ")";
  });

//Axes using d3 module:
var xScale = d3
  .scaleBand()
  .domain([0, d3.max(dataset)])
  .range([0, svgwidth])
  .padding(0.2)
  .round(true);

var xaxis = d3
  .select("body")
  .append("g")
  .classed("xaxis", true)
  .attr("transform", "translate(30px,5px)")
  .call(d3.axisBottom(xScale));
