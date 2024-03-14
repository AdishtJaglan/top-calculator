const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
let display = "";

buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        if (button.textContent === "AC") {
            display = "";
        } else if (button.textContent === "=") {
            display = evaluateExpression(display);
        } else {
            display += button.textContent;
        }
        input.value = display;
    });
});

const evaluateExpression = (expression) => {
    return parseAndCalculate(expression);
};

const parseAndCalculate = (expression) => {
    const tokens = expression.match(/[+\-*/]|\d+/g);
    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseFloat(tokens[i + 1]);

        switch (operator) {
            case "+":
                result = add(result, operand);
                break;
            case "-":
                result = subtract(result, operand);
                break;
            case "*":
                result = multiply(result, operand);
                break;
            case "/":
                if (operand === 0) {
                    return "Error: Division by zero";
                }
                result = divide(result, operand);
                break;
            default:
                return "Error: Invalid operator";
        }
    }

    return result;
};


const add = (...num) => {
    return num.reduce((total, element) => total + element, 0);
};

const subtract = (...num) => {
    return num.reduce((total, element) => total - element);
};

const multiply = (...num) => {
    return num.reduce((total, element) => total * element);
};

const divide = (...num) => {
    return num.reduce((total, element) => total / element);
};