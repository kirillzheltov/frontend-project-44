import readlineSync from 'readline-sync';
import getName from './cli.js';

const roundNumber = 3;

function greet() {
  const text = 'Welcome to the Brain Games!';
  console.log(text);
}

function sayHello(name) {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
}

function showDescription(description) {
  console.log(description);
}

function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function printQuestion(question) {
  console.log(`Question: ${question}`);
}

function getAnswerInput() {
  return readlineSync.question('Your answer: ');
}

function printGameRoundResult(isAnswerCorrect, answer, correctAnswer, playerName) {
  let consoleText;
  if (isAnswerCorrect) {
    consoleText = 'Correct!';
  } else {
    consoleText = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${playerName}!`;
  }
  console.log(consoleText);
}

function playGameRound(playerName, getGameData) {
  const gameData = getGameData();
  const { question, trueAnswer } = gameData;
  printQuestion(question);
  const givenAnswer = getAnswerInput();
  const doAnswersMatch = (trueAnswer === givenAnswer);
  printGameRoundResult(doAnswersMatch, givenAnswer, trueAnswer, playerName);
  return doAnswersMatch;
}

function playGame(playerName, getGameData) {
  for (let i = 1; i <= roundNumber; i += 1) {
    const result = playGameRound(playerName, getGameData);
    if (result === false) {
      break;
    }
    if (i === roundNumber) {
      const congrats = `Congratulations, ${playerName}!`;
      console.log(congrats);
    }
  }
}

function startGame(getGameData) {
  const gameData = getGameData();
  const { description } = gameData;
  greet();
  const playerName = getName();
  sayHello(playerName);
  showDescription(description);
  playGame(playerName, getGameData);
}

export {
  greet,
  sayHello,
  getRandomNumber,
  startGame,
};
