/*
 * Complete the 'nth_prime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function nth_prime(n) {
  // Write your code here
  let primes = [];
  for (let i = 1; i < n * (n ** (1 / 2)); i += 1) {
    let divisors = [];
    for (let t = 1; t <= i; t += 1) {
      if (i % t === 0) {
        divisors.push(t);
      }
    }
    if (divisors.length === 2) {
      primes.push(i);
    }
  }
  return primes[n - 1];
}

nth_prime(100);