import {
  greeting, showGamesRule, getRandomNumber, makeQuestion, getUsersAnswer,
} from '../../src/index.js';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const [plus, minus, mult] = operators;
  const randomIndex = getRandomNumber(0, 3);
  let operator = operators[randomIndex];

  switch (randomIndex) {
    case randomIndex === 0:
      operator = plus;
      break;
    case randomIndex === 1:
      operator = minus;
      break;
    case randomIndex === 2:
      operator = mult;
      break;
  }
  return operator;
}

function calcExpressionResult(firstNum, mathOperation, secondNum) {
  let expressionResult;
  if (mathOperation === '+') {
    expressionResult = firstNum + secondNum;
  }
  if (mathOperation === '-') {
    expressionResult = firstNum - secondNum;
  }
  if (mathOperation === '*') {
    expressionResult = firstNum * secondNum;
  }
  return expressionResult;
}

export default function getMathResult() {
  const userName = greeting();
  showGamesRule('What is the result of the expression?');
  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const [firstOperand, secondOperand, operator] = [
      getRandomNumber(0, 50), getRandomNumber(0, 50), getRandomOperator(),
    ];
    const expression = `${firstOperand} ${operator} ${secondOperand}`;
    makeQuestion(expression);
    const expressionResult = Number(calcExpressionResult(firstOperand, operator, secondOperand));
    const usersAnswer = Number(getUsersAnswer());

    if (usersAnswer === expressionResult) {
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
