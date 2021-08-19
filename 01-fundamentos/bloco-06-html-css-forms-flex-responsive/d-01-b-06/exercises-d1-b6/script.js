const selectState = document.getElementById('state');
const states = ['Acre', 'Alagos', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

const userName = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const type = Array.from(document.getElementsByName('type'));

const resume = document.getElementById('resume');
const jobTitle = document.getElementById('job-title');
const jobDescription = document.getElementById('job-description');
const startDate = document.getElementById('start-date');
const button = document.querySelector('button');

const userData = document.querySelector('#user-data');

for (let i = 0; i < states.length; i += 1) {
  const newOption = document.createElement('option');
  newOption.innerText = states[i];
  selectState.appendChild(newOption);
}

function getRadioValues() {
  if (!type[0].checked && !type[1].checked) {
    return false;
  } else {

  }
}

function checkDate(day, month, year) {
  if (day <= 0 || day > 31) {
    alert('Insert a valid day.');
  }
  if (month <= 0 || month > 12) {
    alert('Insert a valid month.');
  }
  if (year < 1920) {
    alert('Insert a valid year.');
  }
}

function getStartDate(originEvent) {
  originEvent.preventDefault();
  const inputStartDate = startDate.value.split('/');
  const userDay = inputStartDate[0];
  const userMonth = inputStartDate[1];
  const userYear = inputStartDate[2];
  checkDate(userDay, userMonth, userYear);
  checkUserInfo();
}

function createUserObj() {
  for (let i = 0; i < type.length; i += 1) {
    if (type[i].checked) {
      const shelter = type[i];
      const userObj = {'name': userName.value, 'email': email.value, 'cpf': cpf.value, 'address': address.value, 'city': city.value, 'state': state.value, 'shelter': shelter.value, 'resume': resume.value, 'jobTitle': jobTitle.value, 'jobDescription': jobDescription.value, 'startDate': startDate.value};
      createUserDiv(userObj);
    }
  }
}

function createUserDiv(userObj) {
  const userDataDiv = document.createElement('div');
  for (let key = 0; key < Object.keys(userObj).length; key += 1) {
    const newItem = document.createElement('p');
    newItem.innerText = `${Object.keys(userObj)[key]}: ${userObj[Object.keys(userObj)[key]]}`;
    userDataDiv.appendChild(newItem);
  }
  userData.appendChild(userDataDiv);
}

function checkUserInfo() {
  const typeCheck = getRadioValues();
  if (!userName.value || !email.value || !cpf.value || !address.value || !city.value || !state.value || typeCheck || !resume.value || !jobTitle.value || !jobDescription.value || !startDate.value) {
    alert('All fields are required.')
  } else {
    createUserObj(); 
  }
}

button.addEventListener('click', getStartDate)