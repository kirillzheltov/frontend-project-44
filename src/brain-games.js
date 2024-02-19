import { getName } from './cli.js';

function brainGames() {
  const text = 'Welcome to the Brain Games!';
  console.log(text);

  const name = getName();
  const greeting = `Hello, ${name}!`;
  console.log(greeting);

  return name;
}

export default brainGames;
