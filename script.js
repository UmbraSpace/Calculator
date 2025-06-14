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

let display = document.querySelector("#display");

let clearButton = document.querySelector("#clear");

let digitButtons = document.querySelectorAll(".digit");


clearButton.addEventListener("click", () => {
    display.textContent = "";
})

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", () => {
        display.textContent += digitButton.textContent;
    })
})