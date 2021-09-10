const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Sources: https://flexiple.com/flatten-array-javascript/ and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function flatten() {
  const flatArray = arrays.reduce((acc, curEl) => {
    return acc.concat(curEl)
  }, []);
  return flatArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);