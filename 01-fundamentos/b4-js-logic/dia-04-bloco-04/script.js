let firstName = 'Guilherme';
let lastName = 'Saboia';
let age = 23;
let favoriteFood = 'Parmegiana de frango';
let family = ['Claudio', 'Giselly', 'Fernando'];

let eu = {
    firstName: 'Guilherme',
    lastName: 'Saboia',
    age: 23,
    favoriteFood: 'Parmegiana de frango',
    family: ['Claudio', 'Giselly', 'Fernando'],
    bornInfo: {
        city: 'São Paulo',
        state: 'São Paulo'
    },
    'favorite-cryptos': ['ETH', 'LINK', 'BTC']
}

eu['fullName'] = eu.firstName + ' ' + eu.lastName;
console.table(eu)
console.log(eu.bornInfo.city)
console.log(eu['favorite-cryptos'])