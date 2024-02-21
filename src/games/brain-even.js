import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return (number % 2 === 0);
}

function getGameData() {
  const minRandomValue = 1;
  const maxRandomValue = 100;

  const number = getRandomNumber(minRandomValue, maxRandomValue);

  return {
    question: number,
    trueAnswer: isEven(number) ? 'yes' : 'no',
  };
}

export default () => startGame(gameDescription, getGameData);
