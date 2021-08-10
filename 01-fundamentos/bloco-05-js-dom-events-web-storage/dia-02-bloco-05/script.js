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