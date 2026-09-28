
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
    if (operator === "+") {      return Number(a) + Number(b); }
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

let previousNumber = "" ;
let actualNumber = "" ;
let selectedOperator = null;

 //store number pressed in first variable
function pressNumber(number) {
    if (selectedOperator === null) {

    actualNumber += number.textContent;
    display.textContent = actualNumber;
    previousNumber = actualNumber;
};
    }

//store operator in variable
function pressOperator(operator) {
    if (actualNumber >= 0) {
        
    selectedOperator = operator.textContent;
    display.textContent = selectedOperator;
    actualNumber = "";
    console.log(selectedOperator);
    };
}

//store actualnumber in previousnumber and store it
function secondNumber(number) {
      
    if (selectedOperator ) {
        actualNumber += number.textContent;
        display.textContent = actualNumber;
        
        console.log(previousNumber, "soy el anterior")
    };

};


//first number click
const setNumber = btnList.forEach(button => {
    button.addEventListener("click", () => {
        pressNumber(button)
        secondNumber(button)
        console.log(actualNumber, "am actual number")
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
    display.textContent = (operate(previousNumber,actualNumber,selectedOperator))

    
})


//undo and clear action
clearBtn.addEventListener("click", () => {
    display.textContent = "";
    actualNumber = "";
    previousNumber = "";
    selectedOperator = null
})
deleteBtn.addEventListener("click", () => {

display.textContent = display.textContent.slice(0, -1);
actualNumber = display.textContent;
})


/*ya lo que es formular el primer numero, el operador, el segundo numero, que haga la operacion y que se muestre
en pantalla esta listo. ahora necesito es hacer que no se rompa por no usarlo bien

-al momento de presionar resultado, si presiono un numero el resultado debe volerse el previousNumber
no se debe poder seleccionar una operacion si no se ha seleccionado numero inicial
el numero inicial debe ser 0 al momento de seleccionar clear o iniciar la pagina


*/

