import { getRandomNumber } from '../index.js';

export function getGamesRule() {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no."';
  console.log(rule);
}

function getUserAnswer(number) {
  const userAnswer = number % 2 === 0 ? 'yes' : 'no';
  return userAnswer;
}

export function evenGame() {
  const randomNumber = getRandomNumber(0, 100);

  return [
    randomNumber,
    getUserAnswer(randomNumber),
  ];
}
