var display = document.getElementById('calculator-display');
var buttons = Array.from(document.getElementsByClassName('btn-calc'));

console.log(buttons);

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
                display.value += e.target.value;
        }
    });
});

display.addEventListener("keypress", function(e) {
    const numeros = [0,1,2,3,4,5,6,7,8,9,'/','*','-','+'];
    if (numeros.find(element => element == e.key) == undefined) {
        e.preventDefault();
    };
    if (e.key == "," || e.key == ".") {
        if (display.value.indexOf('.') == -1) {
            display.value += '.';
        };
    };
});


