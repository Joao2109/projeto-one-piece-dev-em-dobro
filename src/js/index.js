var personagem;
var botao;
function select(val) {
    personagem = document.getElementsByClassName('personagem');
    botao = document.getElementsByClassName('botao');
    for (i = 0; i < botao.length; i++) {
        personagem[i].classList.remove('selecionado');
        botao[i].classList.remove('selecionado');
    }
    $(function () {
        $(personagem).fadeOut(0);
        $(personagem[val]).fadeIn(500);
    });
    botao[val].classList.add('selecionado');
}
