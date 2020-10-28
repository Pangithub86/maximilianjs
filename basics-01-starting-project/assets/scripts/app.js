const defaultResult = 0;
let currentResult = defaultResult; 

 
function getUserInput(){
  return parseInt(usrInput.value);
}


function add(){
  const enteredNumber = parseInt(usrInput.value);
  const calcDescription = `${currentResult} + ${usrInput.value}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click',add);

 


