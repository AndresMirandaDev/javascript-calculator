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


//functions handling the buttons and display 

const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");

//number buttons
numbers.forEach(button=>{
    button.addEventListener("click", (e)=>{
        if (display.innerText === "0" && e.target.innerText==="0"){
            
            return display.innerText = "0";
             
        }else if (display.innerText.length < 12){
    
            return display.innerText = display.innerText.concat(e.target.innerText).replace(/^0/g, "");
        };
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
    return display.innerText = "0";
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