//exercise.js
let fruits = [3, 5, 2, 2, 4];
let sum = 0;

for (let counter = 0; counter < fruits.length; counter += 1) {
    sum += fruits[counter];
}

if (sum > 15) {
    console.log(sum);
}
else {
    console.log('valor menor que 16');
}