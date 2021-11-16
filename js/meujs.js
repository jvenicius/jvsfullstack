let bg = document.getElementById("bg-principal")
let desc = document.getElementById("p-descricao")
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

// function desselecionar() {
//     p1.classList.remove("active")
//     p2.classList.remove("active")

//     desc.classList.add("text-muted")
//     desc.innerHTML = `A descrição do projeto aparecerá aqui.`
// }

function selecionarP1() {
    p1.classList.add("active")
    p2.classList.remove("active")

    desc.innerHTML = `Descrição do projeto sobre a Calculadora.`
    desc.classList.remove("text-muted")
    desc.classList.add("text-success")
}

function selecionarP2() {
    p1.classList.remove("active")
    p2.classList.add("active")

    desc.innerHTML = `Descrição do projeto sobre o Quiz.`
    desc.classList.remove("text-muted")
    desc.classList.add("text-success")
}

