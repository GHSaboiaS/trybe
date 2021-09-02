const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkScore = (answerKey, answerUser, checkAnswers) => {
  return checkAnswers(answerKey, answerUser);
}

function checkAnswers(key, answers) {
  let score = 0;
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === 'N.A') {
      {};
    } else if (answers[i] === key[i]) {
      score += 1;
    } else if (answers[i] !== key[i]) {
      score -= 0.5;
    }
  }
  return score;
}
console.log(checkScore(STUDENT_ANSWERS, RIGHT_ANSWERS, checkAnswers));