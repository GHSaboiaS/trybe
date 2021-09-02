const assert = require('assert');
function removeMiddle(array) {
  const length = array.length;
  const middle = (length - 1) / 2;
  array = array.splice(middle, 1);
  return array;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);