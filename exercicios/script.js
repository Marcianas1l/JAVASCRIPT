function carregar() {

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var dia = hora + ' horas e ' + minuto + ' minutos';

    var msg = window.document.getElementById('texto');
    msg.innerHTML = `<p>Agora são ${dia}</p>`

    var img = window.document.getElementById('imagem');

    if (hora >= 6 && hora < 12) {
        img.src = "../imagens/manha.jpg"
    } else if (hora >= 12 && hora <= 17) {
        img.src = "../imagens/tarde.jpg"
    } else if (hora >= 18 && hora <= 24) {
        img.src = "../imagens/noite.jpg"
    } else {
        img.src = "../imagens/madrugada.jpg"
        document.body.style.background = '#000';
        document.body.style.color = "#fff";
    }
}