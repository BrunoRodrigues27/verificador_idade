
var msg = window.document.getElementById("mensagem")
var botao = window.document.getElementById("botao")
botao.addEventListener("click", verificar)

function verificar() {

    var txtidade = window.document.getElementById("iidade")
    var idade = Number(txtidade.value)

    if (idade >= 0 && idade <= 12) {
        msg.innerHTML = `Criança de ${idade} anos detectada!`
    } else if (idade >= 13 && idade <= 17) {
        msg.innerHTML = `Adolescente de ${idade} anos detectado!!`
    } else if (idade >= 18 && idade <= 50) {
        msg.innerHTML = `Adulto de ${idade} anos detectado!`
    } else if (idade > 50 && idade < 100){
        msg.innerHTML = `Idoso de ${idade} anos detectado!`
    } else {
        window.alert("Erro! Idade inválida. (idade min: 0 max: 99)")
    }


}