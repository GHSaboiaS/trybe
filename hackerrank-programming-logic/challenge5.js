/*
 * Complete the 'even_fibonacci_numbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function even_fibonacci_numbers(roof) {
  // Write your code here
  let fibonacci = [1, 2];
  let total = 2;
  for (let i = 0; i < roof; i += 1) {
    const fiboLength = fibonacci.length;
    const nextNumber = fibonacci[fiboLength - 1] + fibonacci[fiboLength - 2];
    if (nextNumber >= roof) {
      return total;
    }
    fibonacci.push(nextNumber);
    if (nextNumber % 2 === 0) {
      total += nextNumber;
    }
  }
}

even_fibonacci_numbers(100);