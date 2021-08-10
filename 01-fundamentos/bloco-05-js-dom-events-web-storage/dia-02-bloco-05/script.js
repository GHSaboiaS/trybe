// console.log(document.querySelector('ul').parentNode)
// console.log(document.querySelector('ul').parentElement)

// console.log(document.querySelector('ol').childNodes)
// console.log(document.querySelector('ol').children) // returns HTMLCollection

// console.log(document.querySelector('body').firstChild)
// console.log(document.querySelector('.first').firstElementChild)

// console.log(document.querySelector('.first').nextSibling)
// console.log(document.querySelector('.first').nextElementSibling)

// 1
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// 2
let pai = ondeVoceEsta.parentNode;
pai.style.color = "rgb(222, 22, 222)";

// 3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = "Bom dia!";

// 4
// let primeiroFilho = pai.firstElementChild;

// 5
let primeiroFilho = ondeVoceEsta.previousElementSibling;

// 6
let atencao = ondeVoceEsta.nextSibling;

// 7
// let terceiroFilho = ondeVoceEsta.nextElementSibling;

// 8
// let terceiroFilho = pai.childNodes[5];

// 9
let irmaoOndeVoceEsta = document.createElement('section');
// pai.appendChild(irmaoOndeVoceEsta)

// 10
let filhoOndeVoceEsta = document.createElement('p');
filhoOndeVoceEsta.innerText = 'Child paragraph';
// ondeVoceEsta.appendChild(filhoOndeVoceEsta)

// 11
let filhoDoFilhoDoFilho = document.createElement('p');
filhoDoFilhoDoFilho.innerText = 'Little child';
// primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// 12
// let terceiroFilho = filhoDoFilhoDoFilho.parentNode.parentNode.nextElementSibling;

// 13
let childrenNodesPai = pai.childNodes;
let childrenOndeVoceEsta = ondeVoceEsta.childNodes;

for (let counter = childrenNodesPai.length - 1; counter >= 0; counter -= 1) {
    console.log(counter, childrenNodesPai[counter])
    if (counter > 3) {
        pai.removeChild(childrenNodesPai[counter])
    }
}

for (let counter = childrenOndeVoceEsta.length - 1; counter >= 0; counter -= 1) {
    if (counter >= 2) {
        ondeVoceEsta.removeChild(childrenOndeVoceEsta[counter]);
    }
}


