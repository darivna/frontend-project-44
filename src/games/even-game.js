import getRandomNumber from '../utils.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no."';

function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

export function saveEvenGameVariables() {
  const randomNumber = getRandomNumber(0, 100);

  return [
    randomNumber,
    isEven(randomNumber),
  ];
}
