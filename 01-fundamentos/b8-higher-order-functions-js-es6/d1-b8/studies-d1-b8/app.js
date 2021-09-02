// functions in JS are treated as first-class-citizens (first-class-functions), they can be attributed to variables, passed as arguments, returned by other functions
// arrow functions attribute functions to variables

// attributing function to variable
function sum (number1, number2) {
  return number1 + number2;
}
const sumVariable = sum;
// console.log(sumVariable);
//  [Function: sum]

// passing function as argument to other function
const sayHello = () => {
  return ('hello trybers');
}
const printGreeting = (callback) => {
    console.log(callback());
}
// printGreeting(sayHello);

// return a function from inside a function
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}
const initialSum = sumFixAmount(15)
// console.log(initialSum(5));


// building a HOF
const repeat1 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
// repeat1(5, console.log);

// complicating a bit (defining function on the call)
const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};
const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};
// repeat2(3, isEven);
// repeat2(3, isOdd);

// Practice
const goodMorning = () => {
  return 'gm say it back';
};
const drinkCoffee = () => {
  return 'slurp the coffeerino';
};
const goodNight = () => {
  return 'gn say it back';
};
const doingThings = (func) => {
  console.log(func());
}
doingThings(drinkCoffee);