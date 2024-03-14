const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
let display = "";

buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        if (button.textContent === "clear") {
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
    const operands = expression.split(/[\+\-\*\/]/);
    const operator = expression.match(/[\+\-\*\/]/);

    if (operands.length !== 2 || !operator) {
        console.log("This 2");
        return "Error.";
    }

    const [num1, num2] = operands.map(parseFloat);

    switch (operator[0]) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return mutliply(num1, num2);
        case "/":
            if (num2 === 0) {
                console.log("This 3");
                return "Error.";
            }
            return divide(num1, num2);
        default:
            return "Invalid Operator.";
    }
};

const add = (...num) => {
    return num.reduce((total, element) => total + element, 0);
};

const subtract = (...num) => {
    return num.reduce((total, element) => total - element);
};

const mutliply = (...num) => {
    return num.reduce((total, element) => total * element);
};

const divide = (...num) => {
    return num.reduce((total, element) => total / element);
};