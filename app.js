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

function operate(firstNum, oper, secondNum) {
    if (oper ==='+') {
        return addition(firstNum, secondNum)
    }
    if (oper === '-') {
        return subtraction(firstNum, secondNum)
    }
    if (oper === '*') {
        return multiplication(firstNum, secondNum)
    }
    if (oper === '/') {
        return division(firstNum, secondNum)
    }
    
    
}

let screen = document.querySelector('.screen')
let displayNum = document.querySelectorAll('.num')

let test = document.getElementById('1')
let span = document.createElement('span')


for (let i = 0; i < displayNum.length; i++) {
    displayNum[i].addEventListener('click', (e)=> {
        let content = e.target.innerHTML
        span.append(content)
        span.classList.add('displayedNum')
        screen.append(span)  
    })
    
}

let clearBTN = document.querySelector('#clear')
let divBTN = document.querySelector('#division')
let multBTN = document.querySelector('#multiplication')
let subBTN = document.querySelector('#subtraction')
let addBTN = document.querySelector('#addition')
let enterBTN = document.querySelector('#enter')
let hidden = document.querySelector("#hidden")
let num1 = document.querySelector('#firstNumber')
let num2 = document.querySelector('#secondNumber')
let op = document.querySelector('#operator')

function clear() {
    span.textContent = ''
}

function clearAll(params) {
    if ((hidden.hasAttribute('id'))) {
        console.log('hej')
    }
    else{
        hidden.innerHTML = ''
    }
}

clearBTN.addEventListener('click', clear)


divBTN.addEventListener('click', ()=> {

    clearAll()
    
    temp = document.createElement('span')
    temp2 = document.createElement('span')
    temp2.append(span.innerHTML)
    clear()
    temp2.setAttribute('id', 'firstNumber') 
    hidden.append(temp2)
    temp.textContent = '/'
    temp.setAttribute('id', 'operator')
    hidden.append(temp)
    hidden.removeAttribute('id')
})


enterBTN.addEventListener('click', ()=>{
    secondNumber = document.querySelector('.displayedNum')
    operator = document.querySelector('#operator')
    firstNumber = document.querySelector('#firstNumber')

    finalOper = operator.innerHTML
    let temp3 = document.createElement('span')
    temp3.textContent = secondNumber.innerHTML
    let finalFirstNum = Number(firstNumber.innerHTML)
    let finalSecondNum = Number(secondNumber.innerHTML)
    let result = operate(finalFirstNum, finalOper, finalSecondNum)
    clear()
    secondNumber.append(result)
    temp3.setAttribute('id', 'secondNumber')
    hidden.append(temp3)

})

multBTN.addEventListener('click', ()=>{

    clearAll()

    temp = document.createElement('span')
    temp2 = document.createElement('span')
    temp2.append(span.innerHTML)
    clear()
    temp2.setAttribute('id', 'firstNumber') 
    hidden.append(temp2)
    temp.textContent = '*'
    temp.setAttribute('id', 'operator')
    hidden.append(temp)
    hidden.removeAttribute('id')
})

subBTN.addEventListener('click', ()=>{

    clearAll()

    temp = document.createElement('span')
    temp2 = document.createElement('span')
    temp2.append(span.innerHTML)
    clear()
    temp2.setAttribute('id', 'firstNumber') 
    hidden.append(temp2)
    temp.textContent = '-'
    temp.setAttribute('id', 'operator')
    hidden.append(temp)
    hidden.removeAttribute('id')
} )

addBTN.addEventListener('click', ()=>{

    clearAll()

    temp = document.createElement('span')
    temp2 = document.createElement('span')
    temp2.append(span.innerHTML)
    clear()
    temp2.setAttribute('id', 'firstNumber') 
    hidden.append(temp2)
    temp.textContent = '+'
    temp.setAttribute('id', 'operator')
    hidden.append(temp)
    hidden.removeAttribute('id')
})