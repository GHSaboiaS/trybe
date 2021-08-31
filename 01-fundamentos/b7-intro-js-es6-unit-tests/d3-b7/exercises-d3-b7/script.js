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

