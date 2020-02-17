[![EO principles respected here](http://www.elegantobjects.org/badge.svg)](http://www.elegantobjects.org "Elegant Objects") [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT "MIT License")

# stacks
Stacks, Queues, and Linked Lists

First, you install it

```
$ npm i -D
```

Then, to test the data structures:

```
$ npm test
```

# AVA

I find AVA delightful.

I am writing my tests with [AVA](https://github.com/avajs/ava#documentation "AVA Documentation"). My theory is that if I make it easy for me to write tests, and calculate test coverage, I'm more likely to write tests going forward. So why not try it out on data structures?


# Crockford Objects

The stack and queue classes here are written in a style that uses objects without classes, and achieve extension/inheritance through composition.

The advantage to putting fields and methods in closures is that true object privacy is achieved - something impossible with ES6 style class syntax.