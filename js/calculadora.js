var painel = document.querySelector(".painel")
var resultado = document.getElementById('resultado');
var historico = document.getElementById('historico');
var entrada = document.querySelector("#entrada1");
// var entrada2 = document.querySelector("#entrada2");
// var operadores = document.querySelector("#operadores");

// var operacao = operadores.options[operadores.selectedIndex].text;

const numeros = [0,1,2,3,4,5,6,7,8,9]
const operadores = ['+','-','*','/']

painel.addEventListener("keypress", function(e){
    if (numeros.find(element => element == e.key) == undefined && operadores.find(element => element == e.key) == undefined){
        e.preventDefault();
    }
    if (e.key == "," || e.key == ".") {
        if (entrada.value.indexOf('.') == -1) {
            entrada.value += '.';
        }
    }
});

function calcular() {
    var valor = entrada.value;
    var n = parseFloat(valor);

    // INÍCIO - Cálculos
   
    
    // FIM - Cálculos

    resultado.classList.add('text-primary');
    resultado.classList.remove('text-muted');
    resultado.innerHTML = `value: ${n}, Vetor: ${valor}`;
    
}