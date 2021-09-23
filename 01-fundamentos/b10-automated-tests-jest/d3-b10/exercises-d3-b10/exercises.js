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

module.exports = { generateRandom, first, second, third }