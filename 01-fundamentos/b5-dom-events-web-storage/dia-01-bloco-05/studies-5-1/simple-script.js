const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.querySelector("#page-title").innerText = "Avatar";
document.querySelector("#subtitle").innerText = "Um filme à frente de seu tempo!";
document.querySelector("#second-paragraph").innerText = "O melhor filme da história!"

let pArray = document.querySelectorAll("p");
for (let i = 0; i < pArray.length; i+= 1) {
    pArray[i].classList.add("addedClass");
}

let elementsAddedClass = document.querySelectorAll(".addedClass");
elementsAddedClass[0].style.color = "blue";

let h4 = document.querySelector("h4");
h4.style.color = "blue"