var DoubleLinkedList = function() {
	var list = LinkedList();

	list.addToHead = function(value) {
		var node = Node(value);
		if (list.head === null) {
			list.head = node;
			list.tail = node;
		} else {
			node.next = list.head;
			list.head = node;
		}
	};

	list.removeTail = function() {
		var node = list.tail;
		list.tail = list.tail.previous;
		if (list.tail !== null) {
			list.tail.next = null;
		}
		return node.value;
	};
	return list;
}