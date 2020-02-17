// AVA test
// https://github.com/avajs/ava

// const test = require('ava');
const test = require('ava');
const { makeStack, makeQueue, LinkedList } = require('./stackQueue');

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

/*


  it('starts with head and tail falsy', () => {
    expect(linkedList.head).toBeFalsy()
    expect(linkedList.tail).toBeFalsy()
    expect(linkedList.removeHead()).toBeFalsy()
  })

  it('has a Node class defined to represent a node', () => {
    // `isNative` is a helper function used by this spec.
    // There is already an object called `Node` in the browser (unrelated to the "Node"s in our Linked List),
    // so this function makes sure that we're using YOUR Node.
    function isNative (fn) {
      return (/\{\s*\[native code]\s*\}/).test('' + fn)
    }
    expect(typeof Node).toBe('function')
    expect(isNative(Node)).toBe(false)
  })

  it('Node class should take a value argument and define next and previous to be null by default', () => {
    const node = new Node('test')
    expect(node.value).toBe('test')
    expect(node.next).toBe(null)
    expect(node.previous).toBe(null)
  })

  it('linkedlist should use Node class to add nodes', () => {
    linkedList.addToTail('first')
    expect(linkedList.tail instanceof Node).toBe(true)
  })

  it('if a single node is added to head, it should be set to head and tail', () => {
    linkedList.addToHead('first')
    expect(linkedList.head.value).toBe('first')
    expect(linkedList.head.next).toBeFalsy()
    expect(linkedList.head.previous).toBeFalsy()
    expect(linkedList.head).toBe(linkedList.tail)
  })

  it('should return the head on a removeHead', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.removeHead()).toBe('second')
    expect(linkedList.removeHead()).toBe('third')
  })

  it('should make sure the previous of any newly appointed HEAD is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.head.previous).toBe(null)
  })

  it('should make sure the next of any newly appointed TAIL is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeTail()).toBe('third')
    expect(linkedList.tail.next).toBe(null)
  })

  it('should be able to add to head or tail', () => {
    linkedList.addToTail('second')
    linkedList.addToHead('first')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.removeHead()).toBe('second')
    expect(linkedList.removeHead()).toBe('third')
  })

  it('should return the tail on a removeTail', () => {
    linkedList.addToTail('second')
    linkedList.addToHead('third')
    linkedList.addToTail('first')
    expect(linkedList.removeTail()).toBe('first')
    expect(linkedList.removeTail()).toBe('second')
    expect(linkedList.removeTail()).toBe('third')
  })

  it('should remove head and tail when last node is removed', () => {
    expect(linkedList.removeHead()).toBeFalsy()
    linkedList.addToTail('one')
    expect(linkedList.removeHead()).toBe('one')
    expect(linkedList.removeHead()).toBeFalsy()
    expect(linkedList.head).toBeFalsy()
    expect(linkedList.tail).toBeFalsy()
  })

  it('should return the correct values for search', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    linkedList.addToTail('three')
    linkedList.addToTail('four')
    linkedList.addToTail('one')
    expect(linkedList.search('two')).toBe('two')
    expect(linkedList.search('sdd')).toBe(null)
    expect(linkedList.search('one')).toBe('one')
    expect(linkedList.search('four')).toBe('four')
  })

  it('should be able to take strings and functions both as search inputs', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    const foundNode = linkedList.search((nodeValue) => {
      return nodeValue === 'two'
    })
    expect(foundNode).toBe('two')
  })

  // This spec demonstrates the utility of the previous spec.
  // If you are passing the last one correctly, this one should already pass!
  it('should therefore be able to store and search for objects, not just strings', () => {
    function UserNode (name, email, city) {
      this.name = name
      this.email = email
      this.city = city
    }

    linkedList.addToHead(new UserNode('Nimit', 'nimit@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('David', 'david@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('Paul', 'paul@yc.com', 'Mountain View'))

    const foundNode1 = linkedList.search((userNode) => {
      return userNode.name === 'Nimit'
    })
    expect(foundNode1.email).toBe('nimit@fs.com')

    const foundNode2 = linkedList.search((userNode) => {
      return userNode.email === 'david@fs.com'
    })
    expect(foundNode2.city).toBe('New York')

    const foundNode3 = linkedList.search((userNode) => {
      return userNode.city === 'Mountain View'
    })
    expect(foundNode3.name).toBe('Paul')
  })

  */
