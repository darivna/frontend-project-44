import {
  greeting, showGamesRule, getRandomNumber, makeQuestion, getUsersAnswer,
} from '../../src/index.js';

const arrayLength = getRandomNumber(5, 10);
const progressionStep = getRandomNumber(2, 10);
const randomIndex = getRandomNumber(0, arrayLength);

function getArrayOfNumbers(arrLength, step) {
  const arrayOfNumbers = [];
  let arraysElement = getRandomNumber(0, 50);

  for (let i = 1; i < arrLength; i += 1) {
    arraysElement += step;
    arrayOfNumbers.push(arraysElement);
  }
  return arrayOfNumbers;
}

export default function getProgression() {
  const userName = greeting();
  showGamesRule('What number is missing in the progression?');
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const arrayOfNumbers = getArrayOfNumbers(arrayLength, progressionStep);
    const rightAnswer = arrayOfNumbers.splice(randomIndex, 1, '..');
    makeQuestion(arrayOfNumbers.join(' '));
    const usersAnswer = getUsersAnswer();

    if (Number(usersAnswer) === Number(rightAnswer)) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }

    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
