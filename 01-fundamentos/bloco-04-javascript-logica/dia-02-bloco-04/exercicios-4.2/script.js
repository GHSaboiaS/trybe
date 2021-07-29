let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let size = numbers.length;

// Exercício 1
// for (let counter = 1; counter < size; counter += 1) {
//     console.log(numbers[counter]);
// }

// for (let number in numbers) {
//     console.log(numbers[number]);
// }

// Exercício 2
// let sum = 0;
// for (let number in numbers) {
//     sum += numbers[number];
// }
// console.log(sum);

// Exercício 3
// let sum = 0;
// for (let number in numbers) {
//     sum += numbers[number];
// }
// let average = sum/size;
// console.log(average);

// Exercício 4
// let sum = 0;
// for (let number in numbers) {
//     sum += numbers[number];
// }
// let average = sum/size;
// if (average > 20) {
//     console.log('average:', average, '\nvalor maior que 20');
// }
// else {
//     console.log('average:', average, '\nvalor menor ou igual a 20');
// }

// Exercício 5
let largest = 0;
for (number in numbers) {
    if (numbers[number] > largest) {
        largest = numbers[number];
    }
}
console.log(largest);