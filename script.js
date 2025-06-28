function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function updateDisplay(content, add = 0){
    if (add) 
        display.textContent += content;
    else 
        display.textContent = content;
}

function clear(){
    num1 = null;
    num2 = null;
    operator = "";
}

function operate(operator, num1, num2){
    switch (operator){
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);
    }
}

let operator;
let num1;
let num2;

let evaluation = false;

let display = document.querySelector("#display");
let clearButton = document.querySelector("#clear");
let equalButton = document.querySelector("#equals");
let digitButtons = document.querySelectorAll(".digit");
let operatorButtons = document.querySelectorAll(".operator");


clearButton.addEventListener("click", () => {
    clear();
    
    updateDisplay("");
})

equalButton.addEventListener("click", () => {
    if(num1 && display.textContent && !evaluation){
        if(Number(display.textContent) === 0){
            updateDisplay("Bad!");
            evaluation = true;
        } else {
            num2 = Number(display.textContent);
            updateDisplay(operate(operator, num1, num2));
            evaluation = true;
            clear();
        }
    }
})

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        if (!evaluation){
            if(display.textContent.length < 9)
                updateDisplay(digitButton.textContent, 1);
        }
        else {
            updateDisplay(digitButton.textContent);
            evaluation = false;
        }
    })
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (display.textContent && !evaluation){
            if (num1) {
                if(Number(display.textContent) === 0){
                    updateDisplay("Bad!");
                    evaluation = true;

                } else {
                    num2 = Number(display.textContent);
                    let result = operate(operator, num1, num2);
                    num1 = result;
                    updateDisplay(result);
                    evaluation = true;
                }
            } else {
                num1 = Number(display.textContent);
                updateDisplay("");
            }
            operator = operatorButton.textContent;  
        }
    })
})