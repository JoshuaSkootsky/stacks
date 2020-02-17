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

module.exports = { makeStack, makeQueue };
