const buttons = document.getElementsByClassName("button");
const output = document.querySelectorAll('.output')[0];

const operators = ['+', '-', 'x', '÷'];
let curOperation;
let dotUsed = false;

output.addEventListener('edit', function() {
    console.log('edit');
})

for(let i=0; i < buttons.length; i++) {
    let button = buttons[i];
    button.onclick = function(e) {
        let value = e.target.innerHTML
        //console.log(value);
        if (value.match(/^\d+$/)) {
            output.innerHTML += value;
        } else {
            switch (value.toUpperCase()) {
                case 'C': 
                    output.innerHTML = '0';
                    dotUsed = false;
                    break;
                case ',': 
                    if (output.innerHTML > '' && !dotUsed) {
                        output.innerHTML += value;
                        dotUsed = true;
                    }
                    break;
            }
        }
    }
}