import {
  greeting, showGamesRule, getRandomNumber, makeQuestion, getUsersAnswer,
} from '../../src/index.js';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomNumber = getRandomNumber(0, 3);
  let operator = operators[randomNumber];

  switch (randomNumber) {
    case randomNumber === 0:
      operator = operators[0];
      break;
    case randomNumber === 1:
      operator = operators[1];
      break;
    case randomNumber === 2:
      operator = operators[2];
  }
  return operator;
}

function calcExpressionResult(firstNum, mathAction, secondNum) {
  let expressionResult;
  if (mathAction === '+') {
    expressionResult = firstNum + secondNum;
  }
  if (mathAction === '-') {
    expressionResult = firstNum - secondNum;
  }
  if (mathAction === '*') {
    expressionResult = firstNum * secondNum;
  }
  return expressionResult;
}

export default function getMathResult() {
  const userName = greeting();
  showGamesRule('What is the result of the expression?');
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const firstOperand = getRandomNumber(0, 10);
    const secondOperand = getRandomNumber(0, 10);
    const operator = getRandomOperator();
    const expression = `${firstOperand} ${operator} ${secondOperand}`;
    makeQuestion(expression);
    const expressionResult = calcExpressionResult(firstOperand, operator, secondOperand);
    const usersAnswer = getUsersAnswer();

    if (Number(usersAnswer) === Number(expressionResult)) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${expressionResult}.\nLet's try again, ${userName}!`);
      break;
    }

    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
