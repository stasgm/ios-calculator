const buttons = document.getElementsByClassName("button");
const output = document.querySelectorAll('.output')[0];

const operators = ['+', '-', 'x', '÷', 'c', '='];
let lastOperation;
let dotUsed = false;
let lastSymbol;

document.addEventListener("keydown", function(e) {
    var key = e.keyCode;
    //var inputValue = input.value;
    var shift = e.shiftKey;

    console.log(key);
});

function updateState() {
    if (curSymbol > '' ) {
        // digit or comma
        output.textContent +=  curSymbol;
        curSymbol = '';
    } else if (curOperation > '') {
        // math operator or 'Clear'
        switch (curOperation) {
            case 'c':
                dotUsed = false;
                break;        
            default:
                break;
        }
    }

    curOperation = '';
    
    let num = output.textContent;

    num = num.replace(/\s/g, ''); 
    if  (num.indexOf(',') === num.length - 1) {
        // last symbol is comma
        num = num.replace(',', '.');    
        num = parseFloat(num).toLocaleString() + ',';
    } else {
        num = num.replace(',', '.');    
        num = parseFloat(num).toLocaleString();  
    }
    output.textContent = num;

    //num = num.replace(/\s/g, ''); 
    //num = num.replace(',', '.');
    //num = parseFloat(num).toLocaleString();
    
    //output.textContent = Number(num.toFixed(0)).toLocaleString().split(/\s/).join(',') + '.' + Number(num.toString().slice(num.toString().indexOf('.')+1)).toLocaleString();
}

for(let i=0; i < buttons.length; i++) {
    curSymbol = '';
    let button = buttons[i];
    button.onclick = function(e) {
        let value = e.target.textContent
        if (value.match(/^\d+$/)) {
            curSymbol = value
            //output.textContent += value;
        } else if (operators.indexOf(value)) {
            switch (value.toUpperCase()) {
                case 'C': 
                    //output.textContent = '0';
                    curOperation = 'c'
                    break;
                case ',': 
                    if (output.textContent > '' && !dotUsed) {
                        curSymbol = value
                        //output.textContent += value;
                        dotUsed = true;
                    }
                    break;
            }
        }
        updateState();        
    }
}