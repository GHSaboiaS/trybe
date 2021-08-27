let background = document.querySelector("#background");
let textColor = document.querySelector("#textColor");
let fontSize = document.querySelector("#fontSize");
let spacing = document.querySelector("#spacing");
let fontFamily = document.querySelector("#fontFamily");
let body = document.querySelector("body");

window.onload = function() {
    initialRenderization();
    addStyle();
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

function addStyle() {
    let userPreferencesDict = JSON.parse(localStorage.getItem("userPreferences"));
    let backgroundLength = userPreferencesDict.background.length - 1;
    let textColorLength = userPreferencesDict.textColor.length - 1;
    let fontSizeLength = userPreferencesDict.fontSize.length - 1;
    let spacingLength = userPreferencesDict.spacing.length - 1;
    let fontFamilyLength = userPreferencesDict.fontFamily.length - 1;
    body.style.background = userPreferencesDict.background[backgroundLength];
    body.style.color = userPreferencesDict.textColor[textColorLength];
    body.style.fontSize = userPreferencesDict.fontSize[fontSizeLength];
    body.style.wordSpacing = userPreferencesDict.spacing[spacingLength];
    body.style.fontFamily = userPreferencesDict.fontFamily[fontFamilyLength];
}



function getValue(originEvent) {
    let element = originEvent.target;
    let elementId = element.id;
    let elementValue = element.value;
    let inputBackground = background.value;
    let inputTextColor = textColor.value;
    let inputFontSize = fontSize.value;
    let inputSpacing = spacing.value;
    let inputFontFamily = fontFamily.value;
    let keyPressed = originEvent.which || originEvent.keyCode;
    if (keyPressed === 13) {
        addInputToDataStructure(elementId, elementValue);
        // document.body.style.setProperty('--name', value);
        if (elementId === "background") {
            body.style.background = inputBackground;
        } else if (elementId === "textColor") {
            body.style.color = inputTextColor;
        } else if (elementId === "fontSize") {
            body.style.fontSize = inputFontSize;
        } else if (elementId === "spacing") {
            body.style.wordSpacing = inputSpacing;
        } else if (elementId === "fontFamily") {
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
    addDataToLocalStorage(userPreferencesDict)
}

function addDataToLocalStorage(userDict) {
    localStorage.setItem("userPreferences", JSON.stringify(userDict));
}