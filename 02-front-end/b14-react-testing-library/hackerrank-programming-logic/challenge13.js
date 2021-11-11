/*
 * Complete the 'digits_sum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number_s as parameter.
 */

function digits_sum(number_s) {
  // Write your code here
  const MAX = 1000;
  let sumMatches = 0;
  for (let i = 1; i <= MAX; i += 1) {
    const hundreds = Math.floor(i / 100);
    const tenths = Math.floor((i - hundreds * 100) / 10);
    const units = i - hundreds * 100 - tenths * 10;
    
    if ((hundreds + tenths + units) === number_s) {
      sumMatches += 1;
    }
  }
  
  return sumMatches;
}

digits_sum(26)