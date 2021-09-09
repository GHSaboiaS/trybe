const assert = require('assert');
const { report } = require('process');

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((accum, element) => accum + element); // 'accum' receives from 'reduce' the return of the function at each iteration
// console.log(sumNumbers); // 113

// Or:

const getSum = (accum, element) => accum + element;
const sumNumbers2 = numbers.reduce(getSum);
// console.log(sumNumbers2); // 113

// You can pass a second parameter to 'reduce', and it will be the initial value for the accumulator

const getSum2 = (result, number) => {
  // console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers3 = numbers.reduce(getSum2, 10);
// console.log(sumNumbers3); // 123

// Finding biggest value
const numbers2 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers2.reduce(getBigger, numbers2[0]);
// console.log(bigger); // 85

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Solution using reduce only
const sumEven = (accum, element) => (element % 2 === 0) ? accum + element : accum;
const sumOfEven = numbers3.reduce(sumEven);
// console.log(sumOfEven);

// Solution using filter and reduce
const getEven = (element) => element % 2 === 0;
const sumEven2 = (accum, element) => accum + element;
const sumOfEven2 = numbers3.filter(getEven).reduce(sumEven2);
// console.log(sumOfEven2)

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const expectedResult = [
  { name: 'Jorge', subject: 'Português' },
  { name: 'Mario', subject: 'Biologia' },
  { name: 'Jorge', subject: 'Português' },
  { name: 'Maria', subject: 'Química' },
  { name: 'Natalia', subject: 'Português' },
  { name: 'Wilson', subject: 'Português' },
];

const getBiggestGrade = (bigger, element) =>  element.nota >= bigger.nota ? element : bigger;

const reportBest = (array) => array.map((student) => ({
  name: student.nome,
  subject: student.materias.reduce(getBiggestGrade).name,
}))

assert.deepStrictEqual(reportBest(estudantes), expectedResult);