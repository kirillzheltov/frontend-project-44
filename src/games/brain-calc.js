import getRandomNumber from '../utils.js';
import startGame from '../index.js';

function calculate(number1, number2, sign) {
  let result;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = null;
  }
  return result.toString();
}

function getGameData() {
  const minRandomValue = 1;
  const maxRandomValue = 50;
  const signs = ['+', '-', '*'];

  const number1 = getRandomNumber(minRandomValue, maxRandomValue);
  const number2 = getRandomNumber(minRandomValue, maxRandomValue);
  const sign = signs[(Math.floor(Math.random() * signs.length))];

  return {
    description: 'What is the result of the expression?',
    question: `${number1} ${sign} ${number2}`,
    trueAnswer: calculate(number1, number2, sign),
  };
}

export default () => startGame(getGameData);
