const newEmployees = () => {
  const employees = {
    id1: returnEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: returnEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: returnEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
const createEmail = (name) => {
  const lowerName = name.toLowerCase();
  const nameList = lowerName.split(' ');
  return `${nameList[0]}_${nameList[1]}@trybe.com`;
}
const returnEmployee = (fullName) => { 
  return {
    fullName,
    email: createEmail(fullName),
  }
};
console.log(newEmployees());
