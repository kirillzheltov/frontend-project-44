import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

function calculate(number1, number2, sign) {
  switch (sign) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
}

function getGameData() {
  const minRandomValue = 1;
  const maxRandomValue = 50;
  const signs = ['+', '-', '*'];

  const number1 = getRandomNumber(minRandomValue, maxRandomValue);
  const number2 = getRandomNumber(minRandomValue, maxRandomValue);
  const sign = signs[(Math.floor(Math.random() * signs.length))];

  return {
    question: `${number1} ${sign} ${number2}`,
    trueAnswer: calculate(number1, number2, sign).toString(),
  };
}

export default () => startGame(gameDescription, getGameData);
