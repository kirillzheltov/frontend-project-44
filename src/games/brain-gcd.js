import getRandomNumber from '../utils.js';
import startGame from '../index.js';

function gcd(number1, number2) {
  if (number1 === 0) {
    return number2;
  }
  return gcd(number2 % number1, number1);
}

function getGameData() {
  const minRandomValue = 1;
  const maxRandomValue = 50;

  const number1 = getRandomNumber(minRandomValue, maxRandomValue);
  const number2 = getRandomNumber(minRandomValue, maxRandomValue);

  return {
    description: 'Find the greatest common divisor of given numbers.',
    question: `${number1} ${number2}`,
    trueAnswer: gcd(number1, number2).toString(),
  };
}

export default () => startGame(getGameData);
