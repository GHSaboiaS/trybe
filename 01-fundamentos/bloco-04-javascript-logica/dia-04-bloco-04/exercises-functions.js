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
    let indexOfLargest = array.indexOf(largest);
    for (let key in array) {
        if (array[key] > largest) {
            largest = array[key];
            indexOfLargest = key;
        } else {
            {};
        }
    }
    return indexOfLargest;
}
let testArray = [2, 4, 6, -7, 10, 0, -3, 10];
// console.log(getLargest(testArray))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
function getSmallest(array) {
    let smallest = array[0];
    let indexOfSmallest = array.indexOf(smallest);
    for (let key in array) {
        if (array[key] < smallest) {
            smallest = array[key];
            indexOfSmallest = key;
        } else {
            {};
        }
    }
    return indexOfSmallest;
}
// console.log(getSmallest(testArray))

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
let testArrayString = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function getLongest(array) {
    let longest = array[0];
    let sizeOfLongest = longest.length;
    for (item of array) {
        if (item.length > sizeOfLongest) {
            longest = item;
            sizeOfLongest = item.length;
        } else {
            {};
        }
    }
    return longest;
}
// console.log(getLongest(testArrayString))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
let myArray = [2, 3, 2, 5, 8, 2, 3];
function getMostRepeated(array) {
    let myObj = {};
    for (item of array) {
        if (item in myObj) {
            myObj[item] += 1;
        } else {
            myObj[item] = 1;
        }
    }
    let mostRepeated = Object.keys(myObj)[0];
    for (key in myObj) {
        if (myObj[key] > mostRepeated) {
            mostRepeated = key;
        }
    }
    return mostRepeated;
}
// console.log(getMostRepeated(myArray))

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
function sumUpToN(n) {
    let total = 0
    for (let counter = 1; counter <= n; counter += 1) {
        total += counter;
    }
    return total;
}
// console.log(sumUpToN(6))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
function isEnd(word, ending) {
    let wordSize = word.length;
    let endingSize = ending.length;
    for (counter = -1; counter >= -endingSize; counter -= 1) {
        lastItemWord = word.charAt(wordSize + counter);
        if (lastItemWord === ending.charAt(endingSize + counter)) {
            {};
        } else {
            return false;
        }
    }
    return true
}
console.log(isEnd('trybe', 'ybe'))