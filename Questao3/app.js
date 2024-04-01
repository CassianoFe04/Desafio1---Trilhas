let titulo = document.querySelector('h1');
titulo.innerHTML = 'Escola+';


function calcularMedia(){
    let nota1 = parseFloat(document.getElementById('1').value);
    let nota2 = parseFloat(document.getElementById('2').value);
    let nota3 = parseFloat(document.getElementById('3').value);

    let media = (nota1 + nota2 + nota3) / 3;
    if (media>=7){
        alert('Aprovado')
    }
    else{
        alert('Reprovado')
    }

}

