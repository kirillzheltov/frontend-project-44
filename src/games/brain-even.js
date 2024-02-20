import { getRandomNumber } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function getData() {
  return getRandomNumber();
}

function getQuestion(data) {
  return data;
}

function isEven(number) {
  return (number % 2 === 0);
}

function getTrueAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function getGameData() {
  const data = getData();
  return {
    description: gameDescription,
    question: getQuestion(data),
    trueAnswer: getTrueAnswer(data),
  };
}

export { getGameData };
