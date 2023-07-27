function addition(a, b) {
    return a+b
}

function subtraction(a, b) {
    return a-b
}

function multiplication(a, b) {
    return a*b
}

function division(a, b) {
    return a/b
}

let firstNumber
let operator
let secondNumber

function operate(oper, firstNum, secondNum) {
    if (oper == '+') {
        addition(firstNum, secondNum)
    }
    if (oper == '-') {
        subtraction(firstNum, secondNum)
    }
    if (oper == '*') {
        multiplication(firstNum, secondNum)
    }
    if (oper == '/') {
        division(firstNum, secondNum)
    }
    
    
}