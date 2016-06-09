var Queue = function() {
  this.start = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.start];
  delete this.storage[this.start];
  this.start = Math.min(this.start + 1, this.end);
  return result;
};

Queue.prototype.size = function() {
  return this.end - this.start;
};
