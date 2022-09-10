import {
  greeting, showGamesRule, getRandomNumber, makeQuestion, getUsersAnswer,
} from '../../src/index.js';

// const isEven = (number) => number % 2 === 0; 

export default function findEvenNumber() {
  const userName = greeting();
  showGamesRule('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const randomNumber = getRandomNumber();
    makeQuestion(randomNumber);
    const positiveAnswer = 'yes';
    const negativeAnswer = 'no';
    const usersAnswer = getUsersAnswer();

    if ((randomNumber % 2 === 0 && usersAnswer === positiveAnswer) || (randomNumber % 2 !== 0 && usersAnswer === negativeAnswer)) {
      console.log('Correct!');
      rightAnswerCount += 1;
    }
    if (randomNumber % 2 === 0 && usersAnswer !== positiveAnswer) {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${positiveAnswer}.\nLet's try again, ${userName}!`);
      break;
    } else if (randomNumber % 2 !== 0 && usersAnswer !== negativeAnswer) {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${negativeAnswer}.\nLet's try again, ${userName}!`);
      break;
    }

    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
