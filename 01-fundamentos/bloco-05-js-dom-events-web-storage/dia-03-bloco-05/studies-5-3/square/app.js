let input = document.querySelector("#input");
let quadrado = document.querySelector(".quadrado");
input.addEventListener("keyup", changeColor);

function changeColor(originEvent) {
    console.log('input', input.value);
    quadrado.style.background = input.value;
    // console.log(originEvent.code)
    console.log('background', quadrado.style.background)
}