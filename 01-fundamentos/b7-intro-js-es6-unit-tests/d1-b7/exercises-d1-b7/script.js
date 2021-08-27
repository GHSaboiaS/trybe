const  testingScope = (escopo) => {
  escopo ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`)
}
testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sorter = array => array.sort( (a, b) => a - b )

// function sorter (array) {
//   return array.sort( (a, b) => a - b);
// }
console.log(sorter(oddsAndEvens));