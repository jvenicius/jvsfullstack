var painel = document.querySelector(".painel")
var resultado = document.getElementById('resultado');
var historico = document.getElementById('historico');
var entrada = document.querySelector("#entrada1");
// var entrada2 = document.querySelector("#entrada2");
// var operadores = document.querySelector("#operadores");

// var operacao = operadores.options[operadores.selectedIndex].text;

const numeros = [0,1,2,3,4,5,6,7,8,9,',']

painel.addEventListener("keypress", function(e){
    if (numeros.find(element => element == e.key) == undefined) {
        e.preventDefault();
    }
});

function calcular() {
    var valor = entrada.value;
    var strn = valor.replace(/,/, '.');
    var n = Number(strn);

    // INÍCIO - Cálculos
   
    
    // FIM - Cálculos

    var strRes = toSring(res);
    var strn = strRes.replace(/./, ',');

    resultado.classList.add('text-primary');
    resultado.classList.remove('text-muted');
    resultado.innerHTML = `${n}`;
    
}