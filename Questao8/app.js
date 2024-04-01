let listaSalariosFuncionarios = [];

function adicionaSalario(){
    let salario = parseFloat(document.querySelector('input').value);
    listaSalariosFuncionarios.push(salario);
}

function calculaSalario(){

    let somaSalario = 0;
    for(let i = 0; i < listaSalariosFuncionarios.length; i++)
    {
        somaSalario+=listaSalariosFuncionarios[i]
    }

    return paragrafoResultado.innerHTML = `Salário total: ${somaSalario}`
    
}