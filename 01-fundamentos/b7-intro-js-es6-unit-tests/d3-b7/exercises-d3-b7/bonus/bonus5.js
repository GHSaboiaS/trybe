const assert = require('assert');

function verify(password) {
  if (password === null) {
    throw new Error('password should not be null');
  }
  if (password.length <= 8) {
    throw new Error('password should be larger than 8 chars');
  }
  if (password.toLowerCase() === password) {
    throw new Error('password should have one uppercase letter at least');
  }
  if (password.toUpperCase() === password) {
    throw new Error('password should have one lowercase letter at least');
  }
  if (!parseInt(password)) {
    throw new Error('password should have one number at least');
  }
}

// Tests
assert.strictEqual(typeof verify, 'function');

assert.throws(() => {
  verify('12345');
}, /^Error: password should be larger than 8 chars$/);

assert.throws(() => {
  verify(null);
}, /^Error: password should not be null$/);

assert.throws(() => {
  verify('abcdefghi');
}, /^Error: password should have one uppercase letter at least$/);

assert.throws(() => {
  verify('ABCDEFGHI');
}, /^Error: password should have one lowercase letter at least$/);

assert.throws(() => {
  verify('abCdeFHji');
}, /^Error: password should have one number at least$/);