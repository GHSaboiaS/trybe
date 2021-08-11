function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createCalendarDays() {
  let ulDays = document.querySelector("#days");
  for (let day of dezDaysList) {
    let currentLi = document.createElement("li");
    currentLi.classList.add("day");
    currentLi.innerText = day;
    if (day === 24 || day === 25 || day === 31) {
      currentLi.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      currentLi.classList.add("friday");
    }
    ulDays.appendChild(currentLi);
  }
}
createCalendarDays()

// 2
function createButton(holidays) {
  let buttonsContainer = document.querySelector(".buttons-container");
  let holidaysButton = document.createElement("button");
  holidaysButton.innerText = holidays;
  holidaysButton.classList.add("btn-holiday");
  buttonsContainer.appendChild(holidaysButton)
}
createButton("Feriados");

// 3
function changeHolidaysBackground() {
  let holidays = document.getElementsByClassName("holiday");
  for (holiday of holidays) {
    let holidaysBackground = holiday.style.background;
    if (holidaysBackground === "rgb(238, 238, 238)" || holidaysBackground === "") {
      holiday.style.background = "rgb(38, 38, 38)";
    } else {
      holiday.style.background = "rgb(238, 238, 238)";
    }
  }
}
let holidaysButton = document.querySelector(".btn-holiday")
holidaysButton.addEventListener("click", changeHolidaysBackground);

// 4
function createFriday(friday) {
  let buttonsContainer = document.querySelector(".buttons-container");
  let fridayButton = document.createElement("button");
  fridayButton.innerText = friday;
  buttonsContainer.appendChild(fridayButton);
}
createFriday("Sexta-Feira");