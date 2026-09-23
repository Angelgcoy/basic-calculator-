
/*crear funcion para sumar
crear funcion para restar
crear funcion para multiplicar
crear funcion para dividir
*/

const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => { 
    return a - b
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a / b;
}

const one = 1;
const two = 2;

//crear una funcion que tome dos numeros y ejecute una funcion de operacion en ellos
const operate = (a,b,operator) => {
    return operator(a,b);
}
console.log(operate(one,two,add))