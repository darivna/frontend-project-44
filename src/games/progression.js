import getRandomNumber from '../utils.js';

export const gameDescription = 'What number is missing in the progression?';
const minProgressionStep = 2;
const minArrayLength = 5;
const maxRandomNumber = 10;

function getArrayOfNumbers(arrLength, step) {
  const arrayOfNumbers = [];
  const firstElement = getRandomNumber(0, 50);

  for (let i = 0; i < arrLength; i += 1) {
    const element = firstElement + step * i;
    arrayOfNumbers.push(element);
  }

  return arrayOfNumbers;
}

export function generateGameData() {
  const arrayLength = getRandomNumber(minArrayLength, maxRandomNumber);
  const progressionStep = getRandomNumber(minProgressionStep, maxRandomNumber);
  const randomIndex = getRandomNumber(0, arrayLength);
  const arrayOfNumbers = getArrayOfNumbers(arrayLength, progressionStep);
  const arrayWithEmptySlot = arrayOfNumbers.splice(randomIndex, 1, '..');

  return [
    arrayOfNumbers.join(' '),
    arrayWithEmptySlot,
  ];
}
