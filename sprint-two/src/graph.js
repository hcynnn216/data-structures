

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
  this.edgeIndex = 0;    
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] === undefined ? false : true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i in this.edges) {
    if ((this.edges[i][fromNode] !== undefined) && (this.edges[i][toNode] !== undefined)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = {};
  edge[fromNode] = fromNode;
  edge[toNode] = toNode;
  this.edges[this.edgeIndex] = edge;
  this.edgeIndex++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i in this.edges) {
    if ((this.edges[i][fromNode] !== undefined) && (this.edges[i][toNode] !== undefined)) {
      delete this.edges[i];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


