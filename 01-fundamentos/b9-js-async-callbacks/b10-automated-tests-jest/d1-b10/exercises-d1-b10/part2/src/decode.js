function decode(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const numbers = ['1', '2', '3', '4', '5']
  let newText = text
  for (let letter of text) {
    if (numbers.includes(letter)) {
      newText = newText.replace(letter, vowels[numbers.indexOf(letter)])
    }
  }
  return newText
}

module.exports = decode