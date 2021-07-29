let coins = ['ETH', 'BTC', 'LINK', 'SOL'];

coins.sort();
coins.push('LUNA');
coins.unshift('sETH');
// coins.pop('LUNA');
let coinsLength = coins.length;
let btc = coins[coins.indexOf('BTC')];
let sol = coins[coins.indexOf('SOL')];

console.log(coins);
console.log(sol);
console.log(coinsLength);

// for/of retorna item da lista, não altera o array
for (let letter of btc) {
    console.log(letter);
}

// for (let index = 0; index < coinsLength; index += 1) {
//     console.log('Moeda:', coins[index]);
// }
let prices = [2300, 40000, 2310, 20, 30, 12];

for (let price of prices) {
    price += 1;
    console.log(price);
}

for (let coin of coins) {
    let price = prices[coins.indexOf(coin)];
        console.log('Coin:', coin, '\nPrice:', price);
}



