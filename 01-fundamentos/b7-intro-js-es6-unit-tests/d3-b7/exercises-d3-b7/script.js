// Section 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Test 1
// Check if sum(4, 5) returns 9
assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9');

// Test 2
// Check if sum(0, 0) returns 0
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');

// Test 3
// Check if sum(4, "5") throws an error
assert.throws(() => {
  sum(4, "5");
}, /^Error: parameters must be numbers$/);

// Section 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Test 1
assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Wrong array');

// Test 2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Wrong array');

// Tests 3 and 4
const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Array must remain unchanged when item not in it');

// Section 3
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}

// Test 1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Wrong array');

// Test 2
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Array unchanged');

// Test 3
const myList2 = [1, 2, 3, 4];
myRemoveWithoutCopy(myList2, 2);
assert.notDeepStrictEqual(myList2, [1, 2, 3, 4], 'Array unchanged');

// Test 4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Array changed incorrectly');

// Section 4
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Test 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Should return fizzbuzz');

// Test 2
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Should return fizz');

// Test 3
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Should return buzz');

// Test 4
assert.strictEqual(myFizzBuzz(8), 8, 'Should return 8');

// Test 5
assert.ok(!myFizzBuzz('hey'), 'Should return false');