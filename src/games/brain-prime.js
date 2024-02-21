import getRandomNumber from '../utils.js';
import startGame from '../index.js';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getGameData() {
  const minRandomValue = 1;
  const maxRandomValue = 100;

  const number = getRandomNumber(minRandomValue, maxRandomValue);

  return {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: number,
    trueAnswer: isPrime(number) ? 'yes' : 'no',
  };
}

export default () => startGame(getGameData);
