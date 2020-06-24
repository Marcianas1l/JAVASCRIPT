function verificar() {
    console.log('entrou');
    
    var nascimento = window.document.getElementById('nascimento');
    var ano = nascimento.value;
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - ano;

    var sexo = document.querySelector('input[name="selecao"]:checked').value;
    var frase = document.getElementById('msg');          

    var imagem = document.querySelector('img#foto');

    if ((idade>=1 && idade <=12) && (sexo == "Masculino")) {
        frase.innerHTML = `Verificamos que você é um menino e tem ${idade} Anos`;
        imagem.src = "./imagens/crianca-homem.jpg";
    } else if ((idade >= 1 && idade <= 12) && (sexo == "Feminino")) {
        frase.innerHTML = `Verificamos que você é uma menina e tem ${idade} Anos`;
        imagem.src = "./imagens/crianca-mulher.jpg";
    } else if ((idade >= 13 && idade <=17) && (sexo == "Masculino")) {
        frase.innerHTML = `Verificamos que você é um adolescente e tem ${idade} Anos`;
        imagem.src = "./imagens/homem-adolescente.jpg";
    } else if ((idade >= 13 && idade <= 17) && (sexo == "Feminino")) {
        frase.innerHTML = `verificamos que você é uma adolescente e tem ${idade} Anos`;
        imagem.src = "./imagens/mulher-adolescente.jpg";
    } else if ((idade >= 18 && idade <= 21) && (sexo == "Masculino")) {
        frase.innerHTML = `Verificamos que você é um homem e tem ${idade} Anos`;
        imagem.src = "./imagens/homem-adulto.jpg"
    } else if ((idade >= 18 && idade <= 21) && (sexo == "Feminino")) {
        frase.innerHTML = `Vericamos que você é uma homem e tem ${idade} Anos`;
        imagem.src = "./imagens/mulher-adulta.jpg";
    } else if ((idade >= 22 && idade <= 110) && (sexo == "Masculino")) {
        frase.innerHTML = `Verificamos que você é um homem e tem ${idade} Anos`;
        imagem.src = "./imagens/homem-idoso.jpg";
    } else if ((idade >= 22 && idade <= 110) && (sexo == "Feminino")) {
        frase.innerHTML = `Verificamos que você é uma mulher e tem ${idade} Anos`;
        imagem.src = "./imagens/mulher-idosa.jpg"
    } else {
        frase.innerHTML = `sua idade é:  ${idade} Anos`;
        imagem.src = ".imagens/nana.jpg";
    }

}
