const defaultResult = 0;
let currentResult = defaultResult; 

function add(){
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener('click',add);

//currentResult = add(1,2);
//let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

 

