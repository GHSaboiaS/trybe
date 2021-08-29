const button = document.querySelector('button');
const main = document.querySelector('main');
let clickCount = 0;

const clickCounter = () => {
  clickCount += 1;
  let counter;
  if (clickCount === 1) {
    counter = document.createElement('span');
    counter.innerHTML = clickCount;
    main.appendChild(counter);
  } else {
    counter = document.querySelector('span');
    counter.innerHTML = clickCount;
  }
}
button.addEventListener('click', clickCounter);