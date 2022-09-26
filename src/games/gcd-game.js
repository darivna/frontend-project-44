import getRandomNumber from '../utils.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

function calcGreatestCommonDiv(firstValue, secondValue) {
  const divisorsArray = [];

  for (let i = 1, j = 1; i <= firstValue && j <= secondValue; i += 1, j += 1) {
    if (firstValue % i === 0 && secondValue % j === 0) {
      divisorsArray.push(i, j);
    }
  }
  const commonDivArray = Array.from(new Set(divisorsArray)).sort();
  return commonDivArray[commonDivArray.length - 1];
}

export function saveGcdGameVariables() {
  const [firstNumber, secondNumber] = [
    getRandomNumber(1, 10), getRandomNumber(1, 10),
  ];
  const greatestCommonDiv = calcGreatestCommonDiv(firstNumber, secondNumber);

  return [
    `${firstNumber} ${secondNumber}`,
    greatestCommonDiv,
  ];
}
