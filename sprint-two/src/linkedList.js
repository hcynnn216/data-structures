var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var node = list.head;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.previous = null;
    }
    return node.value;
  };

  list.contains = function(target) {
    var node = list.head;
    while ((node !== null) && (node.value !== target)) {
      node = node.next;
    }
    return node !== null ? true : false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
