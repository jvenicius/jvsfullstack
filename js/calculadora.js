var painel = document.querySelector(".painel")

var resultado = document.getElementById('resultado');

var entrada1 = document.querySelector("#entrada1");
var entrada2 = document.querySelector("#entrada2");

var historico = document.querySelector('#historico');

// var operador = document.getElementById("sinal")
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
    if (e.key == "," || e.key == ".") {
        if (entrada2.value.indexOf('.') == -1) {
            entrada2.value += '.';
        };
    };
});

// var saves = {
//     n1_vec: [],
//     n2_vec: [],
//     res_vec: [],
//     operacao_vec: []
// }

var n1_vec = [];
var n2_vec = [];
var res_vec = [];
var operacao_vec = [];

var c = 0

function calcular() {
    // var valor = entrada.value;
    // var n = parseFloat(valor);
    var n1 = Number(entrada1.value);
    var n2 = Number(entrada2.value);
    var operacao = operadores.options[operadores.selectedIndex].value;
    if (entrada1.length !==0 && entrada2.length !==0) {
        let item = document.createElement("option");
        resultado.classList.add('text-primary');
        resultado.classList.remove('text-muted');
        // resultado.innerHTML = `${operacao}, ${n1}, ${n2}`;
        switch (operacao) {
            case 'adicao':
                var res = n1+n2
                resultado.innerHTML = `${res.toFixed(2)}`
                item.text = `${n1} + ${n2} = ${res}`
                item.value = `${c}`
                historico.appendChild(item);
                n1_vec.push(n1);
                n2_vec.push(n2);
                res_vec.push(res);
                operacao_vec.push(operacao);
                break
            case 'multiplicacao':
                var res = n1*n2
                resultado.innerHTML = `${res.toFixed(2)}`
                item.text = `${n1} x ${n2} = ${res}`
                item.value = `${c}`
                historico.appendChild(item);
                // saves.n1_vec.push(n1);
                // saves.n2_vec.push(n2);
                // saves.res_vec.push(res);
                // saves.operacao_vec.push(operacao);
                break
            case 'divisao':
                var res = n1/n2
                resultado.innerHTML = `${res.toFixed(2)}`
                item.text = `${n1} / ${n2} = ${res}`
                item.value = `${c}`
                historico.appendChild(item);
                // saves.n1_vec.push(n1);
                // saves.n2_vec.push(n2);
                // saves.res_vec.push(res);
                // saves.operacao_vec.push(operacao);
                break
            case 'subtracao':
                var res = n1-n2
                resultado.innerHTML = `${res.toFixed(2)}`
                item.text = `${n1} - ${n2} = ${res}`
                item.value = `${c}`
                historico.appendChild(item);
                // saves.n1_vec.push(n1);
                // saves.n2_vec.push(n2);
                // saves.res_vec.push(res);
                // saves.operacao_vec.push(operacao);
                break
        }
    } c++
}

function redefinir() {
    historico.innerHTML = ``
    resultado.innerHTML = `Informe valores`
    resultado.classList.add('text-muted')
}

// function selecionar() {
//     var selected = historico.options[historico.selectedIndex];
//     var n1_s = n1_vec[selected.value]

//     window.alert(`${n1_vec}, ${selected.text}, ${c}`)
// }

    // historico.options.length
    // entrada1.value = item.value[0];
    // entrada2.value = item.value[1];
    // resultado.innerHTML = item.value[2];
    // operacao.value = item.value[3];
