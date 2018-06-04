const buttons = document.getElementsByClassName('button');
const calc = document.getElementById('calc');
const output = document.getElementById('output');

const operators = ['PLUS', 'MINUS', 'MULTIPLICATION', 'DIVISION', 'EQUALS'];
const operation = ['CLEAR', 'SIGN', 'PERCENTAGE'];

const display = {
    10: "50px",
};

let lastOperator;
let lastOperation;
let lastDigit;

let dotUsed = false;
let operatorUsed = true;

let calcValue = 0;
let maxDigit = 10

let operator;

document.addEventListener("keydown", function (e) {
    /* handle keyboard input  */
    var key = e.keyCode;
    //var inputValue = input.value;
    var shift = e.shiftKey;

    console.log(key);
});

function calculate() {
    try {
        calcValue = eval(calcValue);
    } 
    catch {
        calcValue = 'error';
    }
    return calcValue;
}

function unsetOperators(button) {
    let btnOperators = document.getElementsByClassName('operator');    
    for (let i=0; i < btnOperators.length; i++) {
        if (button !== btnOperators[i]) {
            btnOperators[i].classList.remove('checked');
        } else {
            button.classList.toggle('checked');
        }
    }
}

function updateState() {
    calcValue = calc.dataset.value;
    if (lastDigit) {
        // digit or comma        
        if (lastOperator) {
            switch (lastOperator) {
                case 'PLUS':
                    operator = '+'
                    break;
                case 'MINUS':
                    operator = '-'
                    break;
                default:
                    break;
            }
            calcValue = calcValue + operator + lastDigit; 
        } else {
            calcValue = calcValue.length > (dotUsed ? maxDigit + 1 : maxDigit) ? calcValue : calcValue + lastDigit;
        }
        lastDigit = '';
    } else if (lastOperator) {
        // 
    } else if (lastOperation) {
        switch (lastOperation) {
            case 'CLEAR':
                dotUsed = false;
                calcValue = 0;
                break;
            case 'PERCENTAGE':
                calcValue = calcValue / 100;
                break;
            case 'SIGN':
                calcValue = -calcValue;
                break;
            default:
                break;
        }
    }

    unsetOperators();в
    lastOperation = '';
    calc.dataset.value = calculate(calcValue);

    //lastOperator = '';
    //lastDigit = '';

    let num = calcValue.toString();

    num = num.replace(',', '.');
    if (num.indexOf('.') === num.length - 1) {
        num = parseFloat(calcValue).toLocaleString(undefined, { maximumFractionDigits: 6 }) + ',';
    } else {
        num = parseFloat(calcValue).toLocaleString(undefined, { maximumFractionDigits: 6 });
    }
    output.textContent = num;
}

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.onclick = function (e) {
        //lastDigit = '';
        //lastOperator = '';
        //lastOperation = '';

        if (button.classList.contains('operator') && !button.classList.contains('equals')) {
            let btnOperators = document.getElementsByClassName('operator');

            unsetOperators(button);
            if (!button.classList.contains('checked')) {
                lastOperator = '';
            }
        }

        let value = e.target.dataset.value.toUpperCase();
        if (value.match(/^\d+$/)) {
            lastDigit = value;
        } else if (value === 'COMMA') {
            if (calcValue > '' && !dotUsed) {
                lastDigit = '.'
                dotUsed = true;
            }
        } else if (operators.indexOf(value) !== -1) {
            lastOperator = value;
        } else if (operation.indexOf(value) !== -1) {
            lastOperation = value;
        }
        updateState();
    }
}