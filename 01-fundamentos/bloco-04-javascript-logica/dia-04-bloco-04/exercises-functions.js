// Exercício 1
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
function verificaPalindrome(string) {
    let reversedString = string.split('').reverse().join('');
    if (reversedString === string) {
        return true;
    } else {
        return false;
    }
}
// console.log(verificaPalindrome('arara'))

// Exercício 2
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
function getLargest(array) {
    let largest = array[0];
    for (let item of array) {
        if (item > largest) {
            largest = item;
        } else {
            {};
        }
    }
    return largest;
}
let testArray = [-2, -3, -6, -7, -10, -1];
// console.log(getLargest(testArray))

