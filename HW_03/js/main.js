const operator = prompt("Please enter the following operator '+, -, *, /' to perform the calculation");
const firstNum = parseFloat(prompt("Please enter the first number"));
const secondNum = parseFloat(prompt("Please enter the second number"));

if (operator === '+') {
    result = firstNum + secondNum;
}

else if (operator === '-') {
    result = firstNum - secondNum;
}

else if (operator === '*') {
    result = firstNum * secondNum;
}

else if (operator === '/') {
    result = firstNum / secondNum;
}

else {
    alert("The entered value is not valid, please select from the given operators")
}

window.alert(" Result is " + result);  