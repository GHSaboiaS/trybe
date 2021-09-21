function encode(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const numbers = [1, 2, 3, 4, 5]
  let newText = text
  for (let letter of text) {
    if (vowels.includes(letter)) {
      newText = newText.replace(letter, numbers[vowels.indexOf(letter)])
    }
  }
  return newText
}

console.log(encode('odhfaes'))

module.exports = encode