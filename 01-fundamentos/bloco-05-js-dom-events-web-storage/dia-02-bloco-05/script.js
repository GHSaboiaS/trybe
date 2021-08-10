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
primeiroFilhoDoFilho.innerHTML = "Bom dia!";

// 4
// let primeiroFilho = pai.firstElementChild;

// 5
let primeiroFilho = ondeVoceEsta.previousElementSibling;

// 6
let atencao = ondeVoceEsta.nextSibling;

// 7
// let terceiroFilho = ondeVoceEsta.nextElementSibling;

// 8
let terceiroFilho = pai.childNodes[5];

// 9
let irmaoOndeVoceEsta = document.createElement('section');
// let textNode = document.createTextNode('Water');
// irmaoOndeVoceEsta.appendChild(textNode);
pai.appendChild(irmaoOndeVoceEsta)

// 10
let filhoOndeVoceEsta = document.createElement('p');
let pInnerText = document.createTextNode('Child paragraph');
filhoOndeVoceEsta.appendChild(pInnerText);
ondeVoceEsta.appendChild(filhoOndeVoceEsta)