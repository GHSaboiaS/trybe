const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

// Testing my implementation
function myFind(func, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i])) {
      console.log(array[i]);
    }
  }
}

// myFind((item) => item % 2 === 0, numbers)

// Find first divisible by 3 and 5
const findDivisibleBy3And5 = (number) => {
  return (number % 3 === 0 && number % 5 === 0);
}
// console.log(numbers.find(findDivisibleBy3And5))

// Find first name with five letters
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  return name.length === 5;
}
// console.log(names.find(findNameWithFiveLetters))

// Find music by id
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(musica) {
  return musica.id === '31031685';
}

console.log(musicas.find(findMusic).title)

