/*
 * Complete the 'largest_prime_factor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function largest_prime_factor(number) {
  // Write your code here
  let divisors = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  console.log(divisors);
}

largest_prime_factor(20);