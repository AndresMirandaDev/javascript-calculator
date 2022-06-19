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

function getNumber () {
    const numbers = document.querySelectorAll(".number");
    const display = document.querySelector("#display")
    const newValue = [];
    numbers.forEach((button)=>{
       button.addEventListener("click", (e)=>{
         if(display.innerText === "0" && e.target.innerText==="0"){
            return display.innerText = "0";
         }else if(display.innerText.length < 21){
            newValue.push(e.target.innerText);
            return display.innerText = newValue.join("");
         }else if(display.innerText === "0" && e.target.innerText === "."){
             
         }
       })
    })
}
getNumber();
