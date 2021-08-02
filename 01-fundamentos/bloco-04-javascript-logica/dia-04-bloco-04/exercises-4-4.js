let info = {
    infoMargarida: {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim',
    },
    infoPatinhas: {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'Sim',
    }
}
let size = Object.keys(info).length;
// Exercise 1
// console.log('Bem-vinda,', info.infoMargarida.personagem);

// Exercise 2
// infoMargarida.recorrente = 'Sim'; // info['recorrente'] = 'Sim';
// console.log(info);

// Exercise 3
for (let key in info) {
    // console.log(key);
}

// Exercise 4
for (let key in info) {
    // console.log(info[key]);
}

// Exercise 5
let personagens = [], origens = [], notas = [], recorrentes = [];
function getInfo(info) {
    for (let key in info) {
        for (let specificKey in info[key]) {
            if (specificKey === 'personagem') {
                personagens.push(info[key][specificKey]);
            } else if (specificKey === 'origem') {
                origens.push(info[key][specificKey]);
            } else if (specificKey === 'nota') {
                notas.push(info[key][specificKey]);
            } else if (specificKey === 'recorrente') {
                recorrentes.push(info[key][specificKey]);
            }
        }
    }
}
// console.log(personagens)
// getInfo(info)
function printInfo() {
    getInfo(info);
    for (let counter = 0; counter < size - 1; counter += 1) {
        console.log(personagens[counter], 'e', personagens[counter + 1]);
        console.log(origens[counter], 'e', origens[counter + 1]);
        console.log(notas[counter], 'e', notas[counter + 1]);
        if (recorrentes[counter] === recorrentes[counter + 1]) {
            console.log('Ambos recorrentes');
        }
    }    
}
printInfo(info)


