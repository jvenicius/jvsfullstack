var painel = document.querySelector("#calculator-screen")

var operadores = document.getElementById("operadores")

// operador.addEventListener("keypress", function(s) {
//     const sinais = ['+','-','*','/'];
//     if (sinais.find(element => element == s.key) !== undefined) {
//         operador.value += s.key
//     };
// });

operadores.addEventListener("click", calcular());

painel.addEventListener("keypress", function(e) {
    const numeros = [0,1,2,3,4,5,6,7,8,9];
    if (numeros.find(element => element == e.key) == undefined) {
        e.preventDefault();
    };
    if (e.key == "," || e.key == ".") {
        if (entrada1.value.indexOf('.') == -1) {
            entrada1.value += '.';
        };
    };
});

alert('Ok!')
