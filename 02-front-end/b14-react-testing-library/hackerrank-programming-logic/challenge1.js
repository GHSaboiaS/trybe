/*
 * Complete the 'fahrenheit_to_celsius' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER temp_fahrenheit as parameter.
 */

function fahrenheit_to_celsius(temp_fahrenheit) {
  // Write your code here
  const temp_celsius = (temp_fahrenheit - 32) / 1.8;
  return temp_celsius.toFixed(1);
}

fahrenheit_to_celsius(62);