var painel = document.querySelector(".painel")
var resultado = document.getElementById('resultado');
var historico = document.getElementById('historico');
var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");
var operadores = document.querySelector("#operadores");
var operador = $('#operadores option:selected').text();

const numeros = [0,1,2,3,4,5,6,7,8,9,',']

painel.addEventListener("keypress", function(e){
    if (numeros.find(element => element == e.key) == undefined) {
        e.preventDefault();
    }
});

function calcular() {
    var valor1 = entrada1.value;
    var strn1 = valor1.replace(/,/, '.');
    var n1 = Number(strn1);
    var valor2 = entrada2.value;
    var strn2 = valor2.replace(/,/, '.');
    var n2 = Number(strn2);
    resultado.classList.add('text-primary');
    resultado.classList.remove('text-muted');
    if (operadores.value)
    resultado.innerHTML = `Entrada 1: ${n1}. Entrada 2: ${n2}. ${operador}`;
}