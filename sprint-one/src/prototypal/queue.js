var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.start = 0;
  queue.end = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  var result = this.storage[this.start];
  delete this.storage[this.start];
  this.start = Math.min(this.start + 1, this.end);
  return result;
};

queueMethods.size = function() {
  return this.end - this.start;
};
