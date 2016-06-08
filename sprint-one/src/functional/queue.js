var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
  };

  someInstance.dequeue = function() {
    size--;
    if (size < 0) {
      size = 0;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
