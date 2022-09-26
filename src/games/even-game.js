import { getRandomNumber } from '../../src/index.js';

export function getGamesRule() {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no."';
  console.log(rule);
} 

export function evenGame() {
  const randomNumber = getRandomNumber(0, 100);

  return [
    randomNumber,
    randomNumber % 2 === 0 ? 'yes' : 'no'
  ]
}

