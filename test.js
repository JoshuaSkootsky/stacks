// AVA test
// https://github.com/avajs/ava

// const test = require('ava');
const test = require('ava');
const { makeStack, makeQueue, LinkedList, Node } = require('./stackQueue');

test('ava running?', t => {
  t.pass();
});

test('ava async testing running?', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

// test.before(t => {
//   // This runs before all tests
//   // make your linked list and set it up
//   linkedList = new LinkedList();
// });

// custom timeouts in ava
// test('foo', t => {
// 	t.timeout(100); // 100 milliseconds
// 	// Write your assertions here
// });

// stack.add = add;
// stack.peek = peek;
// stack.remove = remove;
// stack.size = length;
test('stack works', t => {
  const stack = makeStack();
  stack.add(1);
  stack.add(2);
  t.is(stack.peek(), 2);
});

test('queue works', t => {
  const queue = makeQueue();
  queue.add(1);
  queue.add(2);
  t.is(queue.peek(), 1);
});

test('linkedList has methods', t => {
  const linkedList = new LinkedList();
  t.is(typeof linkedList.addToTail, 'function');
  t.is(typeof linkedList.addToHead, 'function');
  t.is(typeof linkedList.removeHead, 'function');
  t.is(typeof linkedList.removeTail, 'function');
  t.is(typeof linkedList.search, 'function');
});

test('linked list defaults to falsy', t => {
  const linkedList = new LinkedList();
  t.falsy(linkedList.head);
  t.falsy(linkedList.tail);
  t.falsy(linkedList.removeHead());
});

test('node class is defined', t => {
  function isNative(fn) {
    return /\{\s*\[native code]\s*\}/.test('' + fn);
  }
  t.is(typeof Node, 'function');
  t.falsy(isNative(Node));
});

test('Node class takes values', t => {
  const node = new Node('test');
  t.is(node.value, 'test');
  t.is(node.next, null);
  t.is(node.previous, null);
});

test('Linked list uses Node class', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('first');
  t.truthy(linkedList.tail instanceof Node);
});

test('Adding a node to head, it is set as head and tail', t => {
  const linkedList = new LinkedList();
  linkedList.addToHead('first');
  t.is(linkedList.head.value, 'first');
  t.falsy(linkedList.head.next);
  t.falsy(linkedList.head.previous);
  t.is(linkedList.head, linkedList.tail);
});

test('Return the head when head is removed', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('first');
  linkedList.addToTail('second');
  linkedList.addToTail('third');
  t.is(linkedList.removeHead(), 'first');
  t.is(linkedList.removeHead(), 'second');
  t.is(linkedList.removeHead(), 'third');
});

test('Make sure prev of new HEAD node is NULL', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('first');
  linkedList.addToTail('second');
  linkedList.addToTail('third');
  t.is(linkedList.removeHead(), 'first');
  t.is(linkedList.head.previous, null);
});

test('Next of any new TAIL is also NULL', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('first');
  linkedList.addToTail('second');
  linkedList.addToTail('third');
  t.is(linkedList.removeTail(), 'third');
  t.is(linkedList.tail.next, null);
});

test('can add to head or tail in any order', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('second');
  linkedList.addToHead('first');
  linkedList.addToTail('third');
  t.is(linkedList.removeHead(), 'first');
  t.is(linkedList.removeHead(), 'second');
  t.is(linkedList.removeHead(), 'third');
});

test('returns tail on removeTail', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('second');
  linkedList.addToHead('third');
  linkedList.addToTail('first');
  t.is(linkedList.removeTail(), 'first');
  t.is(linkedList.removeTail(), 'second');
  t.is(linkedList.removeTail(), 'third');
});

test('removes head and tail when last node is removed', t => {
  const linkedList = new LinkedList();
  t.is(linkedList.removeHead(), null);
  linkedList.addToTail('one');
  t.is(linkedList.removeHead(), 'one');
  t.is(linkedList.removeHead(), null);
  t.is(linkedList.head, null);
  t.is(linkedList.tail, null);
});

test('search function works', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('one');
  linkedList.addToTail('two');
  linkedList.addToTail('three');
  linkedList.addToTail('four');
  linkedList.addToTail('one');
  t.is(linkedList.search('sdd'), null);
  t.is(linkedList.search('three'), 'three');
});

test('take strings and functions as search parameters', t => {
  const linkedList = new LinkedList();
  linkedList.addToTail('one');
  linkedList.addToTail('two');
  const foundNodeVal = linkedList.search(nodeValue => {
    return nodeValue === 'two';
  });
  t.is(foundNodeVal, 'two');
});

test('more complex test of taking a function as a parameter', t => {
  const linkedList = new LinkedList();
  function UserNode(name, email, city) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
  linkedList.addToHead(
    new UserNode('Joshua', 'joshua@awesome.com', 'New York')
  );
  linkedList.addToHead(
    new UserNode('David', 'david@schroding.com', 'New York')
  );
  linkedList.addToHead(new UserNode('April', 'april@awesome.com', 'Chicago'));

  const foundNode1 = linkedList.search(userNode => {
    return userNode.name === 'Joshua';
  });
  t.is(foundNode1.email, 'joshua@awesome.com');

  const foundNode2 = linkedList.search(userNode => {
    return userNode.email === 'david@schroding.com';
  });
  t.is(foundNode2.city, 'New York');

  const foundNode3 = linkedList.search(userNode => {
    return userNode.city === 'Chicago';
  });
  t.is(foundNode3.name, 'April');
});
