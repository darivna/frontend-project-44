import { getRandomNumber } from '../index.js';

function getGreatestCommonDiv(firstValue, secondValue) {
  const divisorsArray = [];
  let greatestCommonDiv = null;

  for (let i = 1, j = 1; i <= firstValue && j <= secondValue; i += 1, j += 1) {
    if (firstValue % i === 0 && secondValue % j === 0) {
      divisorsArray.push(i, j);
    }
  }
  const commonDivArray = Array.from(new Set(divisorsArray)).sort();
  greatestCommonDiv = commonDivArray[commonDivArray.length - 1];

  return greatestCommonDiv;
}

export function getGamesRule() {
  const rule = 'Find the greatest common divisor of given numbers.';
  console.log(rule);
}

export function getGreatestDivisor() {
  const [firstNumber, secondNumber] = [
    getRandomNumber(1, 10), getRandomNumber(1, 10),
  ];
  const greatestCommonDiv = getGreatestCommonDiv(firstNumber, secondNumber);

  return [
    `${firstNumber} ${secondNumber}`,
    greatestCommonDiv,
  ];
}
