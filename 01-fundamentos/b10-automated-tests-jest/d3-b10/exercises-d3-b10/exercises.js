const fetch = require('node-fetch')

const generateRandom = () => {
  return Math.round(Math.random() * 100)
}

const first = (string) => {
  return string.toUpperCase()
}

const second = (string) => {
  return string[0]
}

const third = (string1, string2) => {
  return string1 + string2
}

const getDog = () => {
  new Promise ((resolve, reject) => {
    const response = fetch('https://dog.ceo/api/breeds/list/all')
      .then((list) => list.json())
      .catch((err) => err)
  
    if (response) {
      return resolve(response)
    }
  
    return reject(new Error('no parameter specified'))
  })
}

module.exports = { generateRandom, first, second, third, getDog }