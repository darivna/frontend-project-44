import {
  greeting, showGamesRule, getRandomNumber, makeQuestion, getUsersAnswer,
} from '../../src/index.js';

function isPrime(someNumber) {
  let counter = 0;
  let rightAnswer;

  for (let i = 1; i <= someNumber / 2; i += 1) {
    if (someNumber % i === 0) {
      counter += 1;
    }
  }

  counter > 1 ? rightAnswer = 'no' : rightAnswer = 'yes';

  return rightAnswer;
}

export default function checkIsPrime() {
  const userName = greeting();
  showGamesRule('Answer "yes" if given number is prime. Otherwise answer "no".');
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const randomNumber = getRandomNumber(1, 100);
    makeQuestion(randomNumber);
    const rightAnswer = isPrime(randomNumber);
    const usersAnswer = getUsersAnswer();

    if (usersAnswer === rightAnswer) {
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
