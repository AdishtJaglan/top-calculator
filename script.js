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

let firstNum = 5;
let secondNum = 5;
let operator = "/";

const operate = (firstNum, secondNum, operator) => {
    if (operator === "+") {
        console.log(add(firstNum, secondNum));
    } else if (operator === "-") {
        console.log(subtract(firstNum, secondNum));
    } else if (operator === "/") {
        console.log(divide(firstNum, secondNum));
    } else {
        console.log(mutliply(firstNum, secondNum));
    }
};

operate(firstNum, secondNum, operator);