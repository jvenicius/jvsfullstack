var painel = document.querySelector(".painel")

var resultado = document.getElementById('resultado');
var historico = document.getElementById('historico');
var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");

// var operador = document.getElementById("sinal")
var operadores = document.getElementById("operadores")


// operador.addEventListener("keypress", function(s) {
//     const sinais = ['+','-','*','/'];
//     if (sinais.find(element => element == s.key) !== undefined) {
//         operador.value += s.key
//     };
// });

operadores.addEventListener("change", calcular());

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
    if (e.key == "," || e.key == ".") {
        if (entrada2.value.indexOf('.') == -1) {
            entrada2.value += '.';
        };
    };
});

function calcular() {
    // var valor = entrada.value;
    // var n = parseFloat(valor);
    var operacao = operadores.options[operadores.selectedIndex].value;
    resultado.classList.add('text-primary');
    resultado.classList.remove('text-muted');
    resultado.innerHTML = `${operacao} Funcionando!`;
    
}