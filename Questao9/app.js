let paragrafoResultado = document.getElementById('resultado');

function calcularIdade(){
    let anoAtual = parseFloat(document.getElementById('anoatual').value);
    let anoNascimento = parseFloat(document.getElementById('anonascimento').value);
    let idade = anoAtual - anoNascimento

    return paragrafoResultado.innerHTML = `Idade: ${idade} anos`
    
}