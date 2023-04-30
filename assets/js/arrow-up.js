// Description: Botão que rola a página para o topo
// o botão só aparece quando a página rolar "var pixel = 300px"
// pegar o botão no DOM
var btn = document.getElementById('topBtn');

// deixar o botão invisível ao carregar a página
btn.style.display = "none";

// pegar a posição da página
window.onscroll = function() {
    scrollFunction()
};

// função que mostra o botão
function scrollFunction() {
  var pixel = 300;
    if (document.body.scrollTop > pixel || document.documentElement.scrollTop > pixel) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// função que rola a página para o topo
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
// fim do botão que rola a página para o topo