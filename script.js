const myButtons = document.querySelectorAll('button')

const operators = ['/', '*', '-', '+', '=', '%']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

const expression = document.querySelector('.expression')
let realExpression = ""
const result = document.querySelector('.result')


let canStartNewArgument = true
const numberChecker = (button) => {
    const number = button.textContent

    expression.textContent += number

}

const operatorChecker = (button) => {
    const operator = button.textContent

    try {
        k = Math.round(
            eval(expression.textContent) * 100000000)
        /100000000
        result.textContent = k
        if (!(operator === '=')) {
            expression.textContent = k + operator

        }
    } catch (error) {
        const Length = expression.textContent.length
        if (!(operator === '=')) {
            expression.textContent = k + operator
            expression.textContent = expression.textContent.slice(0,Length-1) + operator

        }
    }

}

myButtons.forEach((button) => {
    if (numbers.includes(button.textContent)) {
        button.addEventListener('click', (event) => {
            numberChecker(button)
        })
    }

    else if (operators.includes(button.textContent)) {
        button.addEventListener('click', (event) => {
            operatorChecker(button)
        })
    }
})

const C_button = document.querySelector('.C')
const CE_button = document.querySelector('.CE')

C_button.addEventListener('click', (event) => {
    expression.textContent = 0
    result.textContent = 0
})

CE_button.addEventListener('click', (event) => {
    result.textContent = 0
})



