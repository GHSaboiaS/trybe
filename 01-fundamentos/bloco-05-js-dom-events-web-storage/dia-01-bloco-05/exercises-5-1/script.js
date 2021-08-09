let header = document.querySelector("header");
header.style.backgroundColor = "rgb(0, 176, 105)";

let emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "rgb(255, 159, 132)";

let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "rgb(249, 219, 94)";

let urgent = document.querySelectorAll(".emergency-tasks div h3");
for (let item of urgent) {
    item.style.backgroundColor = "rgb(165, 0, 243)";
}

let notUrgent = document.querySelectorAll(".no-emergency-tasks div h3");
for (let item of notUrgent) {
    item.style.backgroundColor = "rgb(35, 37, 37)";
}

let footer = document.querySelector("#footer-container");
console.log(footer)
footer.style.backgroundColor = "rgb(0, 53, 51)";