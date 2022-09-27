import getRandomNumber from '../utils.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const minRandomNumber = 0;
const maxRandomNumber = 100;

function calcGreatestCommonDiv(firstValue, secondValue) {
  const divisorsArray = [];

  if (firstValue === 0) { return secondValue };
  if (secondValue === 0) { return firstValue };

  for (let i = 1, j = 1; i <= firstValue && j <= secondValue; i += 1, j += 1) {
    if (firstValue % i === 0 && secondValue % j === 0) {
      divisorsArray.push(i, j);
    }
  }
  const commonDivArray = Array.from(new Set(divisorsArray)).sort();
  return commonDivArray[commonDivArray.length - 1];
}

export function generateGameData() {
  const firstNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondNumber = getRandomNumber(minRandomNumber, maxRandomNumber);

  return [
    `${firstNumber} ${secondNumber}`,
    calcGreatestCommonDiv(firstNumber, secondNumber)
  ];
}
