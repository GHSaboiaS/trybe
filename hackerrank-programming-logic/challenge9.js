/*
 * Complete the 'smallest_multiple' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function smallest_multiple(roof) {
  // Write your code here
  const MAX = 10000;
  const divisors = [];
  for (let j = 1; j <= roof; j += 1) {
    divisors.push(j);
  }

  let smallestMultiple;
  for (let i = 1; i <= MAX; i += 1) {
    if (divisors.every((divisor) => i % divisor === 0)) {
      smallestMultiple = i;
      return smallestMultiple;
    }
  }
}

smallest_multiple(10);