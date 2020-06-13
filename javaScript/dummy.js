var person = function (_name, _age, _job) {
  this.name = _name;
  this.age = _age;
  this.job = _job;
};

var john = new person("JOHN", 26, "TEACHER");
console.log(john);
