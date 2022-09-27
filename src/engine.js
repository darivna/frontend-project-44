import readlineSync from 'readline-sync';

const rightAnswersCountToWin = 3;

export default function runEngine(gameDescription, generateGameData) {
  let rightAnswerCount = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  while (rightAnswerCount < rightAnswersCountToWin) {
    const [question, rightAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer.toString() !== rightAnswer.toString()) {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    rightAnswerCount += 1;

    if (rightAnswerCount === rightAnswersCountToWin) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
