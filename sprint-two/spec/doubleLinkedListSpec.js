describe('doubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(doubleLinkedList.addToTail).to.be.a('function');
    expect(doubleLinkedList.removeHead).to.be.a('function');
    expect(doubleLinkedList.contains).to.be.a('function');
    expect(doubleLinkedList.addToHead).to.be.a('function');
    expect(doubleLinkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function() {
    doubleLinkedList.addToHead(3);
    expect(doubleLinkedList.head.value).to.equal(3);
    doubleLinkedList.addToHead(2);
    expect(doubleLinkedList.head.value).to.equal(2);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doubleLinkedList.addToHead(1);
    doubleLinkedList.addToHead(0);
    expect(doubleLinkedList.head.value).to.equal(0);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(1);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doubleLinkedList.addToTail(6);
    doubleLinkedList.addToTail(7);
    expect(doubleLinkedList.tail.value).to.equal(7);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.tail.value).to.equal(6);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doubleLinkedList.addToHead(0);
    expect(doubleLinkedList.removeHead()).to.equal(0);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doubleLinkedList.addToTail(7);
    expect(doubleLinkedList.removeTail()).to.equal(7);
  });

  it('should contain a value that was added', function() {
    doubleLinkedList.addToTail(7);
    doubleLinkedList.addToHead(0);
    expect(doubleLinkedList.contains(0)).to.equal(true);
    expect(doubleLinkedList.contains(7)).to.equal(true);
    expect(doubleLinkedList.contains(8)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doubleLinkedList.addToTail(8);
    doubleLinkedList.addToTail(9);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.contains(9)).to.equal(false);
  });

  // add more tests here to test the functionality of doubleLinkedList
});
