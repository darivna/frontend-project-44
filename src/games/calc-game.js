import { getRandomNumber } from '../index.js';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, 3)];
}

function calcExpressionResult(firstNum, secondNum, mathOperation) {

  let expressionResult = null;

  switch (mathOperation) {
    case '+':
      expressionResult = firstNum + secondNum;
      break;
    case '-':
      expressionResult = firstNum - secondNum;
      break;
    case '*':
      expressionResult = firstNum * secondNum;
      break;
    default:
      console.log(`Unexpected operator: ${mathOperation}`);
  }
  return expressionResult;
}

export function getGamesRule() {
  const rule = 'What is the result of the expression?';
  console.log(rule);
} 

export function calcGame() {
  const [firstOperand, secondOperand, operator] = [
    getRandomNumber(0, 50), getRandomNumber(0, 50), getRandomOperator(),
  ];
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  const expressionResult = calcExpressionResult(firstOperand, secondOperand, operator);

  return [
    expression,
    expressionResult
  ]
}
