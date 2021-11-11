/*
 * Complete the 'largest_prime_factor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function largest_prime_factor(number) {
  // Write your code here
  const divisors = [];
  // getting divisors of number
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  
  let primeDivisors = [];
  // iterating through divisors array
  for (let n = 0; n < divisors.length; n += 1) {
    let divisorDivisors = [];
    // getting divisors of divisor
    for (let t = 1; t <= divisors[n]; t += 1) {
      if (divisors[n] % t === 0) {
        divisorDivisors.push(t);
      }
    }

    // getting prime divisors
    if (divisorDivisors.length === 2) {
      primeDivisors.push(divisors[n]);
    }
  }
  
  return primeDivisors[primeDivisors.length - 1];
}
