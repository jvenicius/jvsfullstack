
let bg = document.getElementById("bg-principal");
let desc = document.getElementById("p-descricao");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

// function desselecionar() {
//     p1.classList.remove("active")
//     p2.classList.remove("active")

//     desc.classList.add("text-muted")
//     desc.innerHTML = `A descrição do projeto aparecerá aqui.`
// }

function selecionarP1() {
    p1.classList.add("active")
    p2.classList.remove("active")
    p3.classList.remove("active")

    desc.innerHTML = `
    <div class="centralizado">
    <img src="img/img-calculadora.jpg" id="img-calculadora" alt="img-calculadora" width="400">
    </div>
    <div class="mt-2">
    <p>
    Calculadora é um dispositivo para a realização de cálculos numéricos. São considerados distinto das máquinas calculadoras
     e dos computadores, no sentido em que a calculadora é um 
    dispositivo voltado para fins específicos e que não pode ser qualificada como uma Máquina de Turing - <i>Wikipedia</i>.</p>
    <p>O projeto da calculadora está em desenvolvimento e 
    pode ser acessada clicando <a href="calculadora.html">aqui</a>.</p>
    </div>
    `
    desc.classList.remove("text-muted")
    desc.classList.add("text-white")
}

function selecionarP2() {
    p1.classList.remove("active")
    p2.classList.add("active")
    p3.classList.remove("active")

    desc.innerHTML = `Descrição do projeto sobre o Quiz.`
    desc.classList.remove("text-muted")
    desc.classList.add("text-white")
}

function selecionarP3() {
    p1.classList.remove("active")
    p2.classList.remove("active")
    p3.classList.add("active")

    desc.innerHTML = `O projeto de tarefas está atualmente em desenvolvimento
    e pode ser acessado clicando <a href="tarefas.html">aqui</a>.`
    desc.classList.remove("text-muted")
    desc.classList.add("text-white")
}


