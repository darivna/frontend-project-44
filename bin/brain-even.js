import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const findEvenNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    console.log(`Question: ${randomNumber}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if ((randomNumber % 2 === 0 && usersAnswer === 'yes') || (randomNumber % 2 !== 0 && usersAnswer === 'no')) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (rightAnswerCount === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

findEvenNumber();
