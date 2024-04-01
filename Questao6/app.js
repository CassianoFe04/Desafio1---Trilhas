let paragrafoResultado = document.getElementById('resultado');

function calcularNumero(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let resultado = n1 * n2
    
    return paragrafoResultado.innerHTML = `Resultado da multiplicação: ${resultado}`

}