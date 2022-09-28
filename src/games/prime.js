import getRandomNumber from '../utils.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRandomNumber = 0;
const maxRandomNumber = 100;

function isPrime(number) {
  let counter = 0;

  for (let i = 1; i <= number / 2; i += 1) {
    if (number <= 1) {
      break;
    }
    if (number % i === 0) {
      counter += 1;
    }
  }

  return counter > 1;
}

export function generateGameData() {
  const randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);

  return [
    randomNumber,
    isPrime(randomNumber) ? 'no' : 'yes',
  ];
}
