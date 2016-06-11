var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      var leftChild = new BinarySearchTree(value);
      this.left = leftChild;
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      var rightChild = new BinarySearchTree(value);
      this.right = rightChild;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left !== null && this.value > value ) {
    return this.left.contains(value);
  } else if (this.right !== null && this.value < value) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } else if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
