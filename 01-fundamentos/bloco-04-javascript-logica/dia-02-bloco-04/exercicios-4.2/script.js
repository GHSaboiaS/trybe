let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let size = numbers.length;

// ==== Exercício 1 ====
// for (let counter = 1; counter < size; counter += 1) {
//     console.log(numbers[counter]);
// }
// for (let number of numbers) {
//     console.log(number);
// }

// ==== Exercício 2 ====
// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// console.log(sum);

// ==== Exercício 3 ====
// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// let average = sum/size;
// console.log(average);

// ==== Exercício 4 ====
// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// let average = sum/size;
// if (average > 20) {
//     console.log('average:', average, '\nvalor maior que 20');
// }
// else {
//     console.log('average:', average, '\nvalor menor ou igual a 20');
// }

// ==== Exercício 5 ====
// let largest = 0;
// for (let number of numbers) {
//     if (number > largest) {
//         largest = number;
//     }
// }
// console.log(largest);

// ==== Exercício 6 ====
// let oddCounter = 0;
// for (let number of numbers) {
//     if (number % 2 != 0) {
//         oddCounter += 1;
//     }
// }
// if (oddCounter == 0) {
//     console.log('nenhum valor ímpar encontrado');
// }
// else {
//     console.log(oddCounter, 'valores ímpares encontrados');
// }

// ==== Exercício 7 ====
// let smallest = numbers[0];
// for (let number of numbers) {
//     if (number < smallest) {
//         smallest = number;
//     }
// }
// console.log(smallest);

// ==== Exercício 8 ====
let array = [];
for (let counter = 1; counter <= 25; counter += 1) {
    array.push(counter);
}
// console.log(array);
// ==== Exercício 9 ====
// for (number of array) {
//     console.log(number/2);
// }

// ==== Bônus ====
// 1. Ordem crescente
// for (let after = 1; after < size; after += 1) {
//     for (let before = 0; before < after; before += 1) {
//         if (numbers[after] < numbers[before]) {
//             let position = numbers[after];
//             numbers[after] = numbers[before];
//             numbers[before] = position;
//         }
//     }
// }
// console.log(numbers);

// 2. Ordem decrescente
// for (let after = 1; after < size; after += 1) {
//     for (let before = 0; before < after; before += 1) {
//         if (numbers[after] > numbers[before]) {
//             let position = numbers[after];
//             numbers[after] = numbers[before];
//             numbers[before] = position;
//         }
//     }
// }
// console.log(numbers)

// 3. Novo array
let newArray = [];
for (let counter = 0; counter < size; counter += 1) {
    if (counter == size - 1) {
        newArray.push(numbers[counter] * 2);
    }
    else {
        newArray.push(numbers[counter] * numbers[counter + 1]);
    }
}
console.log(numbers);
console.log(newArray);
