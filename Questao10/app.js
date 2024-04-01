let paragrafoResultado = document.getElementById('resultado');

function calcularSalario(){
    let salarioAtual = parseFloat(document.getElementById('salarioatual').value);
    let novosalario = 0

    if (salarioAtual <=2000){
        novosalario = salarioAtual + salarioAtual*0.10
    }else if(salarioAtual > 5000 && salarioAtual < 10000){
        novosalario = salarioAtual + salarioAtual*0.05;
    }else if(salarioAtual > 10000 && salarioAtual < 15000){
        novosalario = salarioAtual + salarioAtual*0.02;
    }

    return paragrafoResultado.innerHTML = `Salario original: ${salarioAtual} | Salario com aumento: ${novosalario}`
    
}