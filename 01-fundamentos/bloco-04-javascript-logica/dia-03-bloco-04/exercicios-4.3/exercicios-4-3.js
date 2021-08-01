// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
function buildSquare(n) {
    for (let counter = 1, asteriscs = '*****'; counter <= n; counter += 1) {
        console.log(asteriscs);
    }
}
buildSquare(5);

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
function buildTriangle(n) {
    for (let counter1 = 1, asterisc = '*'; counter1 <= n; counter1 += 1) {
        console.log(asterisc.repeat(counter1));
    }
}
// buildTriangle(5);

// 3- Agora inverta o lado do triângulo.
function buildInvertedTriangle(n) {
    for (let counter = 1, asterisc = '*', space = ' '; counter <= n; counter += 1) {
        process.stdout.write(space.repeat(n - counter) + asterisc.repeat(counter) + '\n');
    }
}
// buildInvertedTriangle(5);

// 4- Depois, faça uma pirâmide com n asteriscos de base:
function buildPiramid(n) {
    for (let counter = 1, asterisc = '*', space = ' '; counter <= n; counter += 2) {
        process.stdout.write(space.repeat((n - counter) / 2) + asterisc.repeat(counter) + space.repeat((n - counter) / 2) + '\n');
    }
}
// buildPiramid(10);

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
function weirdPiramid(n) {
    for (let counter = 1, asterisc = '*', space = ' '; counter <= n; counter += 2) {
        if (counter == 1) {
            process.stdout.write(space.repeat((n - counter) / 2) + asterisc.repeat(counter) + space.repeat((n - counter) / 2) + '\n');
        }
        else if (counter < n) {
            process.stdout.write(space.repeat((n - counter) / 2) + asterisc + space.repeat(counter - 2) + asterisc + space.repeat((n - counter) / 2) + '\n');
        }
        else if (counter == n) {
            process.stdout.write(asterisc.repeat(n));
        }
    }
}
// weirdPiramid(11);

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
function isPrimo(n) {
    let divisorCounter = 0;
    let divisors = [];
    for (let index = n; index > 0; index -= 1) {
        if (n % index == 0) {
            divisorCounter += 1;
            divisors.push(index)
        }
    }
    if (divisorCounter != 2) {
        console.log(n + ' não é primo\nTem ' + divisorCounter + ' divisores');
        console.log(divisors);
    }
    else {
        console.log(n + ' é primo');
        console.log(divisors);
    }
    console.log(divisors.sort(function (a, b) { return a - b }));
}
// isPrimo(2304)
