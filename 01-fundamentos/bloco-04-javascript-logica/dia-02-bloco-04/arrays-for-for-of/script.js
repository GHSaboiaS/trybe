let coins = ['ETH', 'BTC', 'LINK', 'SOL'];

coins.sort();
coins.push('LUNA');
coins.unshift('sETH');
// coins.pop('LUNA');
let btc = coins[coins.indexOf('BTC')];
let coinsLength = coins.length;
let sol = coins[coins.indexOf('SOL')];

console.log(coins);
console.log(sol);
console.log(coinsLength);

for (let letter of btc) {
    console.log(letter);
}

// for (let index = 0; index < coinsLength; index += 1) {
//     console.log('Moeda:', coins[index]);
// }

let prices = [2300, 40000, 2310, 20, 30, 12];
for (let coin of coins) {
    let price = prices[coins.indexOf(coin)];
        console.log('Moeda:', coin, '\nPrice:', price);
}



