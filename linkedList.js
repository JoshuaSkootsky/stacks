function ListNode(val) {
  this.val = val;
  this.next = null;
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

// try writing addToTail!
// method for delete tail node
// method for searching for node
