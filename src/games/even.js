import getRandomNumber from '../utils.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no."';

const minRandomNumber = 0;
const maxRandomNumber = 100;

function isEven(number) {
  return number % 2 === 0;
}

export function generateGameData() {
  const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);

  return [
    randomNumber,
    isEven(randomNumber) ? 'yes' : 'no',
  ];
}
