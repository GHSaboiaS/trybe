const hydrate = (numberDrink) => {
  const totalWater = numberDrink.split(' ').filter((el) => !isNaN(el)).reduce((acc, el) => acc + Number(el), 0)
  return totalWater > 1 ? `${totalWater} copos de água` : `${totalWater} copo de água`
}

module.exports = hydrate