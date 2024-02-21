import readlineSync from 'readline-sync';

function startGame(gameDescription, getGameData) {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);
  const roundNumber = 3;

  for (let i = 1; i <= roundNumber; i += 1) {
    const gameData = getGameData();
    const { question, trueAnswer } = gameData;
    console.log(`Question: ${question}`);
    const givenAnswer = readlineSync.question('Your answer: ');
    const doAnswersMatch = (trueAnswer === givenAnswer);

    if (doAnswersMatch) {
      console.log('Correct!');
    } else {
      console.log(`'${givenAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
}

export default startGame;
