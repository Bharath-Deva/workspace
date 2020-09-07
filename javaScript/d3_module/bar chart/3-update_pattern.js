/* if u want to bind a data we should try to follow genral update pattern.
    the pattern says that :
        1-step: we should join the data => data(array)
        2-step: we should remove the old binded data => .exit().remove()
        3-step: we should update the pattern => append("rect")
*/

// ######################################################



// JOIN new data with old elements.
var rects = g.selectAll("rect")
    .data(data);

// EXIT old elements not present in new data.
rects.exit().remove();

// UPDATE old elements present in new data.
rects
    .attr("y", function (d) { return y(d.revenue); })
    .attr("x", function (d) { return x(d.month) })
    .attr("height", function (d) { return height - y(d.revenue); })
    .attr("width", x.bandwidth);

// ENTER new elements present in new data.
rects.enter()
    .append("rect")
    .attr("y", function (d) { return y(d.revenue); })
    .attr("x", function (d) { return x(d.month) })
    .attr("height", function (d) { return height - y(d.revenue); })
    .attr("width", x.bandwidth)
    .attr("fill", "grey");

