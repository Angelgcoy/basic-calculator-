


const add = (a,b) =>      { return a + b }
const subtract = (a,b) => { return a - b}
const multiply = (a,b) => { return a * b;}
const divide = (a,b) =>   { return a / b; }

const one = 1;
const two = 2;

//create a operate function which uses a operator and two numbers to execute
function operate(a,b,operator) {
const numA = Number(a);
const numB = Number(b);

    if (operator === "+") { return add(numA, numB); }
    else if (operator === "-") { return subtract(numA, numB); }
    else if (operator === "/") {
        if (numB === 0) { return "nuh uh..."; }
        return divide(numA, numB);
    }
    else if (operator === "*") { return multiply(numA, numB); }
    else { return null; }

}

//add operator buttons
const addBtn      = document.querySelector("#btn-add");
const subtractBtn = document.querySelector("#subtract");
const divideBtn   = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const operateBtn  = document.querySelector("#result");
const deleteBtn   = document.querySelector("#undo");
const clearBtn    = document.querySelector("#delete");

//add number buttons
const oneBtn     = document.querySelector("#one");
const twoBtn     = document.querySelector("#two");
const threeBtn   = document.querySelector("#three");
const forBtn     = document.querySelector("#for");
const fiveBtn    = document.querySelector("#five");
const sixBtn     = document.querySelector("#six");
const sevenBtn   = document.querySelector("#seven");
const eightBtn   = document.querySelector("#eight");
const nineBtn    =  document.querySelector("#nine");
const zeroBtn    = document.querySelector("#zero");
const decimalBtn = document.querySelector("#decimal");
//a list of the buttons
const btnList = [oneBtn,twoBtn,threeBtn,forBtn,fiveBtn,sixBtn,sevenBtn,eightBtn,nineBtn,zeroBtn,decimalBtn];
const operatorsList = [addBtn,subtractBtn,divideBtn,multiplyBtn];
const bothLists = [btnList,operatorsList];
const allLists = bothLists.flat()


//add display content
const topDisplay = document.querySelector("#top");
const bottomDisplay = document.querySelector("#bottom")
topDisplay.textContent = ""

let previousNumber = "" ;
let actualNumber = "" ;
let selectedOperator = null;
let resultState = false;

 //store number pressed in first variable
function setValues(number) {
    
    let pressedNumber = number.textContent
    

    if(resultState && !selectedOperator) {
        previousNumber = "";
        topDisplay.textContent = "";
        resultState = false;
    }

    if (  !selectedOperator){
        previousNumber += pressedNumber;
        topDisplay.textContent = previousNumber;
    }
    else {
        actualNumber += pressedNumber;
        topDisplay.textContent += pressedNumber;

        bottomDisplay.textContent = operate(previousNumber,actualNumber,selectedOperator);
    }
};
    

//store operator in variable
function pressOperator(operator) {

const  operatorBtn = operator.textContent;

if (actualNumber !== "" && actualNumber !== "" && selectedOperator) {
    const pendiente = operate(previousNumber,actualNumber,selectedOperator);
    previousNumber = pendiente
    actualNumber = ""
    topDisplay.textContent +=selectedOperator
    selectedOperator = operatorBtn;
}

    if (previousNumber === "") return;
    
    

    if (!selectedOperator ) {
    selectedOperator = operatorBtn;
    topDisplay.textContent += selectedOperator;
    
  }

  else if (selectedOperator) { 
    topDisplay.textContent = topDisplay.textContent.slice(0, -1);
    selectedOperator = operatorBtn;
    topDisplay.textContent += selectedOperator;

    
  };
  console.log(selectedOperator);
  
}



//set number click
const setNumber = btnList.forEach(button => {
    button.addEventListener("click", () => {
        setValues(button)
        
        console.log(previousNumber, "am the first values number")
    });
});


//operator click
const operatorPress = operatorsList.forEach(button => {
    button.addEventListener("click", () => {
        pressOperator(button)
        
        
    });
});

operate(previousNumber,actualNumber,selectedOperator)
console.log(operate)

//result button 
operateBtn.addEventListener("click", () => {
    if (previousNumber !== "" && actualNumber !== "" && selectedOperator !== null) {
        const result = operate(previousNumber,actualNumber,selectedOperator);

        topDisplay.textContent = result;
        bottomDisplay.textContent = ""
    
    
    previousNumber = String(result);
    actualNumber = "";
    selectedOperator = null;
    resultState = true;
    }

})


//undo and clear action
clearBtn.addEventListener("click", () => {
    topDisplay.textContent = "";
    actualNumber = "";
    previousNumber = "";
    selectedOperator = null
    bottomDisplay.textContent = ""
})

deleteBtn.addEventListener("click", () => {
if (actualNumber !== ""){
    actualNumber = actualNumber.slice(0, -1);

    topDisplay.textContent = topDisplay.textContent.slice(0, -1);
    if(actualNumber === "") {
        bottomDisplay.textContent = operate(previousNumber,actualNumber,selectedOperator)
    } else { 
        bottomDisplay.textContent = operate(previousNumber,actualNumber,selectedOperator)
    }
    return 
  }

  if (selectedOperator !== null) {
    selectedOperator = null
    topDisplay.textContent = topDisplay.textContent.slice(0, -1)
    if(!selectedOperator) {
        bottomDisplay.textContent = "";
    }
    return
  }
  if (previousNumber !== "") {
    previousNumber = previousNumber.slice(0, -1);
    topDisplay.textContent = previousNumber;
    return 
  }

})



