let background = document.querySelector("#background");
let textColor = document.querySelector("#textColor");
let fontSize = document.querySelector("#fontSize");
let spacing = document.querySelector("#spacing");
let fontFamily = document.querySelector("#fontFamily");
let body = document.querySelector("body");

function getValue(originEvent) {
    let inputBackground = background.value;
    let inputTextColor = textColor.value;
    let inputFontSize = fontSize.value;
    let inputSpacing = spacing.value;
    let inputFontFamily = fontFamily.value;
    let keyPressed = originEvent.which || originEvent.keyCode;
    let element = originEvent.target;
    if (keyPressed === 13) {
        let userInput = element.value;
        addInputToLocalStorage(userInput);
        if (element.id === "background") {
            body.style.background = inputBackground;
        } else if (element.id === "textColor") {
            body.style.color = inputTextColor;
        } else if (element.id === "fontSize") {
            body.style.fontSize = inputFontSize;
        } else if (element.id === "spacing") {
            body.style.wordSpacing = inputSpacing;
        } else if (element.id === "fontFamily") {
            body.style.fontFamily = inputFontFamily;
        } else {
            console.log(element);
        }
    }
}

background.addEventListener("keydown", getValue);
textColor.addEventListener("keydown", getValue);
fontSize.addEventListener("keydown", getValue);
spacing.addEventListener("keydown", getValue);
fontFamily.addEventListener("keydown", getValue);

function initialRenderization() {
    if (localStorage.getItem("userData") === null) {
        localStorage.setItem("userData", JSON.stringify([]));
    } else {
        let userDataList = JSON.parse(localStorage.getItem("userData"));
        // console.log("userDataList: ", userDataList)
    }
}

function addInputToLocalStorage(input) {
    let oldList = JSON.parse(localStorage.getItem("userData"));
    let userInput = input;
    oldList.push(userInput);
    localStorage.setItem("userData", JSON.stringify(oldList));
}

function addStyle() {
    let userDataList = JSON.parse(localStorage.getItem("userData"));
    let listLength = userDataList.length;
    let userBackground = userDataList[listLength - 1];
    body.style.background = userBackground;
}

window.onload = function() {
    initialRenderization();
    addStyle();
}
// console.log(JSON.parse(random));

// let random = {
//     name: "Google",
//     age: 23,
// }

// funcionando para o background
// ideia: guardar no local storage como dicionário? atributo: lista de valores