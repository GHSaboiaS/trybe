const assert = require('assert');

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

const id = (id) => ({id,})
// console.log(id(12))

assert.deepStrictEqual(newUser(54, 'isabella', 'isabella@email.com'), { id: 54, name: 'isabella', email: 'isabella@email.com' });

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

assert.deepStrictEqual(getPosition(-19.8157, -43.9542), { latitude: -19.8157, longitude: -43.9542 });
