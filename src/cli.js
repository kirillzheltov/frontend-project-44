import readlineSync from 'readline-sync';

const getName = () => {
    return readlineSync.question('May I have your name? ');
}

export { getName };