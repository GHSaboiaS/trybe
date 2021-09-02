const lottery = (betNumber, func) => {
  const lottoNumber = Math.floor(Math.random() * 5);
  console.log(func(betNumber, lottoNumber));
}
const checkNumber = (bet, lotto) => {
  if (bet === lotto) {
    return `You bet ${bet} and won!`;
  } else {
    return `You bet ${bet} and lost! Result was ${lotto}!`;
  }
}
lottery(2, checkNumber)
