let myPhrase = 'Tryber x aqui!';
function replaceX (string) {
  let newPhrase;
  for (let i = 0; i < myPhrase.length; i += 1) {
    if (myPhrase[i] === 'x') {
      newPhrase = myPhrase.replace(myPhrase[i], string);
    }
  }
  return newPhrase;
}
console.log(replaceX('Guilherme'));

