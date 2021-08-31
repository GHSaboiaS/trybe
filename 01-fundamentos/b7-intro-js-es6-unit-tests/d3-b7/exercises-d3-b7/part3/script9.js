const assert = require('assert');

// Section 4
function secondThirdSmallest(array) {
  let results = []
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (i === 1 || i === 2) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);