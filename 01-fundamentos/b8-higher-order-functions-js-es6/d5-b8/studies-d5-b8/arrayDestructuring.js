const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// practice 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

const [param, func] = saudacoes;
// func(param);

// practice 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

const arr = [bebida, comida, animal];
[comida, animal, bebida] = arr;
// console.log(comida, animal, bebida)

// practice 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

const [, , , firstEven, secondEven, thirdEven, fourthEven] = numerosPares;
numerosPares = [firstEven, secondEven, thirdEven, fourthEven];
console.log(numerosPares)
