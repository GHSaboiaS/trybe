const assert = require('assert'); // Sintax for including assert module

assert.strictEqual(50, 50, 'Expected number 50'); // No errors: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 === 70

function division(x, y) {
  return x / y;
}

// assert.strictEqual(division(10, 0), 0); // Will return error, because infinity !== 0

const expected1 = division(9, 3);

assert.strictEqual(expected1, 3, 'Nine divided by 3 is equal to 3'); // assert(expected1 === 3, 'Nine divided by 3 is equal to 3')

function add(a, b) {
  return a + b;
}

const expected2 = add(1, 2);

assert.ok(expected2 === 3, 'One plus one is equal to three'); // Checks if first argument is true
assert.strictEqual(expected2, 3, 'One plus one is equal to three'); // Checks if first and second arguments are equal in value and type (===)
assert.notStrictEqual(expected2, 4, 'One plus one is equal to three (and not four!)'); // Checks if first and second arguments are different (!==)

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Error: list1 and list2 are not strictly equal');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Error: person1 and person2 are not strictly equal');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Error: values of objects are strictly equal');

// assert.strictEqual(typeof myFunction, 'function'); // good for starting, checking if function exists