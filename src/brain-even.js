import readlineSync from 'readline-sync';

function getRandomInt() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(100);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function isEven(number) {
  return (number % 2 === 0);
}

function getCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function getAnswerInput() {
  return readlineSync.question('Your answer: ');
}

function printIterationResult(isAnswerCorrect, answer, correctAnswer, playerName) {
  let consoleText;
  if (isAnswerCorrect) {
    consoleText = 'Correct!';
  } else {
    consoleText = `"${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${playerName}!`;
  }
  console.log(consoleText);
}

function playGameRound(playerName) {
  const numberToProve = getRandomInt();
  const question = `Question ${numberToProve}`;
  console.log(question);
  const answer = getAnswerInput();
  const correctAnswer = getCorrectAnswer(numberToProve);
  const isAnswerCorrect = correctAnswer === answer;
  printIterationResult(isAnswerCorrect, answer, correctAnswer, playerName);
  return isAnswerCorrect;
}

function playGame(playerName) {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(gameRules);
  for (let i = 0; i <= 2; i += 1) {
    const result = playGameRound(playerName);
    if (result === false) {
      break;
    }
    if (i === 2) {
      const congrats = `Congratulations, ${playerName}!`;
      console.log(congrats);
    }
  }
}

export default playGame;
