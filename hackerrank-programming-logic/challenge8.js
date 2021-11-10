/*
 * Complete the 'caixa' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY values as parameter.
 */

function caixa(values) {
  // Write your code here
  for (let j = 0; j < values.length; j += 1) {
    for (let i = 0; i < values.length; i += 1) {
      if (values[i] === 0) {
        values.splice(values.indexOf(0) - 1, 1);
        values.splice(values.indexOf(0), 1);
      }
    }
  }
  return values.reduce((accum, value) => accum + value, 0);
}

const testArray = [1, 2, 3, 0, 5, 0, 0, 7];
caixa(testArray);
// must return [1, 7]