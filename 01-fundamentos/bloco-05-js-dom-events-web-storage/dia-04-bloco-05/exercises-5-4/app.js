let background = document.querySelector("#background");
let textColor = document.querySelector("#textColor");
let fontSize = document.querySelector("#fontSize");
let spacing = document.querySelector("#spacing");
let fontFamily = document.querySelector("#fontFamily");
let body = document.querySelector("body");

window.onload = function() {
    addStyle();
    initialRenderization();
}

function addStyle() {
    let userPreferencesDict = JSON.parse(localStorage.getItem("userPreferences"));
    console.log(userPreferencesDict);
}

function initialRenderization() {
    if (localStorage.getItem("userPreferences") === null) {
        localStorage.setItem("userPreferences", JSON.stringify(
            userDict = {
            background: [],
            textColor: [],
            fontSize: [],
            spacing: [],
            fontFamily: [],
        }));
    }
}

function getValue(originEvent) {
    let inputBackground = background.value;
    let inputTextColor = textColor.value;
    let inputFontSize = fontSize.value;
    let inputSpacing = spacing.value;
    let inputFontFamily = fontFamily.value;
    let keyPressed = originEvent.which || originEvent.keyCode;
    let element = originEvent.target;
    if (keyPressed === 13) {
        let elementId = element.id;
        let elementValue = element.value;
        addInputToDataStructure(elementId, elementValue);
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

function addInputToDataStructure(elementId, elementValue) {
    let userPreferencesDict = JSON.parse(localStorage.getItem("userPreferences"));
    userPreferencesDict[elementId].push(elementValue);
    addDataToLocalStorage()
}

function addDataToLocalStorage() {
    let oldDict = JSON.parse(localStorage.getItem("userPreferences"));
    userPreferencesDict[elementId].push(elementValue);
    localStorage.setItem("userPreferences", JSON.stringify(oldDict));
    console.log(userPreferencesDict)
}