var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.length = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

stackMethods.pop = function() { 
  var result = this.storage[this.length];
  delete this.storage[this.length];
  this.length = Math.max(this.length - 1, 0);
  return result;
};

stackMethods.size = function() {
  return this.length;
};