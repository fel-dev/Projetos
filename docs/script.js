let botao = document.GetElementById(`temaBotao`)
let data = new date()

function mudaTema() {
    document.body.classList.toggle("dark");
    botao.innerHTML = `dark`
}