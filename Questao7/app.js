let paragrafoResultado = document.getElementById('resultado');

function calcularNumero(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    
    if (n1%n2 == 0){
        return paragrafoResultado.innerHTML = 'O primeiro número é divisível pelo segundo'
    }else{
        return paragrafoResultado.innerHTML = 'O primeiro número não é divisível pelo segundo'

    }


}