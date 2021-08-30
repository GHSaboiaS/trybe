const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const customer2 = {
  firstName: 'Guilherme',
  age: 23,
  job: 'Student',
};

const lastNameKey = 'lastName';
// using var as key (in dot notation) does not make var value the key, but makes var name as key
customer1.lastName = 'Faria';
customer2[lastNameKey] = 'Saboia';

// console.log(customer1);
// console.log(customer2);

function addPropertyToObject (obj, key, value) {
  obj[key] = value;
  return obj;
}
// console.log(addPropertyToObject(customer2, 'dog', 'Tobias'));

// can use Object.keys to list indices of list
const objKeys = Object.keys(customer2);
// console.log(objKeys);

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // added key 
};

const showSkills = (student) => {
  const objKeys = Object.keys(student);
  const objValues = Object.values(student);
  for (let i in objKeys) {
    console.log(`${objKeys[i]}, Nível: ${objValues[i]}`);
  }
}
// showSkills(student1);
// showSkills(student2);

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Without Object.values
// console.log(listSkillsValuesWithFor(student1));

// With Object.values
// console.log(listSkillsValuesWithValues(student1));

// returns array of arrays with key:value pairs. Key is string, value can be any type
// can be used in strings (which will be treated as arrays)
// console.log(Object.entries(student2));
for (let [key, value] of Object.entries(student2)) {
  // console.log(`${key}: ${value}`);
}

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

// Object.assign(person, info, family)
// Adds key:value pairs from info, family into person. If person contains a key that is in one of the objects being assigned, its value will be overwritten by the value of that key in the assigned object
// console.log(person)

const newPerson = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

// Object returned by Object.assign is the destiny object (in this case, newPerson). When assigning Object.assign to a variable, we get another path for accessing the destiny object
// const clone = Object.assign(newPerson, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(newPerson); // { name: 'Roberto', lastName: 'Silva' }
// If clone is changed, person is changed
// clone.name = 'Guilherme'
// console.log(newPerson)

const user = {
  name: 'Guilherme',
  age: 23,
}

// Modifying newUser also modifies user
const newUser = user;
newUser.age = 24;
// console.log(user)

// Creating object without tying it to source object. Changing this new object will not affect source object
const newestPerson = Object.assign({}, newPerson, lastName);
newestPerson.name = 'Gilberto';
// console.log(newestPerson);
// console.log(newPerson);