var Stack = function() {
  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

Stack.prototype.pop = function() { 
  var result = this.storage[this.length];
  delete this.storage[this.length];
  this.length = Math.max(this.length - 1, 0);
  return result;
};

Stack.prototype.size = function() {
  return this.length;
};
