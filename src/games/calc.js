import getRandomNumber from '../utils.js';

export const gameDescription = 'What is the result of the expression?';

const minRandomNumber = 0;
const maxRandomNumber = 50;

export const supportedOperators = ['+', '-', '*'];

function getRandomOperator() {
  const operators = supportedOperators;
  return operators[getRandomNumber(0, supportedOperators.length)];
}

function calcExpression(firstNum, secondNum, mathOperation) {
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

export function generateGameData() {
  const firstOperand = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondOperand = getRandomNumber(minRandomNumber, maxRandomNumber);
  const operator = getRandomOperator();

  return [
    `${firstOperand} ${operator} ${secondOperand}`,
    calcExpression(
      firstOperand, 
      secondOperand, 
      operator
    )
  ];
}
