import {
  greeting, showGamesRule, getRandomNumber, makeQuestion, getUsersAnswer,
} from '../../src/index.js';

function getGreatestCommonDiv(firsValue, secondValue) {
  const divisorsArray = [];
  let greatestCommonDiv;

  for (let i = 1, j = 1; i <= firsValue, j <= secondValue; i += 1, j += 1) {
    if (firsValue % i === 0 && secondValue % j === 0) {
      divisorsArray.push(i, j);
    }
  }
  const commonDivArray = Array.from(new Set(divisorsArray)).sort();
  return (greatestCommonDiv = commonDivArray[commonDivArray.length - 1]);
}

export default function getGreatestDivisor() {
  const userName = greeting();
  showGamesRule('Find the greatest common divisor of given numbers.');
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const [firstNumber, secondNumber] = [
      getRandomNumber(1, 10), getRandomNumber(1, 10),
    ];
    const greatestCommonDiv = getGreatestCommonDiv(firstNumber, secondNumber);
    makeQuestion(`${firstNumber} ${secondNumber}`);
    const usersAnswer = Number(getUsersAnswer());

    if (usersAnswer === greatestCommonDiv) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${greatestCommonDiv}.\nLet's try again, ${userName}!`);
      break;
    }

    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
