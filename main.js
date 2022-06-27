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
    if(num2 == "0"){
        return "error";
    }else{
    return num1 / num2;
  };
};

function operate (previousOperand, currentOperand, operator){
    if(operator === "+") {
        return add(previousOperand, currentOperand);
    }else if(operator === "-") {
        return subtract(previousOperand, currentOperand);
    }else if(operator === "x") {
        return multiply(previousOperand, currentOperand);
    }else if(operator === "/") {
        return divide(previousOperand, currentOperand);
    };
};


//functions handling the buttons and display 

const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
let previousValue = "";
let currentOperator = "";

//number buttons
numbers.forEach(button=>{
    button.addEventListener("click", (e)=>{
        if (display.innerText === "0" && e.target.innerText==="0"){
            
             display.innerText = "0";
             
        }else if (display.innerText.length < 12){
    
             display.innerText = display.innerText.concat(e.target.innerText).replace(/^0/g, "");
        }
    })
});

//decimal button handler
const decimalButton = document.querySelector("#decimal");

decimalButton.addEventListener("click", (e)=>{
    if(!display.innerText.includes(".")){
       display.innerText = display.innerText.concat(e.target.innerText);
    };
});

//clear display function
function allClear(){
    const display = document.querySelector("#display");
    display.innerText = "0";
    operationDisplay.innerText = "";
}

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", allClear);

// delete handler

function handleDelete () {
    const display = document.querySelector("#display");
    return display.innerText = display.innerText.slice(0, display.innerText.length-1);
}

const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", handleDelete);

// operation buttons functions

const operationButtons = document.querySelectorAll(".operator");
const operationDisplay = document.querySelector("#operation");
operationButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        previousValue = display.innerText;
        currentOperator = e.target.innerText;
        operationDisplay.innerText = display.innerText + e.target.innerText;
        display.innerText = "0";
    })
})