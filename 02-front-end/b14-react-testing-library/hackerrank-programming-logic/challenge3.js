/*
 * Complete the 'count_down' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER x as parameter.
 */

function count_down(x) {
  // Write your code here
  let returnValue = '';
  for (let i = x; i >= 0; i -= 1) {
    if (i === 0) {
      returnValue += `${i}!!!`;
    } else {
      returnValue += `${i}...`;
    }
  }
  return returnValue;
}

count_down(20)