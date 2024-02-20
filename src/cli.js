import readlineSync from 'readline-sync';

export default function getName() {
  return readlineSync.question('May I have your name? ');
}
