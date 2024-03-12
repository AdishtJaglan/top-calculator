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