var display = document.querySelector('.calculator-display');
var buttons = Array.from(document.getElementsByClassName('btn-calc'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.value) {
            case 'C':
                display.value = '';
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                }  catch {
                    display.value = 'Erro!'
                }
                break;
            case '.':
                if (display.value.indexOf('.') == -1) {
                    display.value += '.';
                };
                break;
            default:
                errorClearAndAddNewNumber(e.target.value);
        }
    });
});

display.addEventListener("keypress", function(e) {
    const numeros = [0,1,2,3,4,5,6,7,8,9,'/','*','-','+'];
    var erro = (display.value === 'Erro!');

    if (numeros.find(element => element == e.key) !== undefined && !erro) {
        display.value += e.key;
        console.log(e.key)
    } else {
        display.value = e.key;
    }

    switch (e.key) {
        case ',':
            if (display.value.indexOf('.') == -1) {
                display.value += '.';
            };
            break
        case '.':
            if (display.value.indexOf('.') == -1) {
                display.value += '.';
            };
            break
        case 'Enter':
            try {
                display.value = eval(display.value);
                console.log(eval(display.value))
            }  catch {
                display.value = 'Erro!'
            }
            break
        default:
            e.preventDefault();
        };
});

function errorClearAndAddNewNumber (newNumber) {
    if (display.value === "Erro!") {
        display.value = newNumber;
    } else {
        display.value += newNumber;
    }
};
