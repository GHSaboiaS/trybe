// apiScript.js
const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { Accept: 'application/json' },
//   }
  
//   fetch(API_URL, myObject)
//     .then((response) => response.json())
//     .then((rJSON) => rJSON.joke)
//     .then((joke) => console.log(joke));
// };

// // window.onload = () => fetchJoke();
// fetchJoke()

// Source: https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
const promise = new Promise((resolve, reject) => {
  const numNums = 10;
  const maxNum = 50;
  const numsArr = Array.from({length: numNums}, () => Math.floor(Math.random() * maxNum));
  const numsArrSq = numsArr.map((num) => num ** 2);
  const totalSq = numsArrSq.reduce((acc, curr) => { return acc + curr }, 0);
  if (totalSq >= 9000) {
    return reject(totalSq);
  }
  resolve(totalSq);
})
.then((total) => [ 2, 3, 5, 10 ].map((element) => Math.floor(total / element)))
.then((arr) => arr.reduce((acc, curr) => acc + curr))
.then((sum) => console.log('Promise resolved:', sum))
.catch(() => console.log('It\'s over 9000! Promise broken!'));
