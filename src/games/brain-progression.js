import { getRandomNumber } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

function getData() {
  const minRandomValue1 = 1;
  const maxRandomValue1 = 20;
  const aPStart = getRandomNumber(minRandomValue1, maxRandomValue1);
  const aPStep = getRandomNumber(minRandomValue1, maxRandomValue1);
  const minRandomValue2 = 5;
  const maxRandomValue2 = 10;
  const aPLength = getRandomNumber(minRandomValue2, maxRandomValue2);
  const minRandomValue3 = 0;
  const maxRandomValue3 = aPLength - 1;
  const aPHiddenPosition = getRandomNumber(minRandomValue3, maxRandomValue3);
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
