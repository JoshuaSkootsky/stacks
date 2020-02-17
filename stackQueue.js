// make a queue, make a stack
function makeStack() {
  let stack = [];

  let add = val => {
    stack = stack.concat(val);
  };

  let peek = () => stack[stack.length - 1];
  let remove = () => stack.pop();
  let length = () => stack.length;

  stack.add = add;
  stack.peek = peek;
  stack.remove = remove;
  stack.size = length;

  return Object.freeze(stack);
}

function makeQueue() {
  let queue = [];
  let add = function(val) {
    queue = [val].concat(queue);
  };

  let peek = function() {
    return queue[queue.length - 1];
  };

  let remove = function() {
    queue.shift();
  };
  let size = () => queue.length;

  queue.add = add;
  queue.peek = peek;
  queue.remove = remove;
  queue.size = size;

  return Object.freeze(queue);
}

// LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }

  addToHead(value) {
    const newNode = new Node(value);
    if (this.head) this.head.previous = newNode;
    else this.tail = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  removeHead() {
    if (!this.head) return null;
    const removedHead = this.head;
    if (!removedHead.next) {
      this.head = null;
      this.tail = null;
      return removedHead.value;
    }
    const next = removedHead.next;
    next.previous = null;
    this.head = next;
    return removedHead.value;
  }

  removeTail() {
    if (!this.tail) return null;
    const removedTail = this.tail;
    if (!removedTail.previous) {
      this.tail = null;
      this.head = null;
      return removedTail.value;
    }
    const previous = removedTail.previous;
    previous.next = null;
    this.tail = previous;
    return removedTail.value;
  }

  // current node, while curr.next = truthy, keep looking
  search(param) {
    let current = this.head;
    if (typeof param === 'function') {
      while (current) {
        console.log(current.value);
        if (param(current.value)) {
          return current.value;
        }
        current = current.next;
      }
      console.log('about to return null in function loop');
      return null;
    }
    while (current) {
      if (current.value === param) return current.value;
      current = current.next;
    }
    return null;
  }
}

function Node(value = null) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

module.exports = { makeStack, makeQueue, LinkedList };
