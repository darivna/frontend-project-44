import readlineSync from 'readline-sync';

export function showGamesRule(rule) {
  console.log(rule);
}

export function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

export function makeQuestion(expression) {
  console.log(`Question: ${expression}`);
}

export function getUsersAnswer() {
  const usersAnswer = readlineSync.question('Your answer: ');
  return usersAnswer;
}

export default function runEngine(gameRule, game) {
  const username = greeting();
  gameRule();
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    
    const [question, answer] = game();
    console.log(question);
    const usersAnswer = getUsersAnswer();

    if (usersAnswer.toString() === answer.toString()) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet\'s try again, ${username}!`);
      break;
    }

    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${username}!`);
    }
  }
}
