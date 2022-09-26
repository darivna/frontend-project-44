import getRandomNumber from '../utils.js';

export const gameDescription = 'What is the result of the expression?';

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

export function saveCalcGameVariables() {
  const [firstOperand, secondOperand, operator] = [
    getRandomNumber(0, 50), getRandomNumber(0, 50), getRandomOperator(),
  ];
  const expressionResult = calcExpressionResult(firstOperand, secondOperand, operator);

  return [
    `${firstOperand} ${operator} ${secondOperand}`,
    expressionResult,
  ];
}
