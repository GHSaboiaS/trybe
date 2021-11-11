/*
 * Complete the 'multiples_of_3_or_5' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function multiples_of_3_or_5(roof) {
  // Write your code here
  let total = 0;
  for (let i = roof - 1; i >= 0; i -= 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(multiples_of_3_or_5(10));