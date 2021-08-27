// Exercício 1
function calculadora(a, b, operation) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'erro: insira números válidos';
    }
    
    switch (operation) {
        case 'adição':
            return a + b;
        case 'subtração':
            return a - b;
        case 'multiplicação':
            return a * b;
        case 'divisão':
            return a / b;
        case 'módulo':
            return a % b;
        default:
            return 'operação inválida';
    }
}
// console.log(calculadora(10, 5, 'subtração'));

//Exercício 2
function maiorDe2(a, b) {
    if (a > b) {
        console.log(a);
    }
    else if (b > a) {
        console.log(b);
    }
    else if (a == b) {
        console.log(a);
    }
    else {
        console.log('argumentos da função devem ser números');
    }
}
// maiorDe2(10, 11);

// Exercício 3
function maiorDe3(a, b, c) {
    if (a > b && a > c || a == b && a > c || a == c && a > b) {
        console.log(a);
    }
    else if (b > a && b > c || b == c && b > a) {
        console.log(b);
    }
    else if (c > a && c > b) {
        console.log(c);
    }
    else if (a == b == c) {
        console.log('números iguais');
    }
    else {
        console.log('insira apenas números');
    }
}
// maiorDe3(10, 1, 11);

// Exercício 4
function signal(a) {
    if (a > 0) {
        console.log('positive');
    }
    else if (a < 0) {
        console.log('negative');
    }
    else {
        console.log('zero');
    }
}
// signal(0);

// Exercício 5
function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'erro: insira ângulos válidos';
    }

    let sum = a + b + c;
    let triangle = null;
    if (a + b + c == 180) {
        triangle = true;
        return triangle;
    }
    else if (a + b + c != 180) {
        triangle = false;
        return triangle;
    }
}
// console.log(isTriangle(1, 1, 'aa'));

// Exercício 6
function chess(piece) {
    if (typeof piece != 'string') {
        return 'erro: insira uma peça válida';
    }

    let lowerPiece = piece.toLowerCase();
    if (lowerPiece != 'pawn' && lowerPiece != 'bishop' && lowerPiece != 'knight' && lowerPiece != 'rook' && lowerPiece != 'queen' && lowerPiece != 'king') {
        return 'erro: insira uma peça válida';
    }

    switch(lowerPiece) {
        case 'pawn':
            return 'pawn -> straight';
        case 'bishop':
            return 'bishop -> diagonals';
        case 'knight':
            return 'knight -> L shape';
        case 'rook':
            return 'rook -> straight';
        case 'queen':
            return 'queen -> any direction';
        case 'king':
            return 'king -> any direction';
    }
}
// console.log(chess(3));

// Exercício 7
function convertGrade(grade) {
    if (typeof grade != 'number') {
        return 'erro: insira um número';
    }
    else if (grade > 100 || grade < 0) {
        return 'erro: insira uma nota válida';
    }
    else if (grade >= 90) {
        return 'A';
    }
    else if (grade >= 80) {
        return 'B';
    }
    else if (grade >= 70) {
        return 'C';
    }
    else if (grade >= 60) {
        return 'D';
    }
    else if (grade >= 50) {
        return 'E';
    }
    else if (grade < 50) {
        return 'F';
    }
    else {
        return 'erro: desconhecido';
    }
}
// console.log(convertGrade(65));

// Exercício 8
function isAtLeastOneEven(a, b, c) {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
        return 'erro: insira um número';
    }
    else if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isAtLeastOneEven(16, 14, 21));

// Exercício 9
function isAtLeastOneOdd(a, b, c) {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
        return 'erro: insira um número';
    }
    else if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isAtLeastOneOdd(11, 21, 21));

// Exercício 10
function profit1000(custo, preco) {
    if (typeof custo != 'number' || typeof preco != 'number') {
        return 'erro: insira números';
    }
    else if (custo < 0 || preco < 0) {
        return 'erro: insira valores válidos';
    }

    let impostoSobreOCusto = 0.2 * custo;
    let valorCustoTotal = custo + impostoSobreOCusto;
    let lucroUmProduto = preco - valorCustoTotal;
    let lucroTotal = lucroUmProduto * 1000;
    
    return lucroTotal;
} 
// console.log(profit1000(1, 2));

// Exercício 11
function salarioLiquido(salarioBruto) {
    if (typeof salarioBruto != 'number' || salarioBruto < 0) {
        return 'erro: insira um salário válido';
    }

    // INSS
    let aliquotaINSS;
    if (salarioBruto <= 1556.94) {
        aliquotaINSS = 0.08 * salarioBruto;
    }
    else if (salarioBruto <= 2594.92) {
        aliquotaINSS = 0.09 * salarioBruto;
    }
    else if (salarioBruto <= 5189.92) {
        aliquotaINSS = 0.11 * salarioBruto;
    }
    else {
        aliquotaINSS = 570.88;
    }
    
    // salarioBase
    let salarioBase = salarioBruto - aliquotaINSS;
    
    // IR
    let impostoRenda;
    let deducao;
    if (salarioBase <= 1903.98) {
        impostoRenda = 0;
        deducao = 0;
    }
    else if (salarioBase <= 2826.65) {
        impostoRenda = 0.075;
        deducao = 142.8;
    }
    else if (salarioBase <= 3751.05) {
        impostoRenda = 0.15;
        deducao = 354.8;
    }
    else if (salarioBase <= 4664.68) {
        impostoRenda = 0.225;
        deducao = 636.13;
    }
    else {
        impostoRenda = 0.275;
        deducao = 869.36;
    }

    let impostoTotal = (impostoRenda * salarioBase) - deducao; 
    let salarioLiquido = salarioBase - impostoTotal;

    return salarioLiquido;
} 
// console.log(salarioLiquido(2500));
