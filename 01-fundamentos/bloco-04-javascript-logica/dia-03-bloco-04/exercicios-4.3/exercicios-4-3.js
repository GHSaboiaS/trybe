// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
function buildSquare(n) {
    for (let counter = 1; counter <= n; counter += 1) {
        for (let counter = 1; counter <= n; counter += 1) {
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }
}
// buildSquare(5);

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
function buildTriangle(n) {
    let asterisc = '*';
    for (let counter1 = 1; counter1 <= n; counter1 += 1) {
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
        else {
            process.stdout.write(space.repeat((counter - 1) / 2)+ asterisc + space.repeat (counter - 2) + asterisc + space.repeat((counter - 1) / 2) + '\n')
        }
    }
}
weirdPiramid(10);