import readlineSync from 'readline-sync';
import getName from './cli.js';

function startGame(getGameData) {
  console.log('Welcome to the Brain Games!');
  const playerName = getName();
  console.log(`Hello, ${playerName}!`);
  let gameData = getGameData();
  const { description } = gameData;
  console.log(description);
  const roundNumber = 3;

  for (let i = 1; i <= roundNumber; i += 1) {
    gameData = getGameData();

    const { question, trueAnswer } = gameData;
    console.log(`Question: ${question}`);
    const givenAnswer = readlineSync.question('Your answer: ');
    const doAnswersMatch = (trueAnswer === givenAnswer);

    let consoleText;
    if (doAnswersMatch) {
      consoleText = 'Correct!';
    } else {
      consoleText = `'${givenAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${playerName}!`;
    }
    console.log(consoleText);

    if (doAnswersMatch === false) {
      break;
    }
    if (i === roundNumber) {
      const congrats = `Congratulations, ${playerName}!`;
      console.log(congrats);
    }
  }
}

export default startGame;
