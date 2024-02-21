import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

function getProgression(progressionLength, progressionStart, progressionStep) {
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progressionStart * i + progressionStep);
  }
  return progression;
}

function getGameData() {
  const minRandomValue1 = 1;
  const maxRandomValue1 = 20;
  const progressionStart = getRandomNumber(minRandomValue1, maxRandomValue1);
  const progressionStep = getRandomNumber(minRandomValue1, maxRandomValue1);

  const minRandomValue2 = 5;
  const maxRandomValue2 = 10;
  const progressionLength = getRandomNumber(minRandomValue2, maxRandomValue2);

  const minRandomValue3 = 0;
  const maxRandomValue3 = progressionLength - 1;
  const progressionHiddenPosition = getRandomNumber(minRandomValue3, maxRandomValue3);

  const progression = getProgression(progressionLength, progressionStart, progressionStep);
  const hiddenNumber = progression[progressionHiddenPosition].toString();
  progression[progressionHiddenPosition] = '..';

  return {
    question: progression.join(' '),
    trueAnswer: hiddenNumber,
  };
}

export default () => startGame(gameDescription, getGameData);
