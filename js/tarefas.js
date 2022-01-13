let titulo = document.getElementById('entradaTitulo');
let descricao = document.getElementById('entradaDescricao');
let salvar = document.getElementById("salvar");
let salvos = document.getElementById('salvos');

// salvar.addEventListener("click", salvarItem());

function salvarItem() {
    let item = document.createElement("option");
    item.value = descricao.value;
    item.text = titulo.value;
    salvos.appendChild(item);
};
