var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.size = 0;
  stack.storage = {};
  _.extend(stack, stackMethods);
  return stack;
};

stackMethods = {};
stackMethods.push = function(value) {
  this.size++;
  this.storage[this.size] = value;
};

stackMethods.pop = function() {
  this.size --;
  var result = this.storage[this.size];
  delete this.storage[this.size];
  return result;
};

stackMethods.size = function() {
  return this.size;
};