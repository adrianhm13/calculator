function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    result = 0;

    switch (operator) {
        case "add":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
    }
    return result;
};

function refreshDisplay(valuePressed) {
    let valueDisplay;

    arrayDisplay.push(valuePressed);
    console.log(arrayDisplay);
    valueDisplay = arrayDisplay.join('');

    display.innerHTML = valueDisplay;
};

function pressOperator(operatorPressed) {

    if (arrayDisplay.length != 0) {  //If no input numbers, do nothing when press operator
        if (firstInput != "" && secondInput != "") { // if firstInput and secondInput has values, operate them and clean secondInput value, result will be the new firstInput
            
            secondInput = parseInt(arrayDisplay.join(''));
            arrayDisplay.length = 0;
            
            operate(operator, firstInput, secondInput); //First operate with the previous operator 
            showResult();

            operator = operatorPressed;  //Then it changes to the new operator pressed to make the new calculation
            secondInput = "";
            firstInput = result;
            
            
        } else {
            if (firstInput == "") {

                operator = operatorPressed;
                firstInput = parseInt(arrayDisplay.join(''));
                arrayDisplay.length = 0;
                clearDisplay();

            } else {
                

                secondInput = parseInt(arrayDisplay.join(''));
                arrayDisplay.length = 0;
                console.log("lalaa")
                operate(operator, firstInput, secondInput);
                showResult();

                operator = operatorPressed;
                firstInput = result;
                
            }
        }


    }

}

function pressEqual() {
    if (result != 0) {
        firstInput = result;
        secondInput = parseInt(arrayDisplay.join(''));
        arrayDisplay.length = 0;
        operate(operator, firstInput, secondInput);
        showResult();
    } else {
        if (firstInput != 0) {
            secondInput = parseInt(arrayDisplay.join(''));
            arrayDisplay.length = 0;
            operate(operator, firstInput, secondInput);
            showResult();
        }
    }
}
function clearDisplay() {
    display.innerHTML = "";
}

function showResult() {
    display.innerHTML = result;
}

let result = 0;
let operator = "";
let firstInput = "";
let secondInput = "";
const arrayDisplay = [];

//Functions for buttons

const number1 = document.getElementById("1");
number1.addEventListener("click", () => {
    valuePressed = number1.value;
    refreshDisplay(valuePressed);
});

const number2 = document.getElementById("2");
number2.addEventListener("click", () => {
    valuePressed = number2.value;
    refreshDisplay(valuePressed);
});

const number3 = document.getElementById("3");
number3.addEventListener("click", () => {
    valuePressed = number3.value;
    refreshDisplay(valuePressed);
});

const number4 = document.getElementById("4");
number4.addEventListener("click", () => {
    valuePressed = number4.value;
    refreshDisplay(valuePressed);
});

const number5 = document.getElementById("5");
number5.addEventListener("click", () => {
    valuePressed = number5.value;
    refreshDisplay(valuePressed);
});

const number6 = document.getElementById("6");
number6.addEventListener("click", () => {
    valuePressed = number6.value;
    refreshDisplay(valuePressed);
});

const number7 = document.getElementById("7");
number7.addEventListener("click", () => {
    valuePressed = number7.value;
    refreshDisplay(valuePressed);
});
const number8 = document.getElementById("8");
number8.addEventListener("click", () => {
    valuePressed = number8.value;
    refreshDisplay(valuePressed);
});

const number9 = document.getElementById("9");
number9.addEventListener("click", () => {
    valuePressed = number9.value;
    refreshDisplay(valuePressed);
});

const number0 = document.getElementById("0");
number0.addEventListener("click", () => {
    valuePressed = number0.value;
    refreshDisplay(valuePressed);
});

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
    operatorPressed = "add";
    pressOperator(operatorPressed);
});

const subBtn = document.getElementById("subtract");
subBtn.addEventListener("click", () => {
    operatorPressed = "subtract";
    pressOperator(operatorPressed);
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener("click", () => {
    operatorPressed = "multiply";
    pressOperator(operatorPressed);
});

const equalBtn = document.getElementById("equal");
equalBtn.addEventListener("click", () => {
    pressEqual();
});
const display = document.getElementById("display");


