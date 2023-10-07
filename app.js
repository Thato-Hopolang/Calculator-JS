class Calculator {
    constructor(previousOutputDisplay, currentOutputDisplay) {
        this.previousOutputDisplay = previousOutputDisplay
        this.currentOutputDisplay = currentOutputDisplay
        this.clear()
    }

    clear () {
        this.previousOutputDisplay = ''
        this.currentOutputDisplay = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

        if (number === '.' && this.currentOperation.includes('.')) return
        this.currentOperation = this.currentOperation.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOutputDisplay.innerText = this.currentOperation;
    }
}

const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOutputDisplay = document.querySelector('[data-previous-output]');
const currentOutputDisplay = document.querySelector('[data-current-output]');

const calculator = new Calculator(previousOutputDisplay,currentOutputDisplay);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})