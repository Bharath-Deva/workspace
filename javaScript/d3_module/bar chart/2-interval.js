//interval is set
var a = setInterval(() => {
  console.log("hello world");
}, 1000);
setTimeout(() => clearInterval(a), 5000);

d3.interval(() => {
  console.log("d3_setInterval");
}, 2000); //this cannot be stoped like setInterval function using clearInterval

console.log("testing interval after interval function");