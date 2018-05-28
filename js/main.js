const buttons = document.getElementsByClassName("button");
const output = document.querySelectorAll('.output')[0];

const operators = ['+', '-', 'x', '÷'];
let curOperation;
let dotUsed = false;

function formatOutput() {
    let num = output.textContent

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
    let button = buttons[i];
    button.onclick = function(e) {
        let value = e.target.textContent
        if (value.match(/^\d+$/)) {
            output.textContent += value;
        } else {
            switch (value.toUpperCase()) {
                case 'C': 
                    output.textContent = '0';
                    dotUsed = false;
                    break;
                case ',': 
                    if (output.textContent > '' && !dotUsed) {
                        output.textContent += value;
                        dotUsed = true;
                    }
                    break;
            }
        }
        formatOutput();        
    }
}