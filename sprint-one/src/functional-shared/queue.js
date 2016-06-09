var Queue = function() {
  var queue = {};
  queue.start = 0;
  queue.end = 0;
  queue.storage = {};
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.end++;
};

queueMethods.dequeue = function() {
  
  this.start = Math.min(this.start + 1, this.end);

};

queueMethods.size = function() {
  return this.end - this.start;
};

