// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialties: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialties: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialties: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialties: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialties: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialties: ['Backend'],
  },
];

const fetchInfo = (employees, detail) => {
  const retArr = []
  employees.forEach((employee) => {
    const retObj = {}
    const keys = Object.keys(employee)
    keys.forEach((key) => {
      if (detail.includes(key)) {
        retObj[key] = employee[key]
      }
    })
    retArr.push(retObj)
  })
  return retArr
}

const checkExistence = (userIds, userInfos) => {
  const ids = professionalBoard.map((employee) => employee.id)
  const infos = Object.keys(professionalBoard[0])
  let userIdsArr = userIds
  let userInfosArr = userInfos
  if (!Array.isArray(userIdsArr)) {
    userIdsArr = [userIdsArr]
  }
  if (!Array.isArray(userInfosArr)) {
    userInfosArr = [userInfosArr]
  }
  userIdsArr.forEach((id) => {
    if (!ids.includes(id)) {
      throw new Error('ID not found')
    }
  })
  userInfosArr.forEach((info) => {
    if (!infos.includes(info)) {
      throw new Error('Info not found')
    }
  })

}

// Search
const searchEmployee = (userIds, userDetails) => {
  checkExistence(userIds, userDetails)
  const employees = professionalBoard.filter((el) => userIds.includes(el.id))
  const retArr = fetchInfo(employees, userDetails)
  return retArr
};

module.exports = searchEmployee