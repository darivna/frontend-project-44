import {
  greeting, showGamesRule, getRandomNumber, makeQuestion, getUsersAnswer,
} from '../../src/index.js';

function isEven(someNumber) {
  let rightAnswer;
  return (rightAnswer = someNumber % 2 === 0 ? 'yes' : 'no');
}

export default function findEvenNumber() {
  const userName = greeting();
  showGamesRule('Answer "yes" if the number is even, otherwise answer "no.');
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const randomNumber = getRandomNumber(0, 100);
    makeQuestion(randomNumber);
    const rightAnswer = isEven(randomNumber);
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
