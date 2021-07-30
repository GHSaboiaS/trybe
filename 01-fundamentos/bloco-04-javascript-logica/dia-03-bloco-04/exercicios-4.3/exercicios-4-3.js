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
buildTriangle(5);