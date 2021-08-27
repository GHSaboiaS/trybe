if (true) {
  // inicio do escopo do if
  let userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
// console.log(userAge); // 20

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

function sum (num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 2));

const mult = function (num1, num2) {
  return num1 * num2;
}
console.log(mult(2, 3));

const sub = (num1, num2) => {
  return num1 - num2;
}
console.log(sub(3, 2));

const add3 = (num1, num2, num3) => num1 + num2 + num3;
console.log(add3(1, 2, 3));

const countWords = phrase => phrase.split(' ').length;
console.log(countWords('Fala Tobi, beleza?'));

const person = (name, age) => ({name: name, age: age}); // if no (), JS considers what's after => to be the function's body, does not expect an object
console.log(person('Guilherme', 23));

const checkSum = (1 + 1) === 3 ? 'no way' : 'i am from canada';
console.log(checkName)

const checkName = personName => personName === 'Guilherme' ? 'nice name' : 'loser name';
console.log(checkName('Guilherme'))