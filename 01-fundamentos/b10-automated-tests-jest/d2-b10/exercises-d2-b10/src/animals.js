const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const myAnimal = Animals.filter((animal) => animal.name === name)
      if (myAnimal) {
        return resolve(myAnimal[0])
      }

      return reject(new Error('Nenhum animal com esse nome!'))
    }, 100)
})

const getAnimal = async (name) => {
  const animal = await findAnimalByName(name)
  if (animal) {
    return animal
  }

  throw ('Nenhum animal com esse nome!')
}

const getAnimalByAge = (age) => {
  const animalsAge = Animals.filter(animal => animal.age === age)
  if (animalsAge.length !== 0) {
    return animalsAge
  }

  throw ('Nenhum animal com essa idade!')
}

module.exports = { getAnimal, getAnimalByAge }