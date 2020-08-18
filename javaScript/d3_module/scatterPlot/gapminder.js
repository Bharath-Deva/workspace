var margin = { top: 10, right: 10, bottom: 10, left: 100 },
    width = 660 - margin.left - margin.right,
    height = 440 - margin.top - margin.bottom;

var svg = d3
    .select('.plot')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .style("background", "#f4f000");

var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


//Scales
var x = d3.scaleLog()
    .base(10)
    .range([0, width])
    .domain([142, 150000]);
var y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 90]);
var area = d3.scaleLinear()
    .range([25 * Math.PI, 1500 * Math.PI])
    .domain([2000, 1400000000]);
var continentColor = d3.scaleOrdinal(d3.schemePastel1);

//Axis-Group
var xaxisgrp = g
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", "traslate(0," + height + ")")

var xaxis = d3.axisBottom(x)
    .tickValues([400, 4000, 40000])
    .tickFormat(d3.format("$"));
g.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(20,${height - 50})`)
    .call(xaxis);


var yaxis = d3.axisLeft(y);
g.append("g")
    .attr("class", "y axis")
    .attr("transform", `translate(10,0)`)
    .call(yaxis);


d3.json('./data/data.json').then(function (data) {
    console.log(data);

    // fomatting the data:
    format_data = data.map((d) => d["countries"].filter((country) => {
        if (country["income"] && country["life_exp"]) {
            country.income = +country["income"];
            country.life_exp = +country["life_exp"];

        }
        return (country["income"] && country["life_exp"]);
    }));

    // console.log(format_data);
    update(format_data[0])



});

function update(data) {
    var t = d3.transition().duration(500);

    //axis-call
    var xaxis = d3.axisLeft(x);
    // xaxisgrp.transition(t).call(xaxis);

    var yaxis = d3.axisBottom(y);
    // yaxisgrp.transition(t).call(yaxis)

    //data binding
    var cir = svg.select("circle").data(data, (data) => data.countries);

    //exit
    svg.exit()
        .attr("fill", "red")
        .transition(t)
        .attr("y", y(90))

}

