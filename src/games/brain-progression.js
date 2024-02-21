import { getRandomNumber } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function getData() {
  const aPStart = getRandomNumber(1, 100);
  const aPStep = getRandomNumber(1, 100);
  const aPLength = getRandomNumber(5, 10);
  const aPHiddenPosition = getRandomNumber(0, aPLength);
  const aP = [];

  for (let i = 1; i <= aPLength; i += 1) {
    aP.push(aPStart * i + aPStep);
  }

  const hiddenNumber = aP[aPHiddenPosition];
  aP[aPHiddenPosition] = '..';

  return {
    aP,
    hiddenNumber,
  };
}

function getQuestion(data) {
  const { aP } = data;
  const expression = aP.join(' ');
  return expression;
}

function getTrueAnswer(data) {
  const { hiddenNumber } = data;
  const result = hiddenNumber;
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
