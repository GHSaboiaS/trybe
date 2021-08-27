// let trafficLight = "amarelo";

// switch (trafficLight) {
//     case "vermelho":
//         console.log("Pare");
//         break;

//     case "amarelo":
//         console.log("Atenção");
//         break;

//     case "verde":
//         console.log("Siga");
//         break;

//     default:
//         console.log("Valor não identificado");
//         break;
// }

let nota = 100;
let status;

if (nota >= 80) {
    status = 'aprovada';
}
else if (nota < 80 && nota >= 60) {
    status = 'lista';
}
else {
    status = 'reprovada';
}

// a condição é avaliada apenas uma vez
switch (status) {
    case 'aprovada':
        console.log("Parabéns, você foi aprovado(a)!");
        break;

    case 'lista':
        console.log("Você está na nossa lista de espera!");
        break;

    case 'reprovada':
        console.log("Você foi reprovado(a)!");
        break;

    default:
        console.log('Não se aplica!');
        break;
}