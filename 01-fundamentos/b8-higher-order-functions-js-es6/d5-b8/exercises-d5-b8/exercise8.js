const assert = require('assert');

const greet = (personName, greeting = 'Hi') => `${greeting} ${personName}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');