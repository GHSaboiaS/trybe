const  testingScope = (escopo) => {
  escopo ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`)
}
testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sorter = array => array.sort( (a, b) => a - b )
console.log(sorter(oddsAndEvens));

// Part 2
// Exercise 1
const factorial = number => number === 1 ? number *= 1 : number *= factorial (number - 1);
console.log(factorial(5));

// Exercise 2
const longestWord = phrase => {
  let bigLetters = 0;
  let biggestWord;
  for (let i = 0; i < phrase.split(' ').length; i += 1) {
    if (phrase.split(' ')[i].length > bigLetters) {
      biggestWord = phrase.split(' ')[i];
      bigLetters = phrase.split(' ')[i].length;
    }
  }
  return biggestWord
}
console.log(longestWord('Michyael Jordan STEPhanoulpf'))
