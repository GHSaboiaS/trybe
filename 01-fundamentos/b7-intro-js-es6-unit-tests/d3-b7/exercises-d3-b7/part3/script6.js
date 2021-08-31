const assert = require("assert");

// Section 1
const greetPeople = (people) => {
  const helloArray = [];
  for (let person in people) {
    let greeting = 'Hello ';
    greeting += `${people[person]}`;
    helloArray.push(greeting);
  }
  return helloArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);