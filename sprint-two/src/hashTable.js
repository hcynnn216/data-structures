

/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'


/*
 * Complexity: What is the time complexity of the above functions?
 */
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._items = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var flag = false;   
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      flag = true;
      bucket[i][1] = v;
    }
  }
  if (!flag) {
    bucket.push([k, v]);
    this._items++;
  }
  this._storage.set(index, bucket);
  if (this._items / this._limit > .75) {
    this.changeSize(this._limit + this._limit);
  } else if (this._items / this._limit < .25) {
    this.changeSize(Math.ceil(this._limit / 2));
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._items--;
    }
  }
  if (this._items / this._limit > .75) {
    this.changeSize(this._limit + this._limit);
  } else if (this._items / this._limit < .25) {
    this.changeSize(Math.ceil(this._limit / 2));
  }
};

HashTable.prototype.changeSize = function(newSize) {
  var oldStorage = this._storage;
  var oldLimit = this._limit;
  this._limit = newSize;
  this._storage = new LimitedArray(this._limit);
  for (var i = 0; i < oldLimit; i++) {
    var oldBucket = oldStorage.get(i) || [];
    for (var j = 0; j < oldBucket.length; j++) {
      // repeat of insert method
      var key = oldBucket[j][0];
      var value = oldBucket[j][1];
      var index = getIndexBelowMaxForKey(key, this._limit);
      var bucket = this._storage.get(index) || [];
      var flag = false;   
      for (var l = 0; l < bucket.length; l++) {
        if (bucket[l][0] === key) {
          flag = true;
          bucket[l][1] = key;
        }
      }
      if (!flag) {
        bucket.push([key, value]);
      }
      this._storage.set(index, bucket);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


