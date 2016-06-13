var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastElementIndex = 1;
  var firstElementIndex = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastElementIndex] = value;
    lastElementIndex++;
  };

  someInstance.dequeue = function() {
    var result = storage[firstElementIndex];
    delete storage[firstElementIndex];
    firstElementIndex = Math.min(firstElementIndex + 1, lastElementIndex);
    return result;
  };

  someInstance.size = function() {
    return lastElementIndex - firstElementIndex;
  };

  return someInstance;
};

var someQueue = Queue();
someQueue.enqueue(1);
console.log(someQueue.dequeue());
