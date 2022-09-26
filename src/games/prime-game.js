import { getRandomNumber } from '../index.js';

function isPrime(number) {
  let counter = 0;

  for (let i = 1; i <= number / 2; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }

  return counter > 1 ? 'no' : 'yes';
}

export function getGamesRule() {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(rule);
}

export function primeGame() {
  const randomNumber = getRandomNumber(1, 100);

  return [
    randomNumber,
    isPrime(randomNumber),
  ];
}
