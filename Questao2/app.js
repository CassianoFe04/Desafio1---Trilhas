let titulo = document.querySelector('h1');
titulo.innerHTML = 'Saude+';


function verificarIdade(idade){
    let idade = document.querySelector('input').value;
    if (idade >= 60){
        alert('Aguarde na fila de prioridade');
    } else{
        alert(`Aguarde na fila normal`);
    }
}

