var painel = document.getElementById('painel');
var resultado = document.getElementById('resultado');
var historico = document.getElementById('historico');

function calcular() {
    var valor = Number(painel.value)
    resultado.classList.add('text-primary')
    resultado.classList.remove('text-muted')
    resultado.innerHTML = `${valor}`
}