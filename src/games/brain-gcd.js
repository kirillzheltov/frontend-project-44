import { getRandomNumber } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function getData() {
  const minRandomValue = 1;
  const maxRandomValue = 50;
  return {
    number1: getRandomNumber(minRandomValue, maxRandomValue),
    number2: getRandomNumber(minRandomValue, maxRandomValue),
  };
}

function getQuestion(data) {
  const { number1, number2 } = data;
  const expression = `${number1} ${number2}`;
  return expression;
}

function gcd(number1, number2) {
  if (number1 === 0) {
    return number2;
  }
  return gcd(number2 % number1, number1);
}

function getTrueAnswer(data) {
  const { number1, number2 } = data;
  const result = gcd(number1, number2);
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
