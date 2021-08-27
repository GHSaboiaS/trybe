const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

//
// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// Link: https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
function getSiblings(element) {
    let siblings = [];
    let sibling = element.parentNode.firstChild;

    // if no parent, return no sibling
    if (!element.parentNode) {
        return siblings;
    }

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== element) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}
function addTech(originEvent) {
    let element = originEvent.target;
    let siblings = getSiblings(element);
    for (sibling of siblings) {
        let classList = sibling.classList;
        if (classList.contains("tech")) {
            classList.remove("tech");
        }
    }
    element.classList.add('tech');
}
firstLi.addEventListener("click", addTech)
secondLi.addEventListener("click", addTech)
thirdLi.addEventListener("click", addTech)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeTechText() {
    let techElement = document.querySelector(".tech");
    techElement.innerText = input.value;
}
input.addEventListener("input", changeTechText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function redirect() {
    window.location.href = "https://ghsaboias.github.io";
}
myWebpage.addEventListener("click", redirect);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeBackground(originEvent) {
    let myTop = originEvent.target;
    myTop.style.background = "black";
}
function resetBackground(originEvent) {
    let myTop = originEvent.target;
    myTop.style.background = "rgb(51, 51, 51)";
}
myWebpage.addEventListener("mouseenter", changeBackground);
myWebpage.addEventListener("mouseleave", resetBackground);

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

