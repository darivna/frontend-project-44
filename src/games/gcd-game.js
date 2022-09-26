import { getRandomNumber } from '../../src/index.js';

function getGreatestCommonDiv(firsValue, secondValue) {
  const divisorsArray = [];
  let greatestCommonDiv = null;

  for (let i = 1, j = 1; i <= firsValue, j <= secondValue; i += 1, j += 1) {
    if (firsValue % i === 0 && secondValue % j === 0) {
      divisorsArray.push(i, j);
    }
  }
  const commonDivArray = Array.from(new Set(divisorsArray)).sort();
  return greatestCommonDiv = commonDivArray[commonDivArray.length - 1];
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
    greatestCommonDiv
  ]
}

