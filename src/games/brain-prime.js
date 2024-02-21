import { getRandomNumber } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getData() {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  return getRandomNumber(minRandomValue, maxRandomValue);
}

function getQuestion(data) {
  return data;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getTrueAnswer(number) {
  return isPrime(number) ? 'yes' : 'no';
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
