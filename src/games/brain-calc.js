import { getRandomNumber } from '../index.js';

const gameDescription = 'What is the result of the expression?';

function getRandomSign() {
  const signs = ['+', '-', '*'];
  return signs[(Math.floor(Math.random() * signs.length))];
}

function getData() {
  return {
    number1: getRandomNumber(1, 100),
    number2: getRandomNumber(1, 100),
    sign: getRandomSign(),
  };
}

function getQuestion(data) {
  const { number1, number2, sign } = data;
  const expression = `${number1} ${sign} ${number2}`;
  return expression;
}

function getTrueAnswer(data) {
  const { number1, number2, sign } = data;
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
  const data = getData();
  return {
    description: gameDescription,
    question: getQuestion(data),
    trueAnswer: getTrueAnswer(data),
  };
}

export default getGameData;
