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
