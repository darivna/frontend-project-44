import { getRandomNumber } from '../index.js';

function getArrayOfNumbers(arrLength, step) {
  const arrayOfNumbers = [];
  let arraysElement = getRandomNumber(0, 50);

  for (let i = 1; i <= arrLength; i += 1) {
    arraysElement += step;
    arrayOfNumbers.push(arraysElement);
  }
  return arrayOfNumbers;
}

export function getGamesRule() {
  const rule = 'What number is missing in the progression?';
  console.log(rule);
}

export function progressionGame() {
  const [arrayLength, progressionStep] = [
    getRandomNumber(5, 10), getRandomNumber(2, 10),
  ];
  const randomIndex = getRandomNumber(0, arrayLength);
  const arrayOfNumbers = getArrayOfNumbers(arrayLength, progressionStep);
  const emptySlotArray = arrayOfNumbers.splice(randomIndex, 1, '..');

  return [
    arrayOfNumbers.join(' '),
    emptySlotArray,
  ];
}
