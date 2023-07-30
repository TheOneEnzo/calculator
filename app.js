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
        
    }
    else{
        hidden.innerHTML = ''
    }
}




clearBTN.addEventListener('click', ()=>{
    clear()
    hidden.innerHTML = ''
})


divBTN.addEventListener('click', ()=> {
    
    eval1 = document.querySelector('#firstNumber')
    eval2 = document.querySelector('#operator')
    let eval3

    if ((eval1 !== null) && (eval2 !== null)) {
        eval3 = document.querySelector('.displayedNum')

        let r = operate(Number(eval1.innerHTML), eval2.innerHTML, Number(eval3.innerHTML))
        clearAll()
        clear()
        let constemp = document.createElement('span')
        let constemp2 = document.createElement('span')
        constemp.append(r)
        constemp.setAttribute('id', 'firstNumber')
        constemp2.textContent = '/'
        constemp2.setAttribute('id', 'operator')
        hidden.append(constemp)
        hidden.append(constemp2)

        
    }else{
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
    }
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


    eval1 = document.querySelector('#firstNumber')
    eval2 = document.querySelector('#operator')
    let eval3

    if ((eval1 !== null) && (eval2 !== null)) {
        eval3 = document.querySelector('.displayedNum')

        let r = operate(Number(eval1.innerHTML), eval2.innerHTML, Number(eval3.innerHTML))
        clearAll()
        clear()
        let constemp = document.createElement('span')
        let constemp2 = document.createElement('span')
        constemp.append(r)
        constemp.setAttribute('id', 'firstNumber')
        constemp2.textContent = '*'
        constemp2.setAttribute('id', 'operator')
        hidden.append(constemp)
        hidden.append(constemp2)

    }else{
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
    }




})

subBTN.addEventListener('click', ()=>{



    eval1 = document.querySelector('#firstNumber')
    eval2 = document.querySelector('#operator')
    let eval3

    if ((eval1 !== null) && (eval2 !== null)) {
        eval3 = document.querySelector('.displayedNum')

        let r = operate(Number(eval1.innerHTML), eval2.innerHTML, Number(eval3.innerHTML))
        clearAll()
        clear()
        let constemp = document.createElement('span')
        let constemp2 = document.createElement('span')
        constemp.append(r)
        constemp.setAttribute('id', 'firstNumber')
        constemp2.textContent = '-'
        constemp2.setAttribute('id', 'operator')
        hidden.append(constemp)
        hidden.append(constemp2)

    }else{
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
    }

} )

addBTN.addEventListener('click', ()=>{



    eval1 = document.querySelector('#firstNumber')
    eval2 = document.querySelector('#operator')
    let eval3

    if ((eval1 !== null) && (eval2 !== null)) {
        eval3 = document.querySelector('.displayedNum')

        let r = operate(Number(eval1.innerHTML), eval2.innerHTML, Number(eval3.innerHTML))
        clearAll()
        clear()
        let constemp = document.createElement('span')
        let constemp2 = document.createElement('span')
        constemp.append(r)
        constemp.setAttribute('id', 'firstNumber')
        constemp2.textContent = '+'
        constemp2.setAttribute('id', 'operator')
        hidden.append(constemp)
        hidden.append(constemp2)

    }else{
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
    }
})