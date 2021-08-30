const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adds key:value to object
const addPair = (object, key, value) => object[key] = value;
addPair(lesson2, 'turno', 'manhã');
// console.log(lesson2)

// Lists object keys
const listKeys = (object) => Object.keys(object);
// console.log(listKeys(lesson3));

// Shows size of object
const returnSize = (object) => Object.keys(object).length;
// console.log(returnSize(lesson3));

// Lists values of object
const listValues = (object) => Object.values(object);
// console.log(listValues(lesson2));

// Creates allClasses object with all lessons
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons)

// Returns total students in all lessons
function listStudents(object) {
  let counter = 0;
  const numeroEstudantes = 'numeroEstudantes';
  for (let key of Object.keys(object)) {
    counter += object[key][numeroEstudantes];
  }
  return counter;
}
// console.log(listStudents(allLessons));

// Gets value from index (position in object)
function getValueByNumber(object, position) {
  const keys = Object.keys(object);
  return object[keys[position]];
}
// console.log(getValueByNumber(lesson1, 0))

// Verifies if key:value exists in object
const verifyPair = (object, key, value) => (object[key] === value) ? true : false;
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));