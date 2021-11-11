/*
 * Complete the 'sum_square_difference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function sum_square_difference(n) {
  // Write your code here
  let squareOfSum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    squareOfSum += i;
    sumOfSquares += i ** 2;
  }

  squareOfSum *= squareOfSum;

  return squareOfSum - sumOfSquares;
}