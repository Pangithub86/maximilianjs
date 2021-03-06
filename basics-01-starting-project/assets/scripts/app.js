const defaultResult = 0;
let currentResult = defaultResult; 
let logEntries = [];

 
function getUserInput(){
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforCalc, CalcNumber){
  const calcDescription = `${resultBeforCalc} ${operator} ${culcNumber}`;
  outputResult(currentResult, calcDescription);
} 

function add(){
  const enteredNumber = getUserInput;
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function subtract( ) {
  const enteredNumber = getUserInput;
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply (){
  const enteredNumber = getUserInput;
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
  const enteredNumber = getUserInput;
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

