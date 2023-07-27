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

let screen = document.querySelector('.screen')
let displayNum = document.querySelectorAll('.num')
console.log(displayNum)

let test = document.getElementById('1')
let span = document.createElement('span')
console.log(test.innerHTML)



for (let i = 0; i < displayNum.length; i++) {
    displayNum[i].addEventListener('click', (e)=> {
        let content = e.target.innerHTML
        span.append(content)
        span.classList.add('displayedNum')
        console.log(span)
        screen.append(span)  
    })
    
}