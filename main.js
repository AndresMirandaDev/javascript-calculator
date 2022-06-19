//Basic Math Operators
function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};

function operate (previousOperand, currentOperand, operator){
    if(operator === "+") {
        return add(previousOperand, currentOperand);
    }else if(operator === "-") {
        return subtract(previousOperand, currentOperand);
    }else if(operator === "X") {
        return multiply(previousOperand, currentOperand);
    }else if(operator === "/") {
        return divide(previousOperand, currentOperand);
    };
};