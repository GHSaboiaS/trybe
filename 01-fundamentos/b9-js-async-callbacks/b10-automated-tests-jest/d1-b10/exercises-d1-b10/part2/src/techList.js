const techList = (arr, name) => {
  if (arr.length === 0) {
    return 'Vazio!'
  }
  const techArr = arr.map((el) => ({
    tech: el,
    name,
  })).sort((a, b) => (a.tech > b.tech) ? 1 : -1)
  return techArr
}

module.exports = techList