const buttons = document.getElementsByClassName("button");

for(let i=0; i < buttons.length; i++) {
    let button = buttons[i];
    button.onclick = function(e) {
        let value = e.target.innerHTML
        //console.log(value);
        const output = document.querySelectorAll('.output')[0];        
        if (value.match(/^\d+$/)) {
            output.innerHTML += value;
        } else {
            switch (value.toUpperCase()) {
                case 'C': output.innerHTML = '0';
                break;
            }
        }
    }
}