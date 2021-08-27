// Objetos
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos.');
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita ' + player.bestInTheWorld.length + ' vezes a melhor do mundo.');
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// Arrays
let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true,
}

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];

// For/in itera nas chaves
// for (let key in pizzasDoces) {
//     console.log(key, pizzasDoces[key])
// }

// // For/of itera nos valores
// for (let value of pizzasDoces) {
//     console.log('value:', value);
// }

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};
// for (let name in names) {
//     console.log('Olá,', names[name])
// }

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
// delete car['manufacturer']; // delete car.manufacturer
for (let property in car) {
    console.log('property:', property, '\nvalue:', car[property]);
}

let size = Object.keys(car).length
console.log(size)