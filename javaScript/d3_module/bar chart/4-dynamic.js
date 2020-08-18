var margin = { left: 100, right: 10, top: 10, bottom: 100 };

var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [7, 6, 5, 4, 3, 2, 1]

var repeat = setInterval(() => {
    arr = arr == arr1 ? arr2 : arr1
    console.log(arr)
    update(arr);
}, 2000);

var svg = d3
    .select(".course")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background", "#f4f000");

var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Y-AXIS:
var yaxisgroup =
    g.append("g")
        .attr("class", "y axis")

//X-AXIS:
var xaxisgroup =
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")

//X-Scale
var x = d3.scaleBand()
    .domain(arr)
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3)

//y-scale
var y = d3
    .scaleLinear()
    .domain([0, d3.max(arr)])
    .range([height, 0]);


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
    .text("Numbers")

update(arr)


function update(arr) {

    //x,y-updated domain
    x.domain(arr)
    y.domain([0, d3.max(arr)])


    //Y-AXIS
    var yaxis = d3.axisLeft(y);
    yaxisgroup.call(yaxis)

    //X-AXIS
    var xaxis = d3.axisBottom(x);
    xaxisgroup.call(xaxis)

    //update pattern
    //1. join data
    var barchart = g
        .selectAll("rect")
        .data(arr);
    //2. exit elements
    barchart.exit().remove();

    // 3.update the changed elements
    barchart
        .attr("x", function (d) {
            // console.log(d, x(d))
            return x(d);
        })
        .attr("y", (d) => height - y(d))
        .attr("height", (d) => y(d))
        .attr("width", x.bandwidth)
        .attr("fill", "grey");

    // enter: used to create the new elements

    barchart.enter()
        .append("rect")
        .attr("x", function (d) {
            // console.log(d, x(d))
            return x(d)
        })
        .attr("y", (d) => height - y(d))
        .attr("height", (d) => y(d))
        .attr("width", x.bandwidth)
        .attr("fill", "grey");

}

/*
notes:
if you want to create a dynamic visualization you need to follow the "" d3-update pattern: "":

[ let data be the input data for visualization ]

1. data binding:
    it is used to bind the new changed data.

2. exit:
    when you change the data u need to remove the exiting data so as to create the new one.Thus exit is used to delete the previous old visualiztion data on the screen

3. update:
    this is similar to enter but here it will update the already existing data on the screen

4. enter():
    it will create new dom elements if the new data have more in number than the previous data



PS Note:
    we can also use merge it wll automatically update the new elements which will be seen in transitions
*/
