var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastElementIndex = 0;
  var firstElementIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    lastElementIndex++;
    storage[lastElementIndex] = value;
  };

  someInstance.dequeue = function() {
    firstElementIndex++;
    if (lastElementIndex < firstElementIndex ) { lastElementIndex = firstElementIndex; }
    var result = storage[firstElementIndex];
    delete storage[firstElementIndex];
    if (lastElementIndex < 0) {
      lastElementIndex = 0;                   
    }
    return result;
  };

  someInstance.size = function() {
    return lastElementIndex - firstElementIndex;
  };

  return someInstance;
};
