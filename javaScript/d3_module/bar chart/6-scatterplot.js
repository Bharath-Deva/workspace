var margin = { left: 100, right: 10, top: 10, bottom: 100 };

var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [6, 5, 4, 3, 2, 1]

var repeat = setInterval(() => {
    arr = arr == arr1 ? arr1.slice(1) : arr1
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
    // .domain(arr)
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3)

//y-scale
var y = d3
    .scaleLinear()
    // .domain([0, 7])
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
//"" Transition ""

var t = d3.transition().duration(3000)

function update(arr) {

    //x,y-updated domain
    x.domain(arr)
    y.domain([0, d3.max(arr)])


    //Y-AXIS
    var yaxis = d3.axisLeft(y);
    yaxisgroup.transition(t).call(yaxis)

    //X-AXIS
    var xaxis = d3.axisBottom(x);
    xaxisgroup.call(xaxis)

    //update pattern
    //1. join data
    var barchart = g
        .selectAll("circle")
        .data(arr, (d) => d);

    //2. exit elements
    barchart.exit()
        .attr("fill", "red")
        .transition(t)
        .attr("cy", y(7))
        .attr("r", 0)
        .remove()


    // enter: used to create the new elements

    barchart.enter()
        .append("circle")
        // .attr("x", function (d) {

        //     return x(d)
        // })
        .attr("cy", y(0))
        .attr("cx", x(0))
        .attr("r", 10)
        .attr("width", x.bandwidth)
        .attr("fill", "grey")
        .merge(barchart) //merge will update the old elements
        .transition(t)
        .attr("cx", function (d) {
            // console.log(d, x(d))
            return x(d) + (x.bandwidth() / 2)
        })
        .attr("cy", (d) => y(d))
        .attr("r", 10)

}
