const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * 100);

const function1 = (str) => str.toUpperCase();

const function2 = (str) => str[0];

const function3 = (str1, str2) => str1 + str2;

const getDog = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const result = await fetch(URL);
  const resultJSON = await result.json();
  return resultJSON;
}

module.exports = { randomNumber, function1, function2, function3, getDog }