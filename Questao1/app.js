let titulo = document.querySelector('h1');
titulo.innerHTML = 'Tech devs';


function verificarNome(){
    let nome = document.querySelector('input').value;
    console.log(nome);
    if (nome == ''){
        alert('Desculpe, nenhum nome fornecido!');
    } else{
        alert(`Olá ${nome}, seja bem vindo(a) à nossa empresa`);
    }
}

