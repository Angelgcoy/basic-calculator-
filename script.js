
/*crear funcion para sumar
crear funcion para restar
crear funcion para multiplicar
crear funcion para dividir
*/

const add = (a,b) =>      { return a + b }
const subtract = (a,b) => { return a - b}
const multiply = (a,b) => { return a * b;}
const divide = (a,b) =>   { return a / b; }

const one = 1;
const two = 2;

//create a operate function which uses a operator and two numbers to execute
function operate(a,b,operator) {
    if (operator === "+") {      return a + b; }
    else if (operator === "-") { return a - b; }
    else if (operator === "/") { return b === 0 ? "error" : a / b; }
    else if (operator === "*") { return a * b; }
    else {return null}

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
const display = document.querySelector("p");


let previousNumber = "";
let actualNumber = "";
let selectedOperator = null;

function pressNumber(number) {
    actualNumber += number.textContent;
    display.textContent = actualNumber;
};

function pressOperator(operator) {
    selectedOperator = operator.textContent 
    display.textContent = selectedOperator
}

const action = btnList.forEach(button => {
    button.addEventListener("click", () => {
        pressNumber(button)
        console.log(actualNumber)
    })
})

const operator = operatorsList.forEach(button => {
    button.addEventListener("click", () => {
        pressOperator(button)
        console.log(selectedOperator)
    })
})

//undo and clear action
clearBtn.addEventListener("click", () => {
    display.textContent = "";
    actualNumber = "";
    previousNumber = "";
})
deleteBtn.addEventListener("click", () => {

display.textContent = display.textContent.slice(0, -1);
actualNumber = display.textContent;
})
console.log(operate(1,2,"+"))



