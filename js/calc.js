const Calculator = {
    calc: document.getElementById('calc'),
    output: document.getElementById('output'),
    currentInput: '',
    inputDigits: 0,
    updateDisplay: function() {
        output.textContent = this.currentInput;
    },
    appendDigit: function(value) {
        this.currentInput += value;
        this.updateDisplay();
    },    
    handleEvent: function(e) {
        const dataset = e.target.dataset;
        switch (dataset.type) {
            case 'value':
                this.appendDigit(dataset.value);
                break;
            case 'command':

                break;
            case 'operation':

                break
            default:
                break;
        }
        console.log();
    },    
    init: function () {
        for(let button of document.querySelectorAll('.button')){
            button.addEventListener('click', this.handleEvent.bind(this));
        }
    }
    /*
    const btnDigits = document.querySelectorAll('.digit');
    const btnOperators = document.querySelectorAll('.operator:not(.equals)');
    const btnEquals = document.getElementById('equals');
    

    function onClickDigitHandle(e) {
        onClickEvent(e.target.dataset.value);
    }

    function onClickOperatorHandle(e) {
        let operator;
        switch (e.target.dataset.value.toUpperCase()) {
            case 'PLUS':    
                operator = '+';
                break;    
            default:
                break;
        }
        onClickEvent(operator);
    }

    function onClickEqualsHandle(e) {
        calculate();
    }

    function onClickEvent(e) {
        output.textContent += e;
        //console.log(e);
    }

    function calculate() {
        output.textContent = eval(output.textContent);
    }

    for (let button of btnDigits) { button.onclick = onClickDigitHandle; }
    for (let button of btnOperators) { button.onclick = onClickOperatorHandle; }

    btnEquals.onclick = onClickEqualsHandle;

    document.addEventListener("keydown", function (e) {
        let key = e.keyCode;
        let shift = e.shiftKey;

        if (key == '27') { // Esc
            //input.value = '';
            //dotUsed = false;
        } else if (key == '13' || (!shift && key == '187')) { // '=' - Enter or char =
            calculate();
            //onClickEvent('=');
        } else if (key == '111' || key == '191') { // '/' or numpad '/' 
            onClickEvent('÷');
        } else if (key == '106' || (shift && key == '56')) { // '*' or shift + 8
            onClickEvent('x');
        } else if (key == '109' || key == '189') { // '-' or numpad '-'
            onClickEvent('-');
        } else if (key == '107' || (shift && key == '187')) { // '+' or shift + =
            onClickEvent('+');
        } else if (key == '190' || key == '110') {
            onClickEvent('.');
        } else if (
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105)) {
            if (key > 95) {
                key -= 48;
            }

        onClickEvent(String.fromCharCode(key));       
        }

    });
    */    
}

window.addEventListener('load', function load(evt) {
    window.removeEventListener('load', load);
    Calculator.init();
});  