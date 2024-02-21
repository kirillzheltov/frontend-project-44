import getRandomNumber from '../utils.js';
import startGame from '../index.js';

function getAp(aPLength, aPStart, aPStep) {
  const aP = [];
  for (let i = 1; i <= aPLength; i += 1) {
    aP.push(aPStart * i + aPStep);
  }
  return aP;
}

function getGameData() {
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

  const aP = getAp(aPLength, aPStart, aPStep);
  const hiddenNumber = aP[aPHiddenPosition].toString();
  aP[aPHiddenPosition] = '..';

  return {
    description: 'What number is missing in the progression?',
    question: aP.join(' '),
    trueAnswer: hiddenNumber,
  };
}

export default () => startGame(getGameData);
