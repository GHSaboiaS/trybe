let infoMargarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

// Exercise 1
//console.log('Bem-vinda,', info.personagem);

// Exercise 2
infoMargarida.recorrente = 'Sim'; // info['recorrente'] = 'Sim';
// console.log(info);

// Exercise 3
for (let key in info) {
    // console.log(key);
}

// Exercise 4
for (let key in info) {
    // console.log(info[key]);
}

