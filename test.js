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
